---
date: 2018-04-30
title: Compliance and Auditing
categories:
   - Admin
description: Compliance and Auditing data from Spinnaker. Compliance. Auditing.
type: Document
---
04/30/2018

## Question:

How can Spinnaker help me with Compliance and Auditing around my deployments?

## Answer:

While Spinnaker doesn't have any _explicit_ functionality around auditing and compliance it exposes a number of tools that will help you craft a solution that fits your needs and use cases.

1. Authentication and Authorization

    Out of the box, Spinnaker supports a wide range of Authentication and Authorization providers. With Authentication enabled you can attach an identity to any action taken within Spinnaker. Further, with Authorization enabled, you can restrict access to Applications and Accounts to particular sets of users which means that only those with permission can have read or write access. By enabling both of these features you can ensure that only the users you have authorized have access to the systems they should. To learn about how to enable these features, be sure to check out our docs on [Authentication](https://docs.armory.io/install-guide/auth/) and [Authorization](https://docs.armory.io/install-guide/authz/).


2. Event Logging

	Spinnaker provides a way to forward all events to external logging and event systems. These events fire each time an action is taken within the platform and user data is also attached to them. Once the data is collected in this external system you can use it however you see fit. This data can be used in a variety of ways such as proving that code was deployed to a staging environment before a production environment or that a specific user is the only one promoting code to production. You can find documentation on how to configure this [here](https://docs.armory.io/admin-guides/notifications/#audit-logs).

    
3. Armory Pipelines As Code

	Armory [Pipelines as Code](https://docs.armory.io/user-guides/dinghy/) provides a way for teams to manage their pipelines alongside their application repositories. By pulling pipeline definitions into the application lifecycle they are subject to the same Pull Request/Review cycle as the rest of the application. This means that teams can make sure that there are no malicious changes to pipelines before they are put in place. Also, by having these pipelines as code, you can automate compliance checks as part of CI to ensure that any required stages are present and that any pipelines with missing stages aren't accepted into the repository.