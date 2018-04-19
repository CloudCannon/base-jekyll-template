---
date: 2018-04-17
title: Spinnaker And K8 V2
categories:
   - Kubernetes
description: "Spinnaker with Kubernetes V2"
type: Document
---
04/19/2018

Below we will answer some general questions on Kubernetes (K8) V2 and how it works with Armory Spinnaker

## How to create a pipeline in K8 V2 with Spinnaker?
Generally speaking, to create a K8 V2 pipeline, you would create a ‘deployment’ manifest for your server group. You can store it in either GitHub, S3, or GCS. In the pipeline you can configure it to trigger when there is a change to it. Details to each can be found in the OSS docs.

You can find more details at this link:
[https://www.spinnaker.io/reference/providers/kubernetes-v2/#using-externally-stored-manifests](https://www.spinnaker.io/reference/providers/kubernetes-v2/#using-externally-stored-manifests)


## How does Spinnakers K8 V2 handle ISTIO changes?
There is no extra support for ISTIO right now. Some things may work perfectly, while others may not work as expected. Armory and the OSS community still determining how to best fit ISTIO into the provider.

## How do you handle pipelines that sidecar containers? Are these just defined in the yml?
Yes. You can add any containers you need to the ‘deployment’/’replicaSet’ manifest. This can be initContainers, side cars, etc.

## How do you handle ingress with Let's encrypt SSL certificates?
It is possible to deploy an ingress resource in the same way you can deploy any manifest. An nginx-ingress controller is configured by a config-map, which can be redeployed by Spinnaker to make changes. Since an ingress controller is a daemon deployed as a pod, it can also be redeployed by Spinnaker if desired.

[https://www.spinnaker.io/reference/providers/kubernetes-v2/#services-ingresses](https://www.spinnaker.io/reference/providers/kubernetes-v2/#services-ingresses)

## Can V1 kube and V2 kube live on the same cluster?
Yes. However, in the Spinnaker UI you will see every k8s resource twice. Once, when the V1 provider sees it, and once, when the V2 provider sees it.







