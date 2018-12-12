---
title: 安装 Linux 应用
help_section:
  - 管理您的应用
  - 添加应用和扩展程序
weight: 4
type: Document
permalink: /help/apps/install/linux
---

你可以在 FydeOS 上安装 Linux 工具、编辑器和 IDE，以供编写代码、创建应用的需求。

注意：对 Linux 提供的支持功能目前仍处于测试阶段，你可能会遇到问题。

如何在 FydeOS 上进行 Linux（测试版）的设置和安装 Linux 应用，请参照官网知识库[相关文档](https://faq.fydeos.com/category/crostini/)。

## 安全性与权限

通常情况下，FydeOS 是通过在「沙盒」中运行各个应用来保护计算机，不过是在同一个沙盒中运行所有 Linux 应用。也就是说，有害的 Linux 应用可能会影响其他 Linux 应用，但不会影响 FydeOS 的其余部分。

所有 Linux 应用都可以使用与 Linux 共享的权限和文件。

## 解决 Linux 方面的问题

如果遇到 Linux 或 Linux 应用方面的问题，请尝试按以下步骤操作：

- 重启 FydeOS。
- 检查虚拟机是否为最新版本。具体方法为：在浏览器中，转到`chrome://components`，在「cros-termina」下方，选择检查是否有更新。如果下载更新，则可能需要重启 FydeOS。
- 更新软件包。具体方法为：打开终端，然后运行`sudo apt-get update && sudo apt-get dist-upgrade`。

注意：你可能需要重启 FydeOS 才能让更改生效。Linux 会在完成初始设置后自动检查是否有新的软件包，并在运行过程中每 24 小时检查一次。

## 了解哪些功能或设备尚不受支持

- 扬声器、麦克风、摄像头和 USB 设备尚不受支持。
- Android Studio 尚不受支持，包括模拟器和 USB 调试。
- 硬件加速尚不受支持，包括 GPU 和视频解码。
- 默认终端应用支持 ChromeVox，但其他 Linux 应用还不支持它。








