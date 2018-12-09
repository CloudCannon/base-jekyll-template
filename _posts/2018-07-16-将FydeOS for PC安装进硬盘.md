---
date: 2018-07-16
title: 将 FydeOS for PC 安装进硬盘
categories:
  - 起步走
type: Document
permalink: /getting-started/install-fydeos-to-hdd/
redirect_from:
  - /使用技巧/将FydeOS-for-PC安装进硬盘/
---
>注意！安装 FydeOS 到硬盘上将会抹掉硬盘上所有数据。该功能仍在测试阶段，我们无法对潜在的数据丢失以及安装中可能出现的各种问题负责或者提供及时的技术支持。请三思而后行！

## 0. 通过 USB 盘等方式引导启动 FydeOS for PC

请参照 [该教程](https://fydeos.com/instructions-pc/) 制作可以引导启动的 FydeOS for PC 并在目标 PC 上成功启动进入 FydeOS 的图形界面。

## 1. 进入终端

在 FydeOS for PC 图形界面出现之后，请同时按下键盘上 `Ctrl`+`Alt`+`F2` 键（在某些电脑上，比如 Apple Mac 上需要按下 `Fn`+`Ctrl`+`Alt`+`F2`，这时系统将会自动切换到 TTY 命令行模式。若需要，可按 `Ctrl`+`Alt`+`F1`（或 `Fn`+`Ctrl`+`Alt`+`F1`）退回到图形界面模式。

## 2. 登录系统

FydeOS 即将用命令行模式提示您输入用户名以及密码。在 FydeOS for PC 中，默认的用户名和密码都是 `chronos`，输入完成后将会进入开发者模式的命令行。

## 3. 确认目标磁盘

输入命令 `lsblk` 以获得目前装载的物理磁盘列表。通常情况下，您 PC 里的物理硬盘将以 `sdX` 的形式显示。根据提示的磁盘空间大小和已分区的数量，请您判断需要安装 FydeOS 的物理磁盘盘符，比如 `sda`。以下的命令将以 `sda` 为例。

## 4. 运行安装脚本

输入命令：

```
sudo /usr/sbin/chromeos-install --dst /dev/sda
```

系统将提示输入管理员密码，请输入 `chronos`。安装脚本将最后确认您是否要继续并提示如果继续目标磁盘将要被清空。如果您确定，请输入 `Y` 并回车确认。

## 5. 等待脚本运行

泡一杯咖啡，看一集美剧。

## 6. 脚本运行结束后

如提示，请取出 USB 盘，重启电脑，并祈祷以上一切都成功了。祝好运。
