---
date: 2018-05-21
title: Can I Rename An Application in Spinnaker
categories:
   - Admin
description: Renaming applications in Spinnaker, don't do it
type: Document
---
05/21/2018

## Question

Can I Rename An Application in Spinnaker?

## Answer

No, and yes.  Can you, yes, should you no. The preferred approach is to create a new application and copy and paste your pipelines over from the other application.

A primary reason of why not to rename the application is because Spinnaker names resources based on your application name. For example if you have a deployment stage, it will deploy the resources based on the application name. If you change the application name, there is a chance you could orphan those resources. 

