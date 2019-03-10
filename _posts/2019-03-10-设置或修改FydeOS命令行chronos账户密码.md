---
date: 2019-03-10
title: 设置或修改 FydeOS 命令行 chronos 账户密码
categories:
  - 使用技巧
type: Document
permalink: /recipes/chronos-password/
---

从 FydeOS for PC v6.0 开始，系统命令行默认用户`chronos`将不再设置默认密码。你可以直接使用`sudo`命令执行需要 root 权限的命令行操作。

你可以通过以下两种方式设置或修改`chronos`账户密码：

## 1. 使用脚本

```
$ sudo chromeos-setdevpasswd
```
根据提示，输入并确认你希望设置的密码即可。

请注意，此种方法设置的密码不能作为 SSH 远程登录`chronos`账户的凭证。如果你希望获得 root 权限以及开启 SSH 远程连接并使用同一个密码，请使用下一种方法。


## 2. 执行命令

如果你希望获得 root 权限以及开启 SSH 远程连接并使用同一个密码，请使用命令：

```
$ sudo mount -o remount rw /
$ sudo passwd chronos
```
根据提示，输入并确认你希望设置的密码即可。