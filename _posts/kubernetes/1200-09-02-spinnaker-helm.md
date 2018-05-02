---
date: 2018-01-18
title: Spinnaker And Helm
categories:
   - Spinnaker
description: How Spinnaker and Helm play together
type: Document
---
04/26/2018

## Base Level of Understanding
This post builds off an understanding of general concepts in Helm Charts, and Spinnaker. If you would like to brush up on these, check out the below links.

[https://docs.helm.sh/developing_charts/#charts](https://docs.helm.sh/developing_charts/#charts)
[https://www.spinnaker.io/concepts/](https://www.spinnaker.io/concepts/)<br/>
[Video Series On Spinnaker Concepts](https://kb.armory.io/spinnaker%20concepts/what-is-spinnaker)
[docs.armory.io](docs.armory.io)



## Question:
Which one is the best for me Helm or Spinnaker?

## Answer:
Both. One complements the other. 

## What Helm Does Well, And What Helm Does Ok
Helm strength lies in making manifest bundles (Charts) for multi-environment deployments stress free, componentized, and easily reusable. Helm does this by allowing easy templating of Kubernetes resources. Spinnaker does this also, but at the time of writing this Spinnaker doesn’t provide the ability to template your resources. Helm also gives you the ability to roll out and deploy your applications, but here is where the differeicators start. Scripting your deployment with Helm is very similar to scripting your deployments with Kubernetes manifests. What this means is none of the advanced, zero code, functionality that Spinnaker provides is available. Such as blue/green deployments and automated canary testing.

## What Spinnaker Does Good, And What Spinnaker Does Ok
Spinnaker is a multi-cloud, Kubernetes loving, application delivery powerhouse. It lets Netflix deploy applications 4000 times a day, that is 2.5 deployments a minute, one deployment nearly every 25 seconds. Spinnaker is best in class in deployments and all the functionality it wraps around it.  OSS Spinnaker is also great at understanding what other tools do better and incorporating that functionality into its platform.  In this case it’s Helm Charts. Isn’t OSS great‽

Check out our blog post on it here:
[https://blog.armory.io/deploy-helm-charts-with-spinnaker/](https://blog.armory.io/deploy-helm-charts-with-spinnaker/)
