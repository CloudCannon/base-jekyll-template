---
date: 2018-07-16
title: Flint OS for Firefly-RK3399 安装指南
categories:
  - 早期版本
type: Document
---
> 注意！Flint OS 需要被烧写到 Firefly-RK3399 的机载高速闪存（eMMC）里才能保证正常稳定运行，这一操作将抹去现 eMMC 里所有的数据且不可逆。如需继续，请事先做好数据备份工作。如需恢复原始系统，请使用官方提供的恢复工具。我们无法对潜在的数据丢失以及安装中可能出现的各种问题负责或者提供及时的技术支持。请三思而后行！

## Linux

#### 0. 所需工具
  
硬件及相关工具:
* [Firefly-RK3399 开发板](http://www.t-firefly.com/product/rk3399.html)
* 适配 Firefly-RK3399 开发板的电源
* USB OTG 连接线
	
操作系统及相关软件:
* 常见 Linux 发行版（我们推荐 Ubuntu 16.04 LTS）
* 解压缩工具[7-zip](http://www.7-zip.org/)
	
#### 1. 下载及解压

请在我们的 [下载页面](https://fydeos.com/download/) 早期版本 (Flint OS) 下载中获取 Flint OS for Firefly-RK3399 的镜像文件。以下命令将以 `flint_os_firefly_3399_emmc_v0.1.7z` 文件名为例。

在你的 Linux 下执行以下命令对已下载完成的压缩包进行解压缩，并进入解压好的文件夹：

```
$ 7z x flint_os_firefly_3399_emmc_v0.1.7z
$ cd firefly3399_emmc_flintos_0.1
```

#### 2. 进入 loader 模式

使用 USB-OTG 连接线将目标 Firefly-RK3399 开发板与正在使用的 Linux PC 连接。按住 RESET 按键，并接通电源使得目标 Firefly-RK3399 开发板进入 loader 模式。

#### 3. 运行烧写脚本

在 Linux 下输入执行脚本的命令（需要 sudo 密码）

```
$ ./upload_emmc.sh
```

#### 4. 进入 Flint OS

脚本运行结束后会出现 `all finished.` 的提示。此刻手动重启 Firefly-RK3399 即可进入 Flint OS。
