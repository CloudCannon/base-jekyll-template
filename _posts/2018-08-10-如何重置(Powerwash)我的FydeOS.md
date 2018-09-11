---
date: 2018-07-30
title: 如何重置（Powerwash）我的 FydeOS
categories:
  - 使用技巧
type: Document
---

> 该操作的目的是恢复出厂设置并清空所有用户数据，包括但不限于已经安装的浏览器插件、安卓程序、下载文件夹内的数据以及浏览器缓存文件和历史记录等。该操操作执行成功之后结果不可逆，请三思而后行。


## 1. 进入 Shell

参照[这个教程](/使用技巧/在FydeOS中进入shell/)进入 shell 环境。


## 2. 运行命令


```bash
echo 'clobber' | sudo tee /mnt/stateful_partition/.update_available
sudo reboot
```

并在提示之后输入密码，默认为 `chronos`。

系统重启之后将自动完成数据清除并自动进入 OOBE（开箱体验）环节。