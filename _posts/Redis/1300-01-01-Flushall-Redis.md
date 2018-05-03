---
date: 2018-05-03
title: Redis's Flushall Is Not Spinnaker's Friend
categories:
   - Redis
description: Why not to run Redis's Flushall with Spinnaker. Flushall. Redis.
type: Document
---
05/03/2018

## Question:
Should I do a Redis __flushall__ on my Redis database?

## Answer:
Before we go into the details, a good rule of thumb is to never use __flushall__ with Spinnaker. Now let me explain why, and what issues we have seen. 

First it’s important to know how Redis plays a role in Spinnaker. Redis has three primary functionalities. <br/>
As a cache for [Igor](https://github.com/spinnaker/igor)<br/>
As a cache for [Clouddriver.](https://github.com/spinnaker/clouddriver) <br/>
As a queue for [Orcha](https://github.com/spinnaker/orca)<br/>

More Details:
1. *Igor provides a single point of integration with Jenkins, Travis and Git repositories ( BitBucket, Stash, and Github ) within Spinnaker.* 

    *Igor keeps track of the credentials for multiple Jenkins and/or Travis hosts and sends events to [echo](https://github.com/spinnaker/echo) whenever build information has changed.*

2. *Orcha is the orchestration engine for Spinnaker. It is responsible for taking a pipeline or task definition and managing the stages and tasks, coordinating the other Spinnaker services.*

    *Orca pipelines are composed of stages which in turn are composed of tasks. The tasks of a stage share a common context and can publish to a global context shared across the entire pipeline allowing multiple stages to co-ordinate. For example a bake stage publishes details of the image it creates which is then used by a deploy stage.*

    *Orca persists a running execution to Redis.*

3. Many of Spinnakers micros services poll the provider system quite frequently, in order to be less taxing, [Clouddriver](https://github.com/spinnaker/clouddriver] and (Igor)[https://github.com/spinnaker/igor) will poll the provider for necessary information roughly every 30 seconds and store that information on Redis. This helps reduce the impact Spinnaker has on the provider system.

## Example Of Why Not To Flushall
We had an interaction with a user using Igor 1.87.4. Their Spinnaker system was not running at the speed it needed to after a rollback, and the user decided to run a __flushall__ on Redis’s Igor store.  Despite having the __disable concurrent pipeline execution__ checked, this caused Igor’s cache to be completely cleared, this is when the party really started. 

![disable concurrent pipeline execution](https://dha4w82d62smt.cloudfront.net/items/3f351d263V1y3K0I2Q3c/Image%202018-05-03%20at%209.22.21%20AM.png?X-CloudApp-Visitor-Id=3010088&v=a4b4b608)

With Igor’s cache cleared, it reached out and got all the jenkins jobs, which in turn caused [Echo](https://github.com/spinnaker/echo), to blast out a notification to Spinnaker to kick off all corresponding pipelines, in this case it was 500 different executions of pipelines.  Due to a little luck we were able to stop nearly all of them before any major issues occured. Then we drank together and laughed cautiously at our learnings.