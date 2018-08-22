---
date: 2018-08-22
title: 如何干掉FydeOS的启动画面logo
categories:
  - 使用技巧
type: Document
---

## 1.FydeOS的启动画面

指的是FydeOS的启动时的白底、带有FydeOSlogo的界面，根据系统启动的时间，该画面可能显示5s-5min不等的时间。不少朋友希望将其更换成chrome或者chromium的logo，下面简单的谈一下如何对启动画面的logo进行更改。

## 2.如何更改

FydeOS启动时所显示的logo存放在以下路径中：

 - /usr/share/chromeos-assets/images_200_percent
 - /usr/share/chromeos-assets/images_100_percent

您将能在此路径中看到以“boot_splash_frame*.png”命名的图片，您需要进行以下步骤：

 - 从Chorme OS或者Chromium OS镜像中导出它们的对应启动画面logo文件
 - 以管理员账户权限替换FydeOS原有的启动画面logo文件

至此，重新启动，您应该已经能够看到FydeOS的启动画面发生了变化。

## 3.注意事项

 - 若您使用LIVE CD等工具进行替换，请替换ROOT-A和ROOT-B两个分区的上述文件。
 - 系统升级后您所做的修改可能消失，为了便于系统升级后替换，高级用户可以自行编写脚本。
 - 当然，您也可以替换成自己的logo。“boot_splash_frame*.png”中星号所代指的数字是该图片在启动时的显示顺序，善用这一规律可以将FydeOS的启动画面替换成您所喜爱的动态画面。
 - 由于笔者已经迁移至gitlab，因此如有疑问，请至论坛反馈，谢谢。
 
 *本向导受到GPL v3协议(http://www.gnu.org/licenses/gpl-3.0.en.html)的保护。