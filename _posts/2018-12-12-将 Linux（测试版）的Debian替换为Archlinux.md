---
date: 2018-12-12
title: 将 Linux（测试版）的Debian替换为Arch Linux
categories:
  - 使用技巧
  - crostini
type: Document
permalink: /recipes/install-arch-linux/
redirect_from:
  - /使用技巧/crostini/将Linux-测试版-的Debian替换为Arch-Linux/
---

# 0.已知问题

Linux 支持处于测试版阶段，根据你的具体硬件配置，Linux（测试版）所需的组件有一定概率启动失败。


# 1.进入 Termina，安装容器

使用`Ctrl`+`Alt`+`t`可以打开打开`crosh`，在其中输入`vmc start termina`以启动`Termina`虚拟机。

```output
crosh> vmc start termina
(termina) chronos@localhost ~ $
```

`lxc list`列出已经安装的容器：

```output
(termina) chronos@localhost ~ $ lxc list
+---------+---------+-----------------------+------+------------+-----------+
| NAME    | STATE   | IPV4                  | IPV6 | TYPE       | SNAPSHOTS |
+---------+---------+-----------------------+------+------------+-----------+
| penguin | RUNNING | 100.115.92.202 (eth0) |      | PERSISTENT | 0         |
+---------+---------+-----------------------+------+------------+-----------+
```

使用`run_container.sh`命令可以下载并安装`Arch Linux`容器。由于 FydeOS 相对于 Chromium OS 对此命令进行了修改，编辑这个脚本撤销更改。由于 termina 是只读的，将脚本复制到临时目录`/tmp`：

```output
cp /usr/bin/run_container.sh /tmp
cd /tmp
vim run_container.sh
```

找到以下片段：

```bash
# lxc init "google:${FLAGS_lxd_image}" "${FLAGS_container_name}" || \
#   die "Unable to create container from image '${FLAGS_lxd_image}'"
local container_root="/usr/share/intergrade_container"
local lxd_info="${container_root}/lxd.tar.xz"
local root_file="${container_root}/rootfs.squashfs"
local container_alias="intergrade_fydemina"
lxc image import $lxd_info $root_file --alias $container_alias || \
    die "Unable to import image from $root_file"
lxc init $container_alias ${FLAGS_container_name} || \
    die "Unable to create container from image $container_alias"
```

修改为：

```bash
lxc init "google:${FLAGS_lxd_image}" "${FLAGS_container_name}" || \
    die "Unable to create container from image '${FLAGS_lxd_image}'"
```

运行以下命令，请确保用户名是**设置**应用里显示的用户名。你可以自行选择`container_name`指定的容器名,`lxd_image`指定的 Linux 镜像，或者`lxd_remote`指定的镜像源。

```output
bash ./run_container.sh --container_name arch --user 你的用户名 --lxd_image archlinux/current --lxd_remote https://mirrors.tuna.tsinghua.edu.cn/lxc-images/
```

确保下载成功并且创建用户成功（忽略那几个无法加入用户组的错误）。


# 2.进入容器的命令行

##### 执行容器的命令行：

```output
(termina) chronos@localhost /tmp $ lxc exec arch -- bash
[root@arch ~]#
```

##### 在容器中执行以下命令：

```bash
#设置密码。千万不要给 root 设置密码，否则 Chromium OS 集成服务将无法运行
passwd 你的用户名
#把用户加入 wheel 组
usermod -aG wheel 你的用户名
```

##### 设置源，把 tuna ustc 163 等中国的源剪切粘贴到前面（vi 编辑器中`dd`剪切整行，`p`粘贴，`/`搜索）：

```bash
vi /etc/pacman.d/mirrorlist
```

##### 设置 archlinuxcn 源：

```bash
vi /etc/pacman.conf
```

##### 在最后插入：

```ini
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

##### 安装依赖：

```bash
pacman -Syu archlinuxcn-keyring base-devel git gtk3 openssh xdg-utils xkeyboard-config
```

启用 sudo 无密码，执行

```bash
visudo
```

##### 删除以下行前的注释：

```ini
%wheel   ALL=(ALL:ALL) NOPASSWD: ALL
```

##### 退出到 termina： 

```bash
exit
```

# 3.登录到容器

**登录**到你创建的用户（之前执行 bash 的方法不是登录，无法加载服务）。

运行`lxc console arch`，然后直接输入用户名：

```output
(termina) chronos@localhost /tmp $ lxc console arch
[<your-username>@arch ~]$
```

登录成功后安装 aur 上的`cros-container-guest-tools-git`。由于需要从`chromium.googlesource.com`下载文件，因此请自行解决网络问题。注意，Android 子系统或者 Chromium OS 里的代理设置不会应用到虚拟机。

```bash
git clone https://aur.archlinux.org/cros-container-guest-tools-git.git
cd cros-container-guest-tools-git
makepkg -i
#解决.config不存在导致没有设置默认浏览器的问题
mkdir ~/.config
xdg-settings set default-web-browser garcon_host_browser.desktop
```

解决 Arch Linux 里`xkeyboard-config`更新导致`Sommelier`不支持两个键码的问题
打开`/usr/share/X11/xkb/keycodes/evdev`，注释或者删除`<i372>` 和 `<i374>`开头的两行.

`cros-container-guest-tools-git`应用于 Chromium OS 的最新版本，FydeOS 暂时没有更新到 R71，不支持`x-auth`功能。因此需要修改文件（更新后就不用改了）。

打开`/usr/lib/systemd/user/sommelier-x@.service`，找到以下片段：

```bash
ExecStart=/opt/google/cros-containers/bin/sommelier \
              -X \
              --x-display=%i \
              --sd-notify="READY=1" \
              --no-exit-with-child \
              --x-auth=${HOME}/.Xauthority \
              /bin/sh -c \
                  "systemctl --user set-environment ${DISPLAY_VAR}=$${DISPLAY}; \
                   systemctl --user set-environment ${XCURSOR_SIZE_VAR}=$${XCURSOR_SIZE}; \
                   systemctl --user import-environment SOMMELIER_VERSION; \
                   touch ${HOME}/.Xauthority; \
                   xauth -f ${HOME}/.Xauthority add ${HOST}:%i . $(xxd -l 16 -p /dev/urandom); \
                   . /etc/sommelierrc"
```

改为

```bash
ExecStart=/opt/google/cros-containers/bin/sommelier \
              -X \
              --x-display=%i \
              --sd-notify="READY=1" \
              --no-exit-with-child \
              /bin/sh -c \
                  "systemctl --user set-environment ${DISPLAY_VAR}=$${DISPLAY}; \
                   systemctl --user set-environment ${XCURSOR_SIZE_VAR}=$${XCURSOR_SIZE}; \
                   systemctl --user import-environment SOMMELIER_VERSION; \
                   . /etc/sommelierrc"
```

启用`cros-container-guest-tools-git`附带的所有 systemd 服务

```bash
sudo systemctl enable cros-sftp
systemctl --user enable sommelier@0.service
systemctl --user enable sommelier@1.service
systemctl --user enable sommelier-x@0.service
systemctl --user enable sommelier-x@1.service
systemctl --user enable cros-garcon.service
```

# 4.重命名容器

由于一些限制，目前 FydeOS 的 Linux（测试版）仅集成名为`penguin`的容器可以启用。因此需要重命名容器(不要删除自带的 Debian 容器)：

```bash
[<your-username>@arch ~]$ exit
#按下ctrl-A Q
(termina) chronos@localhost /tmp $ lxc stop arch
(termina) chronos@localhost /tmp $ lxc stop penguin
(termina) chronos@localhost /tmp $ lxc rename penguin debian
(termina) chronos@localhost /tmp $ lxc rename arch penguin
```

重启虚拟机：

```bash
sudo reboot
```


# 5.本地化

打开终端应用，等待几秒，Arch Linux 就启动了，随后做一些本地化：

##### 设置时区：

```
sudo timedatectl set-timezone Asia/Shanghai
```

##### 设置中文语言：

编辑`/etc/locale.gen`，删除`zh_CN.UTF-8`前的注释。然后执行

```bash
sudo locale-gen
```

修改`/etc/locale.conf`：

```bash
LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN.UTF-8"
LC_CTYPE="zh_CN.UTF-8"
LC_NUMERIC="zh_CN.UTF-8"
LC_TIME="zh_CN.UTF-8"
LC_COLLATE="zh_CN.UTF-8"
LC_MONETARY="zh_CN.UTF-8"
LC_MESSAGES="zh_CN.UTF-8"
LC_PAPER="zh_CN.UTF-8"
LC_NAME="zh_CN.UTF-8"
LC_ADDRESS="zh_CN.UTF-8"
LC_TELEPHONE="zh_CN.UTF-8"
LC_MEASUREMENT="zh_CN.UTF-8"
LC_IDENTIFICATION="zh_CN.UTF-8"
```


##### 安装字体、输入法、这里还安装了搜狗输入法，可能会出现 bug，请酌情选择。

```bash
sudo pacman -S fcitx-im fcitx-configtool fcitx-sogoupinyin wqy-microhei
```

打开`/usr/lib/systemd/user/cros-garcon.service.d/cros-garcon-override.conf`

插入：

```bash
Environment="GTK_IM_MODULE=fcitx"
Environment="QT_IM_MODULE=fcitx"
Environment="XMODIFIERS=@im=fcitx"
```

执行：

```bash
echo /usr/bin/fcitx-autostart > $HOME/.sommelierrc
```

重启容器：

```bash
sudo reboot
```

运行`fcitx-config-gtk3`配置输入法。


# 参考

[https://www.reddit.com/r/Crostini/wiki/howto/run-arch-linux](https://www.reddit.com/r/Crostini/wiki/howto/run-arch-linux)
