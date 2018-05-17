---
date: 2018-05-15
title: What is /etc/default/server-env
categories:
   - AWS
description: "What is /etc/default/server-env"
type: Document
---
05/15/2018

## Question
- What is `/etc/default/server-env`?
- How does a running instance know what application or environment it's in?
- How does `/opt/spinnaker/env/ha.env` or `/opt/spinnaker/env/prod.env` get sourced during runtime?

## Answer
During an execution of a deploy stage of an application, Spinnaker will inject some information about the server group into `/etc/default/server-env`.
If we have an application called `armoryspinnaker-prod-nonpolling`, Spinnaker will create a file on the running instance like:
```bash
$ cat /etc/default/server-env
CLOUD_ACCOUNT="aws-prod"
CLOUD_ACCOUNT_TYPE="aws-prod"
CLOUD_ENVIRONMENT="aws-prod"
CLOUD_SERVER_GROUP="armoryspinnaker-prod-nonpolling-v984"
CLOUD_CLUSTER="armoryspinnaker-prod-nonpolling"
CLOUD_STACK="prod"
CLOUD_DETAIL="nonpolling"
EC2_REGION="us-west-2"
LAUNCH_CONFIG="armoryspinnaker-prod-nonpolling-v984-0828050116281"
```

There's a lot of uses cases, for example: Armory Spinnaker uses this information to determine which `/opt/spinnaker/env/*.env` file to load at runtime.

To learn more: https://www.spinnaker.io/setup/features/user-data/
