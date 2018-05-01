---
date: 2018-04-17
title: Shared Configuration Repository
categories:
   - AWS
description: "A guide for using Spinnaker with multiple AWS"
type: Document
---
04/19/2018

## Question
We would like a guide that shows us how to use the same or multiple spinnaker installations to deploy to multiple AWS Accounts while sharing a single configuration repository.

## Answer
Having multiple Spinnaker installations, with multiple AWS accounts, share the same configuration repository is possible. First let's cover a few things that need to be baselined, after that we can jump over to our docs for more details.

## Spinnaker Environment
This is where Spinnaker (the service) lives. Usually correlated with an appropriate DNS entry. ex: https://spinnaker.yourcompany.com. This is useful for different levels of isolations. There's multiple methods of isolations you can do: multiple clouds (Kubernetes, AWS), AWS accounts, Kubernetes namespaces, different VPCs, or even just different instances with new datastores.

## Deployment Target
This is where Spinnaker is configured to deploy *to*. This is useful for managing applications across different cloud providers, accounts.

## Documentation
With the above understanding jump over to our documentation and enjoy.
[https://docs.armory.io/admin-guides/shared_configuration_repo/](https://docs.armory.io/admin-guides/shared_configuration_repo/)

