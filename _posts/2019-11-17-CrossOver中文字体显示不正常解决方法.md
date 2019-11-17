---
date: 2019-11-17
title: CrossOver中文字体显示不正常解决方法
categories:
 - 使用技巧
type: Document
permalink: /recipes/crossover-chinese-font/
---

如果觉得文字太长，可以直接跳到“进入正题”部分
	
## 0. 前置知识

CrossOver基于wine，因此许多wine的配置也能在CrossOver上实施。

CrossOver在这里是Android app的形式，它的数据在Android容器里的`/data/data/com.codeweavers.cxoffice/files/`这个目录里面，在外部系统里访问该目录要在前面加上`/opt/google/containers/android/rootfs/android-data/`。看一下这里面的内容

![image-20191116210221289](https://fydeos.com/wp-content/uploads/2019/11/image-20191116210221289.png)

### 0.1 wine环境
每一个wine容器（环境）用WINEPREFIX来区分，在这里就是数据目录下面的`prefixes`文件夹，可以知道每次新建一个wine环境这里会多一个子目录，每个子目录下的内容相近

![image-20191116205648049](https://fydeos.com/wp-content/uploads/2019/11/image-20191116205648049.png)

这里我们选择QQMusic的容器来测试

首先看一下该目录：

![image-20191116205920621](https://fydeos.com/wp-content/uploads/2019/11/image-20191116205920621.png)

这里主要注意两个东西：

#### 0.1.1 字体文件夹

这里一共有三个字体文件夹。其中两个在`./drive_c/fonts/`里面

![image-20191116210431018](https://fydeos.com/wp-content/uploads/2019/11/image-20191116210431018.png)

一个是`system`，可见它指向了Android子系统里面的字体文件夹，这个文件夹是只读的

另一个是wine带的文件夹，看到它也是个软链接指向了数据目录里的`share/wine/fonts`目录，这个应该是wine带的字体，所有容器公用的

第三个就是`./drive_c/windows/Fonts/`，这个其实就是Windows的系统字体目录，每个容器独立的。查看可以知道这个目录其实是空空如也，想必是版权原因。

#### 0.1.2 注册表项

注意`.reg`后缀的文件，这些其实是文本格式存储的Windows注册表数据，不同的文件名对应不同的注册表树，这个问题里我们要通过修改注册表来解决。

wine里和字体相关的注册表项主要有
- wine相关配置
	- `HKEY_CURRENT_USER\Software\Wine\Fonts\Replacements` 通过名字可以知道，这里记录的是某一字体的替换字体
	- `HKEY_CURRENT_USER\Software\Wine\Fonts\External Fonts` 这里记录的外部字体（C:\\windows\Fonts之外的字体）文件的路径
	- `HKEY_CURRENT_USER\Software\Wine\Fonts\Cache` 字体缓存吧可能是，其中每一个子目录的名字正是是字体的标准名称
- Windows相关配置
	- `HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\FontLink\SystemLink`这里似乎能给某种字体指定对应的文件路径，看到很多教程说修改这个来支持中文，但是试过好像并没有效果
	- `HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Fonts`字体名对应的路径，这里不用管这个

## 1. 进入正题

修正一共两步，建议在CrossOver菜单里停止所有wine进程后再操作

### 1.1 增加中文字体

这里我们选择增加经典的文泉驿微黑字体`wqy-microhei.ttc`，可以从网上下载一个，放到`./drive_c/windows/Fonts/`里面，wine会自动识别这个字体，

**建议添加字体后重启子系统然后确保正确读取，否则可能导致下一步修改注册表项进行的修改不生效，原因未知。**

如何确保字体被wine读取呢？

在菜单中选择`Command Shell`，在出现的命令行中输入`regedit`启动Windows注册表编辑器，在`HKEY_CURRENT_USER\Software\Wine\Fonts\Cache`里面应该能找到一个叫`WenQuanYi Micro Hei`的子目录，说明文泉驿微黑字体被wine正确读取。

### 1.2 修改注册表项

这里我们可以选择`regedit`里面编辑注册表，不过要修改的表项太多了，应该没人这么做。

我们可以通过修改`user.reg`来达到这个目的，效果是一样的，首先墙裂建议停止所有wine进程后再操作！

我们要修改的表项是`HKEY_CURRENT_USER\Software\Wine\Fonts\Replacements`，指示某种字体缺失后的候选字体，我们要给所有常用的中文字体添加文泉驿微黑作为候选字体。

修改前的注册表：

![](https://fydeos.com/wp-content/uploads/2019/11/regedit0.png)

在我们修改之前，会有很多表项含的值为`Noto Sans CJK SC Regular`，这也是一种中文字体，我们需要将这些项的值替换成`Noto Sans CJK SC Regular`和`WenQuanYi Micro Hei`两个值，并增加一些字体如`宋体` `黑体`等的候选。

- 打开`user.reg`，找到以`[Software\\Wine\\Fonts\\Replacements] `开头的块（在文件偏末尾的位置），删除该大块里面形如`"XXXXXXX"="Noto Sans CJK SC Regular"`的行，注意不要在中间留空行。

- 在该块的末尾添加如下项

  ```
  "DFKai-SB"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "FangSong"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "Hiragino Sans GB"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "KaiTi"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "Microsoft JhengHei"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "Microsoft Sans Serif"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "Microsoft YaHei"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "MingLiU"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "NSimSun"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "PMingLiU"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "SimHei"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "SimKai"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "SimSun"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "\x4eff\x5b8b"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "\x4eff\x5b8b_GB2312"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "\x5b8b\x4f53"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "\x5fae\x8f6f\x96c5\x9ed1"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "\x601d\x6e90\x9ed1\x4f53 Regular"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "\x65b0\x5b8b\x4f53"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "\x65b0\x7d30\x660e\x9ad4"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "\x6977\x4f53"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "\x6977\x4f53_GB2312"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "\x96b6\x4e66"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  "\x9ed1\x4f53"=str(7):"Noto Sans CJK SC Regular\0WenQuanYi Micro Hei\0"
  ```
保存后从regedit里面可以看到，新增了一些常见的字体，并新增了文泉驿微黑作为候选字体。

  ![](https://fydeos.com/wp-content/uploads/2019/11/regedit1.png)

## 2. 效果

原先歌词中的中文部分显示为方块，现已显示正常。

![](https://fydeos.com/wp-content/uploads/2019/11/qqmusic.png)



另外网上说的另一种似乎比较可靠的办法是直接将原版Windows的Fonts文件夹里的字体全部放到`./drive_c/windows/Fonts/`，但是我没有尝试过，可以尝试一下。