---
date: 2018-07-30
title: 在早期 FydeOS 版本中启用 OTA 升级
categories:
  - 使用技巧
type: Document
permalink: /recipes/enable-ota-in-earlier-fydeos-releases/
redirect_from:
  - /使用技巧/在早期FydeOS版本中启用OTA升级/
---

>注意：本教程假设你对 Linux 命令行操作并不陌生且具备最基本的操作技巧。若你觉得以下内容难以理解，请寻求身边朋友的帮助或者采用 [直接烧写](https://fydeos.com/instructions-pc) 的办法升级你的 FydeOS。

>本教程针对尚未激活 OTA 升级的 FydeOS 早期版本，包括 FydeOS for PC dev v4.0, v3.41, v3.4 以及 v3.3。若你使用的 FydeOS 版本新于上述版本号，则该教程不适用，你的 FydeOS 已默认搭载 OTA 升级。

## 0. 准备工作

__请注意，只有将 FydeOS 安装进硬盘后才能根据本教程进行 OTA 升级的启用，通过烧写 U 盘体验是无法进行 OTA 升级的！__

请参照 [该教程](https://faq.fydeos.com/%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/%E5%B0%86FydeOS-for-PC%E5%AE%89%E8%A3%85%E8%BF%9B%E7%A1%AC%E7%9B%98/) 将 FydeOS for PC 安装进目标 PC 的硬盘并成功启动进入 FydeOS 的图形界面。


## 1 进入 Bash Shell

参照 [这个教程](/使用技巧/在FydeOS中进入Shell/) 进入 Bash Shell 环境并获得 root 权限。


## 2. 运行命令

请严格按照以下逐行输入：<br>
（条件允许的话，请最好直接逐条复制 - 粘贴以下命令进入命令行。__提示：默认情况下，在网页版 Crosh Shell 中你只需要鼠标右键单击空白处即可将剪贴板的内容粘贴到当前光标上。__）：

```bash
mount -o remount rw /
cat >> /etc/lsb-release <<EOF
CHROMEOS_RELEASE_APPID={49BA18F3-93DB-4F43-B966-3BBC57881C42}
CHROMEOS_BOARD_APPID={49BA18F3-93DB-4F43-B966-3BBC57881C42}
EOF
```

## 3. 检查

输入：
```bash
cat /etc/lsb-release
```
然后在屏幕输出的内容里核对以下是否含有 `CHROMEOS_RELEASE_APPID` 及 `CHROMEOS_BOARD_APPID` 项，并且两项的值严格等于：
```
{49BA18F3-93DB-4F43-B966-3BBC57881C42}
```
_注意：请务必仔细检查核对，若出现任意字符错误将导致无法通过 OTA 方式升级。若发现输入有误，可通过 `vim` 编辑器修改 `/etc/lsb-release` 文件。_


## 4. 开始升级

执行命令完成后，可至浏览器「自定义及控制 Chromium」菜单 -> 「关于 FydeOS」 -> 点击「检查是否有更新」来启动升级机制。若升级存在，系统将自动启动升级过程。此时你尽可继续你的工作，升级的过程中仅耗费流量并不影响系统性能。安装包比较大，需要一定的时间下载，请耐心等待。待升级完成后，你只需根据屏幕提示重启系统即可自动切换到最新版本的 FydeOS。