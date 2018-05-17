---
date: 2018-01-18
title: Parameters with Kubernetes Manifest And Using SpEL For Dynamic Environment Promotion
categories:
   - Kubernetes
description: How to promote a build with parameters in a manifest file based on a manual judgement stage with Spinnaker using Kubernetes
type: Document
---
05/17/2018

## Question:
How do I dynamically promote a build with parameters in a manifest file in Spinnaker using Kubernetes?

## Answer:
1. The first step is to understand how to use parameters in your kubernetes manifest file.  Here is a link to some good documentation:
[Parameterize Kubernetes Manifests](https://www.spinnaker.io/guides/user/kubernetes-v2/parameterize-manifests/#parameterize-kubernetes-manifests)

2. The second step is to create a pipeline expression to dynamically decide where to deploy the code based on some action. For our example we are using a manual judgement stage to determine if the code should go to Prod or Staging.

Example: <br/>
`Promote:${#judgement('Promote') == '' ? parameters['namespace'] : #judgement('Promote')}`

If you would like to learn more about SpEL and Pipeline expressions with Spinnaker you can find it here:
[Pipeline Expressions Guide](https://www.spinnaker.io/guides/user/pipeline-expressions/#pipeline-expressions-guide)


