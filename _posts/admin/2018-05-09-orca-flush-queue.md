---
date: 2018-05-09
title: Debugging Slow Orca Performance
categories:
   - Admin
description: Debugging Slow Orca Performance. Orca. Spinnaker. Performance.
type: Document
---
05/09/2018

## Question:

My Orca instance is feels sluggish. How can I debug the cause and fix the problem?

## Answer:

There are a lot of factors that could lead to poor performance within Orca. We'll do our best document various issues we've found when operating Orca.

## Dead or Undelivered Messages

Under the hood, Orca uses Redis to store a queue of tasks to perform. During each polling cycle, Orca it will attempt to read any messages that haven't been delivered and are past due. In some cases, these messsages may be deemed "undelieverable" and requeued. If enough of these messages build up, you may experience a slow down in your Pipeline executions.

There are some key indicators that you may use to diagnose this behavior:

* Tasks such as Resize, Deploy take much longer to complete. For example, as task that typically takes 1-3 minutes now takes 6-10 minutes.
* 30 second Wait stages take longer than 30 seconds to complete.

If you're experienceing a similar slow down, you can inspect the Orca task queue with `redis-cli`.

```
$ redis-cli HGETALL orca.task.queue.attempts
1) "5b4817d4a92bb3683a472375be074bba"
2) "53371"
3) "ecc2f6b9dcf25515cf57f3a5629556df"
4) "53370"
5) "ab6ba3e1bd978f63be05bcde681ef251"
6) "53371"
7) "7372c8bc370289560a0f3dacc995d3e6"
8) "53366"
9) "0561af8d7f6f6c156373e5b59d82d2f2"
10) "53369"
```

If any of the entries in this result seem unreasonably high they would make a good candidate for deletion. You can delete these entries with `redis-cli` as well. For example, to remove one of the entries from the list above we need to issue the 4 following commands:

```
ZREM orca.task.queue.queue 5b4817d4a92bb3683a472375be074bba
SREM orca.task.queue.hashes 5b4817d4a92bb3683a472375be074bba
HDEL orca.task.queue.messages 5b4817d4a92bb3683a472375be074bba
HDEL orca.task.queue.attempts 5b4817d4a92bb3683a472375be074bba
```

You should repeat the process for each message with a high attempt count.
