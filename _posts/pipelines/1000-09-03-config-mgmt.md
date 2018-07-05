---
date: 2018-04-30
title: Ansible and Config Management
categories:
   - Pipelines
description: Using Ansible and other configuration management tools with Spinnaker and VM baking. Chef. Ansible. Salt. Baking. Rosco.
type: Document
---
04/30/2018

## Question:
Can I still use Ansible and other Configuration Management tools with Spinnaker?

## Answer:
You can still use all of the same tools you currently use when baking virtual machine images. Rosco, Spinnaker's image bakery, uses Hashicorp's [Packer](https://www.packer.io/) under the hood to build AWS and GCP images. Tools such as Ansible, Chef or Puppet can be used to install packages on and configure these images as they are being built. However, instead of using these tools to _also_ facilitate deployment of your applications, Spinnaker takes over once the Bake has completed and is responsible for deploying these images to the appropriate cloud platform. By building your machine images this way you're practicing what's knows as [Immutable Infrastructure](https://kb.armory.io/faq/#what-is-immutable-infrastructure).
