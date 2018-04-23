---
date: 2018-04-23
title: Spinnaker Script Stage
categories:
   - pipelines
description: Describes how to use the Spinnaker script stage in a spinnaker pipeline
type: Document
---
04/23/2018

## Question
How do I use the script stage in a spinnaker pipeline?

## Answer
The Spinnaker Script Stage stage is a stage within Spinnaker that allows you to execute a script as part of your deployment pipeline. Under the hood, this script uses a specialized Jenkins job which is responsible for checking out and executing your script. This stage has been deprecated and removed from the OSS documentation so using it is discouraged.

## Script Stage Alternatives
1. Run Job stage - Users who are deploying to Kubernetes have the opportunity to use the Run Job stage as part of their pipeline. This stage allows you to deploy a container to do the work you want to do.

2. Jenkins stage - Since the Script stage was just a Jenkins job under the hood, users can build custom Jenkins jobs that encapsulate the work they want to do and execute those as part of their deployment.