---
date: 2018-07-16
title: Flint OS for Firefly-RK3288安装指南
categories:
  - 早期版本
type: Document
---
> 注意！早期版本Flint OS for Firefly-RK3288需要被烧写到Firefly-RK3399的机载高速闪存（eMMC）里才能保证正常稳定运行，这一操作将抹去现eMMC里所有的数据且不可逆。如需继续，请事先做好数据备份工作。如需恢复原始系统，请使用官方提供的恢复工具。我们无法对潜在的数据丢失以及安装中可能出现的各种问题负责或者提供及时的技术支持。请三思而后行！

## Linux

#### 0. 所需工具
  
硬件及相关工具:
* [Firefly-RK3288开发板](http://www.t-firefly.com/product/rk3288.html)
* 适配Firefly-RK3288开发板的电源
* USB OTG连接线
	
操作系统及相关软件:
* 常见Linux发行版（我们推荐Ubuntu 16.04 LTS）
* 解压缩工具[7-zip](http://www.7-zip.org/)
	
#### 1. 下载及解压

请在我们的[下载页面](https://fydeos.com/download/)早期版本(Flint OS)下载中获取Flint OS for Firefly-RK3288的镜像文件。以下命令将以`flint_os_firefly_3288_emmc_v0.1.7z`文件名为例。

在你的Linux下执行以下命令对已下载完成的压缩包进行解压缩，并进入解压好的文件夹：

```
$ 7z x flint_os_firefly_3288_emmc_v0.1.7z
$ cd firefly3288_emmc_flintos_0.1
```

#### 2. 进入loader模式

使用USB-OTG连接线将目标Firefly-RK3288开发板与正在使用的Linux PC连接。按住RESET按键，并接通电源使得目标Firefly-RK3288开发板进入loader模式。

#### 3. 运行烧写脚本

在Linux下输入执行脚本的命令（需要sudo密码）

```
$ ./upload_emmc.sh
```

#### 4. 进入Flint OS

脚本运行结束后会出现`all finished.`的提示。此刻手动重启Firefly-RK3288即可进入Flint OS。
	
## Windows

#### 0. 所需工具
 
硬件及相关工具:
* [Firefly-RK3288开发板](http://www.t-firefly.com/product/rk3288.html)
* 适配Firefly-RK3288开发板的电源
* USB OTG连接线
	
操作系统及相关软件:
* 可以使用管理员模式的Windows系统（我们推荐Windows 7）
* 解压缩工具[7-zip](http://www.7-zip.org/)
* 官方提供的烧写工具 - AndroidTool_Release_v2.33 - [点击下载](http://flintos-misc.oss-cn-beijing.aliyuncs.com/AndroidTool_Release_v2.33.rar)

#### 1. 下载及解压

请在我们的[下载页面](https://fydeos.com/download/)早期版本(Flint OS)下载中获取Flint OS for Firefly-RK3288的镜像文件。以下将以`flint_os_firefly_3288_emmc_v0.1.7z`文件名为例。
 
在Windows下将其解压缩，由此应获得一个名为`firefly3288_emmc_flintos_0.1`的文件夹。

将解压缩好的烧写工具AndroidTool_Release_v2.33文件夹拖入以上`firefly3288_emmc_flintos_0.1`文件夹内，此时的文件夹结构应该是：

```
\firefly3288_emmc_flintos_0.1
|-- AndroidTool_Release_v2.33
|   |-- Language
|   |   |-- Chinese.ini
|   |   `-- English.ini
|   |-- Log
|   |-- AndroidTool.exe
|   |-- config.cfg
|   |-- config.ini
|   `-- RK3288UbootLoader_V2.19.01.bin
|-- tools
|   `-- upgrade_tool
|-- boot.img
|-- kernel.img
|-- parameter_emmc.img
|-- part_1_STATE.img
|-- part_2_KERN-A.img
|-- part_3_ROOT-A.img
|-- resource.img
`-- upload_emmc.sh</code>
```

#### 2. 进入loader模式

使用USB-OTG连接线将目标Firefly-RK3288开发板与正在使用的Windows PC连接。按住RESET按键，并接通电源使得目标Firefly-RK3288开发板进入loader模式。

#### 3. 使用AndroidTool烧写

进入AndroidTool_Release_v2.33文件夹并以管理员身份运行AndroidTool.exe。此时AndroidTool应能自动找到上层目录里的磁盘影像文件，如下图所示：

![img](https://flintos.com/wp-content/uploads/2017/04/androidTool.png)

此时点击“执行”即可开始烧写进程。
	
#### 4. 进入Flint OS

烧写完成后，手动重启Firefly-RK3288即可进入Flint OS。
