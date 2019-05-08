---
date: 2019-05-08
title: 在 Chromebook Pixel 2013 上使用新版本的 FydeOS
categories:
  - 使用技巧
type: Document
permalink: /recipes/remedy-for-chromebook-pixel-2013/
---

Chromebook pixel 2013 对于 Google 来说已是 end-of-life 的状态，故新版本的上游项目主动取消了对该型号原生固件下显示卡的内核支持。在不做任何修改的前提下，FydeOS for PC v5.31 是最后一个能适配该设备的版本。

但经由热心用户 [@haneyo](https://fydeos.com/community/users/haneyo/replies/) 提示，可以通过刷写第三方固件配合 FydeOS for PC v6.1 或更新版本的内核修补从而在 Chromebook Pixel 2013 设备上正常使用更新版本的 FydeOS。本教程将详解如何对 Chromebook Pixel 2013 进行固件刷写。


## 0. 适用对象

 - Chromebook Pixel 2013 设备的用户
 - Chromebook Pixel 2013 上务必有一套可运行的 Chrome OS，或 FydeOS for PC v5.31


## 1. 所用工具

我们需要用到~~英国知名企业家、伦敦牛津街老牌百货商场创始人 [John Lewis](https://en.wikipedia.org/wiki/John_Lewis_(department_store_founder)) 先生~~供职于世界首屈一指的开源软件公司之一的 Linux 爱好者 [John Lewis](https://johnlewis.ie/about/) 先生为社区免费提供的适用于 Chrome 设备的固件影像。更多关于 John Lewis 先生提供的固件影像的相关信息，请查阅他的[博客页面](https://johnlewis.ie/custom-chromebook-firmware/rom-download/)。


## 2. 刷写办法

 - 在 Chromebook Pixel 2013 设备上启动 FydeOS（或 Chrome OS），保持系统联网状态，在浏览器中开启一个 Crosh shell，而后运行以下命令：

    ```bash
    cd;bash <(curl https://johnlewis.ie/flash_cb_fw.sh)
    ```
    ![alt text](https://fydeos.com/wp-content/uploads/2019/05/1-crosh-script.jpg "运行刷写脚本")


 - 以上命令会自动下载所需的脚本文件，若成功，你会收到以下提示：
    ```
    Greetings weary traveller!

    As well as the costs of infrastructure for building 
    and serving ROM’s, I would also like donation toward 
    an example of each chipset of Chromebook. If you have 
    benefited from my work, or want to see an Intel Chromebook 
    supported by the script/firmware which isn’t currently 
    (no guarantee that a particular type of mod will be 
    supported, but I endeavour to get something that works), 
    please consider making a donation using one of the buttons 
    in the sidebar. Please note: regardless of donation, 
    I do not provide support for putting Windows on 
    Chromebooks, as a matter of choice.

    Thank you, press [Enter] to continue:
    ```

    如果你基本同意 John Lewis 的审美选择并愿意继续刷写的过程，请按`Enter`键继续。

 - 之后会出现功能选择菜单，如下：
    ```
    What would you like to do? (note: options will be hidden 
    based on model)

    1. Modify my Chromebook's RW_LEGACY slot.

    3. Restore my Chromebook's BOOT_STUB slot back to stock.

    4. Backup RO_VPD and GBB slots to 
    /home/chronos/user/Downloads (you should do this before 
    flashing a full ROM, then copy the files to a *SAFE* 
    place).

    5. Flash a full ROM to my Chromebook.

    6. Flash a full shellball ROM to my Chromebook (remember 
    alternative OS will no longer boot and RO_VPD + GBB slots 
    will need to be restored to go completely back to stock).

    7. Restore RO_VPD and GBB slots. (you should do this after 
    flashing a shellball ROM. The script expects rovpd.bin and 
    gbb.bin are in /home/chronos/user/Downloads).

    Please choose:
    ```

    如果你的 Chromebook Pixel 2013 没有刷写过固件，强烈建议先选择选项`4`，对目前的官方固件进行备份，以便在发生不可测的问题时可以恢复。

 - 完成固件备份后，选择选项`5`开始固件刷写进程。此时脚本会自动识别你的 Chromebook Pixel 2013 设备型号，并从 John Lewis 网站上下载适配的固件 rom 文件。视当前网络状态，下载过程需要等待一段时间。完成之后，会出触发一个颇有仪式感的确认过程：

    ![alt text](https://fydeos.com/wp-content/uploads/2019/05/2-input-required.jpg "确认你要冒险吗？")

 - 请按照提示，键入以下确认信息（如果这脚本把我的设备搞成🧱，是我自己作死，不作死就不会死！），注意大小写、逗号和感叹号都要一致：
    ```
    If this bricks my link, on my head be it!
    ```
    ![alt text](https://fydeos.com/wp-content/uploads/2019/05/2-1-inputed.jpg "道理我是懂的")


 - 完成确认之后，刷写进程随即自动开始。刷写完成之后会得到如下提示。请确认在提示内容中没有明显的报错信息，键入`sudo reboot`即可重启。
 
    **如果出现错误，请不要重启你的设备，并且重新执行该脚本并在功能选择页面选择`7`以恢复原厂固件。**

    ![alt text](https://fydeos.com/wp-content/uploads/2019/05/3-read-to-reboot.jpg "确认并重启")

 - 至此，你的 Chromebook Pixel 2013 的固件已经更新完成。重启设备之后你会发现系统已切换到由 SeaBIOS 驱动的老式 legacy 启动模式。在这个模式中，FydeOS for PC v6.1 或者更新的版本可以正常引导启动。

## 3. 引用及致谢
<https://johnlewis.ie/custom-chromebook-firmware/rom-download/>
<https://johnlewis.ie/custom-chromebook-firmware/rom-archive/>

感谢 [John Lewis](https://johnlewis.ie) 先生之前对 Chromium OS 社区做出的贡献。