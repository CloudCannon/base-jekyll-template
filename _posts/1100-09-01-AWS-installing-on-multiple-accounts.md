---
date: 2018-04-17
title: Multiple AWS Accounts
categories:
    - amazon web service
description: "A guide for installing Spinnaker on multiple AWS accounts from a single repo"
type: Document
---
Below we will explain how switching between environment profiles, gives the ability to switch between AWS account when you have a single Armory Spinnaker installation.

## What you will need

A file similar to */opt/spinnaker/env/prod.env* The name *prod* comes from the *stack* in a servergroup.

Example:
`armoryapinnaker-prod-v999`

## Setting Environment Variables

In this file, many different environment variables can be set depending on needs

## What Is Default.env

*/opt/spinnaker/env/default.env* is created by user-data in the *deploy-stage.* This can be edited, and most user defined env should be in 
*/opt/spinnaker/env/**{your-env-here}**.env*

## What Is Rendered.env

*/opt/spinnaker/env/resolved.env* file contains all the *env* in a combined to a single file.

## Additional Links

[Information on the Debian configuaration repository](https://github.com/armory/spinnaker-config-deb)

[More about env files](https://github.com/armory/spinnaker-config-deb/tree/master/deb-config/spinnaker/env)



