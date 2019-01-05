---
date: 2019-01-04
title: Vận hành cloud server
categories:
  - cloud-server
description: Vận hành cloud server
type: Document
---

Bạn đăng ký sử dụng dịch vụ cloud server của Nhân Hòa. Bạn sẽ thực hiện quản trị, vận hành cloud server của mình qua portal do Nhân Hòa phát triển. Thực hiện một số thao tác vận hành cloud server như giám sát các thông số (RAM, Disk, CPU. Disk I/O), remote, quản lý mật khẩu, điểu khiển cloud server (Start, Stop, Restart, Pause, Resume), rebuild hệ điều hành cloud server. Chi tiết vận hành bạn thực hiện theo hướng dẫn ở dưới.


### Mục lục

[1. Kiểm tra thông tin cloud server](#thongtin)

[2. Giám sát cloud server](#giamsatmayao)

[3. Truy cập remote cloud server](#consolemayao)

[4. Điều khiển trạng thái cloud server](#statusmayao)

[5. Xem log hành động đối với cloud server](#logVPS)

[6. Quản lý mật khẩu cloud server](#matkhauVPS)

[7. Rebuid cloud server](#rebuildVPS)

<a name="thongtin"></a>
## 1. Kiểm tra thông tin cloud server

+ Thông tin về máy ảo của bạn sẽ được Nhân Hòa gửi vào email đăng ký của bạn.

![](/images/img-vanhanh-vps/Screenshot_540.png)
![](/images/img-vanhanh-vps/Screenshot_541.png)

+ Sử dụng thông tin truy cập cloud server

Sau khi nhận được thông tin cloud server tùy thuộc vào cloud server của bạn chạy hệ điều hành Linux/Windows bạn hoàn toàn có thể truy cập vào cloud server của mình để sử dụng.

![](/images/img-vanhanh-vps/Screenshot_542.png)

### Bạn truy cập vào portal để thực hiện một số chức năng vận hành cloud server

+ Click `Danh sách server`

![](/images/img-vanhanh-vps/Screenshot_543.png)

+ Click vào tên cloud server cần xem thông tin

![](/images/img-vanhanh-vps/Screenshot_544.png)

Bạn lựa chọn thực hiện 1 trong các chức năng: **giám sát, remote, điều khiển, log, quản lý mật khẩu, quản lý máy ảo** theo hướng dẫn ở dưới để vận hành cloud server của mình.

<a name="giamsatmayao"></a>
## 2. Giám sát cloud server

Chức năng giám sát cho phép bạn giám giát tổng quan về cloud server RAM, DISK, CPU, Network theo cơ chế real time và có khả năng chọn khoảng thời gian view các metric (30 phút, 1 giờ, 6 giờ, 12 giờ, 24 giờ, 7 ngày, 30 ngày).

+ Click `Giám sát` -> Lựa chọn khoảng thời gian hiển thị

![](/images/img-vanhanh-vps/Screenshot_545.png)

+ Thông tin về RAM, Disk, CPU, Network

![](/images/img-vanhanh-vps/Screenshot_546.png)

<a name="consolemayao"></a>
## 3. Truy cập remote cloud server

Chức năng remote cloud server cho phép bạn truy cập vào cloud server của mình trong trường hợp bạn thao tác trên cloud server làm mất kết nối tới cloud server, không thể remote vào cloud server từ xa thông qua các tool như Puty, MobaXterm.

+ Click `Remote`

![](/images/img-vanhanh-vps/Screenshot_547.png)

+ Hiển thị giao diện remote

![](/images/img-vanhanh-vps/Screenshot_548.png)

<a name="statusmayao"></a>
## 4. Điều khiển trạng thái cloud server

Chức năng điều khiển cloud server cho phép bạn điều khiển cloud server của mình. Có các trạng thái như : Bật máy chủ ảo tương ứng với nút Start, tạm ngưng sử dụng tương ứng với Pause, muốn tiếp tục sử dụng sử dụng Resume tuy nhiên Resume chỉ được sử dụng khi máy chủ đang ở trạng thái tạm ngưng, khởi động lại máy ảo tương ứng với Restart, Tắt máy chủ tương ứng với Stop.

+ Click `Điều khiển`

![](/images/img-vanhanh-vps/Screenshot_549.png)

<a name="logVPS"></a>
## 5. Xem log hành động đối với cloud server

Chức năng Log cho phép bạn theo dõi  thao tác với cloud server (tạo, stop, start)

+ Click `Log`

![](/images/img-vanhanh-vps/Screenshot_550.png)

<a name="matkhauVPS"></a>
## 6. Quản lý mật khẩu cloud server

Chức năng quản lý mật khẩu cho phép bạn đổi password mới một cách nhanh chóng trong trường hợp bạn không như password cloud server của mình.

+ Click `Quản lý mật khẩu`

Chỉ định mật khẩu theo ý của bạn (Lưu ý: Mật khẩu cần có ít nhất 8 ký tự bao gồm 1 ký tự thường, 1 ký tự hoa, 1 số. )

![](/images/img-vanhanh-vps/Screenshot_542.png)

Auto generate password

![](/images/img-vanhanh-vps/Screenshot_543.png)

<a name="rebuildVPS"></a>
## 7. Rebuid cloud server

Chức năng Rebuild là tính năng cho phép thay đổi hệ điều hành của máy chủ và giữ nguyên các thông số như: IP, RAM, CPU, dung lượng ổ cứng. Chức năng sẽ giúp bạn cài mới lại cloud server của mình khi quá trình sử dụng bạn cài đặt có những lỗi ứng dụng hay bạn muốn chuyển sang sử dụng hệ điều hành khác để đáp ứng nhu cầu sử dụng của mình.

Lưu ý: Khi rebuild dữ liệu ổ cứng sẽ không được giữ lại. Máy chủ sẽ chạy với hệ điều hành mà bạn xác nhận lựa chọn để rebuild.

Bạn có thể rebuil sang hệ điều hành Windows, Linux trắng và Linux có cài đặt ứng dụng (Plesk, Direct Admin, WHM).

Bạn không thể rebuil sang hệ điều hành Windows server có cài đặt ứng dụng.

+ Click `Quản lý máy ảo`

![](/images/img-vanhanh-vps/Screenshot_557.png)

![](/images/img-vanhanh-vps/Screenshot_558.png)


+ Lựa chọn hệ điều hành muốn rebuild sang

OS cloud server trước khi rebuild

![](/images/img-vanhanh-vps/Screenshot_559.png)

Chọn hệ điều hành và xác nhận rebuild

![](/images/img-vanhanh-vps/Screenshot_560.png)

Xác nhận và chờ quá trình rebuil VPS hoàn tất.

![](/images/img-vanhanh-vps/Screenshot_561.png)

+ Rebuild thành công bạn sẽ nhận được thông báo qua email

![](/images/img-vanhanh-vps/Screenshot_562.png)

Bạn sử dụng thông tin Nhân Hòa gửi về sau khi rebuild cloud server thành công để thao tác với cloud server của mình.

![](/images/img-vanhanh-vps/Screenshot_565.png)

cloud server sau khi rebuild sang OS mới.

![](/images/img-vanhanh-vps/Screenshot_567.png)

### Đội ngũ kỹ thuật Nhân Hòa xin chân thành cảm ơn!
