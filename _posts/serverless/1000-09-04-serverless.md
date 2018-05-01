---
date: 2018-04-30
title: Serverless Support with Spinnaker
categories:
   - serverless
description: Serverless Support within Spinnaker and how to accomplish it if needed. Serverless. FAAS. Lambda. Cloud Functions.
type: Document
---
04/30/2018

## Question:
Does Spinnaker support Serverless or other FAAS technologies?

## Answer:
At the moment Spinnaker doesn't have any native support for Serverless technologies. If these are a critical part of your deployment workflow you can always utilize Jenkins to do these as part of your application rollout. Since Spinnaker has a native integration with Jenkins, you can create jobs that roll out your Serverless function and trigger them as part of your Pipeline, making them _feel_ native. This is one of the many ways to make Spinnaker more extensible.

### Related Documentation
- [Working with Jenkins](https://docs.armory.io/user-guides/working-with-jenkins/)

Armory is currently exploring what Serverless support might look like within Spinnaker so if you have any ideas or feedback, be sure to let us know at <https://go.armory.io/ideas>.