---
date: 2018-07-30
title: 在早期 FydeOS 版本中启用 OTA 升级
categories:
  - 使用技巧
type: Document
---

>注意：本教程假设你对 Linux 命令行操作并不陌生且具备最基本的操作技巧。若你觉得以下内容难以理解，请寻求身边朋友的帮助或者采用[直接烧写](https://fydeos.com/instructions-pc)的办法升级你的FydeOS。

> 本教程针对尚未激活 OTA 升级的 FydeOS 早期版本，包括FydeOS for PC dev v4.0, v3.41, v3.4 以及 v3.3。若你使用的 FydeOS 版本新于上述版本号，则该教程不适用，你的 FydeOS 已默认搭载 OTA 升级。

## 0. 准备工作

__请注意，只有将 FydeOS 安装进硬盘后才能根据本教程进行 OTA 升级的启用，通过烧写U盘体验是无法进行 OTA 升级的！__

请参照[该教程](https://fydeos.com/instructions-pc/)制作可以引导启动的 FydeOS for PC 并在目标 PC 上成功启动进入 FydeOS 的图形界面。


## 1. 进入Crosh

在 FydeOS 图形界面下启动Chromium浏览器，并同时按下键盘上`Ctrl+Alt+t`键（在某些电脑上，比如 Apple Mac 上需要按下`Fn+Ctrl+Alt+t`，这时Chromium浏览器会自动弹开一个名为`crosh`新的标签页。


## 2. 进入shell

在弹开的 crosh 标签页的提示下输入：
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
并在提示之后输入密码，默认为`chronos`。


## 4. 运行命令

请严格按照以下逐行输入：<br>
（条件允许的话，请最好直接逐条复制-粘贴以下命令进入命令行。__提示：默认情况下，在网页版 crosh shell 中你只需要鼠标右键单击空白处即可将剪贴板的内容粘贴到当前光标上。__）：

```bash
mount -o remount rw /
cat >> /etc/lsb-release <<EOF
CHROMEOS_RELEASE_APPID={49BA18F3-93DB-4F43-B966-3BBC57881C42}
CHROMEOS_BOARD_APPID={49BA18F3-93DB-4F43-B966-3BBC57881C42}
EOF
```

## 5. 检查

输入：
```bash
cat /etc/lsb-release
```
然后在屏幕输出的内容里核对以下是否含有`CHROMEOS_RELEASE_APPID`及`CHROMEOS_BOARD_APPID`项，并且两项的值严格等于：
```
{49BA18F3-93DB-4F43-B966-3BBC57881C42}
```
_注意：请务必仔细检查核对，若出现任意字符错误将导致无法通过OTA方式升级。若发现输入有误，可通过`vim`编辑器修改`/etc/lsb-release`文件。_


## 6. 开始升级

执行命令完成后，可至浏览器「自定义及控制Chromium」菜单 -> 「关于Chromium操作系统」 -> 点击「检查是否有更新」来启动升级机制。若升级存在，系统将自动启动升级过程。此时你尽可继续你的工作，升级的过程中仅耗费流量并不影响系统性能。安装包比较大，需要一定的时间下载，请耐心等待。待升级完成后，你只需根据屏幕提示重启系统即可自动切换到最新版本的 FydeOS。