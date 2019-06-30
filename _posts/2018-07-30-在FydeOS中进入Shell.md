---
date: 2018-07-30
title: 在 FydeOS 中进入 Shell
categories:
  - 起步走
type: Document
permalink: /getting-started/shell-access/
redirect_from:
  - /使用技巧/在FydeOS中进入Shell/
---


## 1. 进入 Crosh Shell

在 FydeOS 图形界面下启动 Chromium 浏览器，并同时按下键盘上 `Ctrl+Alt+t` 键（在某些电脑上，比如 Apple Mac 上需要按下 `Fn+Ctrl+Alt+t`，这时 Chromium 浏览器会自动弹开一个名为 `crosh` 新的标签页。


## 2. 进入 Bash Shell

在弹开的 `crosh` 标签页的提示下输入：
```bash
shell
```
此时的提示应为：

```bash
chronos@localhost / $
```


## 3. 获得 root 权限

输入：

```bash
sudo su -
```
注意，从 FydeOS for PC v6.0 开始，系统命令行默认用户chronos将不再设置默认密码。你可以直接使用sudo命令执行需要 root 权限的命令行操作。如果你需要更改密码，可参照[该文档](/recipes/chronos-password/)。