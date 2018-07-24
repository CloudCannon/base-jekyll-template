---
date: 2018-07-15
title: FydeOS for RPi安装指南
categories:
  - 安装教程
type: Document
---

## 极简方式

我们推荐使用[etcher](https://etcher.io/)进行SD卡的刻录。etcher是一款帮助用户快速将镜像文件刻录到USB设备或闪存卡中的工具软件，并且可以在Windows、macOS和主流Linux版本等多种操作系统中使用。该软件设计精美，界面友好，相信你马上就能熟知它简单的三部曲操作：

![img](https://fydeos.com/wp-content/uploads/2016/11/etcher-1.gif)

你可以从[etcher官网](https://etcher.io/)下载适配Windows、macOS或Linux的etcher安装包。

请在我们的[下载页面](https://fydeos.com/download/)早期版本(Flint OS)下载中获取FydeOS for RPi的镜像文件。下载完成后，无需解压和重命名，请直接用etcher打开该镜像文件；接下来请选择将要用来烧录FydeOS for RPi的SD卡；最后，你只需要点击“Flash!”按钮，etcher就会帮你处理完剩下的事情！一切完成后，即可取出SD卡并放入你的树莓派中，享受FydeOS带来的全新浏览体验。

如果你喜欢更为传统的安装方式，可以按照以下方式进行操作：

## Windows

1. 请在我们的[下载页面](https://fydeos.com/download/)获取.zip或者.xz格式的镜像文件并使用你喜欢的解压软件解压之，比如[7zip](https://www.7-zip.org/download.html)。

2. 解压缩后，你应该获得一个.img的镜像文件。但若是获得了一个.bin的文件，莫慌张！这和.img的文件的操作方式是一样的，只需要将其重新命名并修改后缀名即可。

3. 使用Windows自带的文件管理器格式化一张内存为4GB或以上的SD卡。

4. 使用[Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/)选择你所使用的镜像文件和SD卡，请注意务必选择正确的驱动，以防损坏任何有用的数据。

5. 按下“写”，顺利完成刻录后，弹出SD卡，就可以将SD卡插入树莓派中使用了。

## macOS

1. 请在我们的[下载页面](https://fydeos.com/download/)获取.zip或者.xz格式的镜像文件并使用macOS自带的解压程序解压之。

2. 解压缩后，你应该获得一个.img的镜像文件。但若是获得了一个.bin的文件，莫慌张！这和.img的文件的操作方式是一样的，只需要将其重新命名并修改后缀名即可。

3. 使用macOS自带的“磁盘工具.app”格式化一张内存为4GB或以上的SD卡。

4. 随后，参照Raspberry Pi网站上的[指南](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md)进行操作，它提供多种技术方式供参考，你可以根据自己的需求进行选择。

4. 完成刻录后，就可以将SD卡插入树莓派中使用了。

## Linux

1. 请在我们的[下载页面](https://fydeos.com/download/)获取.zip或者.xz格式的镜像文件并使用你喜欢的解压软件解压之，比如[7zip](https://www.7-zip.org/download.html)。

2. 解压缩后，你应该获得一个.img的镜像文件。但若是获得了一个.bin的文件，莫慌张！这和.img的文件的操作方式是一样的，只需要将其重新命名并修改后缀名即可。

3. 格式化一张内存为4GB或以上的SD卡，如果你对Linux命令行操作还不是那么熟悉，可以使用带有图形界面的软件，如GNOME Disks。

4. 随后，可参照Raspberry Pi网站上的[指南](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md)进行操作，它提供多种技术方式供参考，你可以根据自己的需求进行选择。

5. 完成刻录后，就可以将SD卡插入树莓派中使用了。

装上FydeOS玩转树莓派吧！如果你在安装过程中遇到任何问题，欢迎联系我们！