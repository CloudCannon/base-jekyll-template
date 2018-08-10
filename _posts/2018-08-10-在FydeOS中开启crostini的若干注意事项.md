---
date: 2018-07-30
title: 在通过 OTA 方式升级的 FydeOS 中开启 crostini
categories:
  - 使用技巧
  - crostini
type: Document
---

> 本教程针对通过 OTA 方式升级到 v4.2 及更新版本并且之前未能成功启动 crostini 组件的用户。通过 U 盘引导启动或全新装入硬盘的 FydeOS 可以直接开启 crostini 组件，无需额外设置。

> 注意：本教程假设你对 Linux 命令行操作并不陌生且具备最基本的操作技巧。若你觉得以下内容难以理解，请寻求身边朋友的帮助。

## 0. 准备工作

本文假设你已经通过 OTA 的方式将早期 FydeOS 版本升级到 v4.2 或更新。FydeOS 的版本可在浏览器右侧「更多」->「关于 Chromium 操作系统」-「详细版本信息」里查看。例如：`10718.78.1.3 (Release Build v4.2 stable-channel amd64-fydeos)`则意味着这是 FydeOS v4.2 的发行版。

本文另假设在升级之前你的系统并没成功启动过 crostini 组件。


## 1. 下载文件

在 FydeOS 的浏览器中下载[该文件](https://download.fydeos.io/tatl-fydeos.tar.gz)，下载完成后得到一个名为`tatl-fydeos.tar.gz`的压缩包文件。


## 2. 进入 Shell

参照[这个教程](/使用技巧/在FydeOS中进入shell/)进入 shell 环境。


## 3. 文件操作

参照以下命令将下载好的`tatl-fydeos.tar.gz`移到`/mnt/stateful_partition/dev_image/`目录下，解压之并重启。

```bash
cd ~/Downloads
sudo cp ./tatl-fydeos.tar.gz /mnt/stateful_partition/dev_image/
sudo su -
cd /mnt/stateful_partition/dev_image/
tar -zxvf tatl-fydeos.tar.gz
rm -rf tatl-fydeos.tar.gz #save around 300M disk space
reboot
```

## 4. 开启 crostini 组件

进入「设置」界面并滚到底部，找到「Linux（测试版）」，点击「启用」。


## 5. 注意事项

 - 首次启用 crostini 组件需要耗费较长的时间，大约15分钟至半小时不等，视计算机配置和网络环境而定。
 - 如在 v4.1 版本尝试开启过 crostini 且并未成功，可依旧按照此教程给系统提供所需文件。完成文件操作后再行点击「Termnial」程序尝试启动。
 - 若仍出错，可尝试通过下载 FydeOS for PC v4.2 镜像文件重新烧写、安装的方法获得内置的 crostini 所需依赖文件。或通过执行 [Powerwash](/%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/%E5%A6%82%E4%BD%95%E9%87%8D%E7%BD%AE(powerwash)%E6%88%91%E7%9A%84FydeOS/) 的方法清除用户文件之后再执行本教程内容。