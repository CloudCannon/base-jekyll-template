---
date: 2019-01-12
title: DirectAdmin trong cloud server
categories:
  - cloud-app
description: Giới thiệu về DirectAdmin  trong cloud server
type: Document
---

Khi bạn là người quản trị website cho cá nhân bạn hay tổ chức, doanh nghiệp mà bạn quản lý, thì việc upload, chỉnh sửa source code lên hosting/server để website của bạn có thể hoạt động làm một việc làm bắt buộc. Cách thức truyền thống để bạn upload source lên hosting/server là bạn phải truy cập vào hosting/server đó và thực hiện các dòng lệnh, thao tác trên chính hosting/server đó. Mỗi lần có sự thay đổi bạn phải thao tác rất nhiều nhưng rất dễ có sự thao tác cấu hình sai. Chính vì thế để thuận tiện trong quá trình vận hành người quản trị trường sử dụng những trình quản trị hosting trong việc thao tác với mã nguồn cũng như phân chia tài nguyên máy chủ. Ngày này `DirectAdmin` được sử dụng phổ biến trong việc làm control panel.

## 1. DirectAdmin là gì ?

`DirectAdmin` (viết tắt DA) là một trình quản lý hosting, DA chạy trên hệ điều hành Linux nhẹ, cài đặt triển khai dễ dàng và hỗ trợ đầy đủ các tính năng cho phép người quản trị dễ dàng quản lý server của mình, cung cấp cho khách hàng một giao diện quản lý đơn giản thuận tiện cho phép quản lý tài khoản hosting. 

## 2. Ưu điểm của DirectAdmin

+ Dễ dàng sử dụng trong quản lý, dành riêng cho các loại máy chủ chia sẻ, dễ thực hiện việc phân chia tài nguyên máy chủ.<br>
+ Tốc độ quản lý nhanh không đòi hỏi về nhiều tài nguyên so với các hệ thống quản lý máy chủ khác.<br>
+ Đảm bảo tính sẵn sàng cao: Hệ thống được phục hồi ở khoảng thời gian nhanh nhất hạn chế mức tối da thời gian hệ thống hoạt động không có hiệu quả.<br>

## 3. Tính năng và các cấp độ quản lý DirectAdmin

**Tính năng cho người quản trị (admin)**

Admin là cấp cao nhất, có thể tạo các tài khoản Users, Resellers, Admin, có đầy đủ các quyền quản lý cũng như phần cấu hình trong máy chủ.

![](/images/img-da-cloud-app/Screenshot_709.png)

+ Tạo và thay đổi các tài khoản quản lý và đại lý.<br>
+ Gói dịch vụ: Tạo ra các gói tài nguyên cho các tài khoản đại lý và phân phối cho các tài khoản người dùng cuối.<br>
+ Danh sách người dùng: Cho phép xem danh sách các tài khoản người dùng, sắp xếp và thay đổi thông tin.<br>
+ Quản trị DNS: Tạo/ sửa/ xóa bất kỳ bản ghi DNS nào trên máy chủ.<br>
+ Mục đích sử dụng IP: Cài đặt Ip trên máy chủ và quy định mục đích sử dụng IP cho các tài khoản người dùng cuối (IP chia sẻ hay Ip riêng).<br>
+ Thông tin hệ thống: Truy cập tức thời tới thông tin và trạng thái hoạt động của các dịch vụ trên máy chủ.<br>
+ Thống kê quá trình sử dụng: Thống kê các thông số trạng thái của hệ thống và các thông tin liên quan, thống kê về tài nguyên đã sử dụng.

**Tính năng cho đại lý (reseller)**

Resellers là cấp đại lý, có thể tại Users, phân phối tài nguyên và có các bảng điều khiển các user mình quản lý.

![](/images/img-da-cloud-app/Screenshot_710.png)

+ Mục đích sử dụng IP: Cài đặt IP trên máy chủ và quy định sử dụng IP cho các tìa khoản người dùng cuối thông qua các tùy chọn có sẵn do quản trị hệ thống quy định ( IP chia sẻ hay Ip riêng).<br>
+ Thống kê đối với tài khoản đại lý: Đại lý có thể xem thống kê đầu đủ tài nguyên sử dụng đối với tài khoản của mình và các khách hàng của mình, sắp xếp thông tin theo cá tình huống cần xử lý.<br>
+ Tạo/ sửa tài khoản: Tạo tài khoản, danh sách, thay đổi/ sửa/ xóa một cách dễ dàng.<br>
+ Gói tài nguyên: Đại lý có thể tạo các gói tài nguyên riêng của mình và áp dụng cho các khách hàng mà không cần quy định lại mỗi khi tạo tài khoản mới cho khác hàng.<br>
+ Thông tin hệ thống: Truy cập tức thời tới thông tin về trạng thái hoạt động của các dịch vụ trên máy chủ.<br>
+ Tạo ra thông tin máy chủ ảo của mình đối với khách hàng.

**Tính năng cho ngường dùng (user)**

User là cấp quản lý hosting cho người dùng. Đây là mức thấp nhất trong DirectAdmin.

![](/images/img-da-cloud-app/Screenshot_711.png)

+ Email: Tạo các tải khoản Emai, thiết lập các rule cho email trên tất cả cá tên miền do tài khoản quản lý như chuyển tiếp, tự động trả lời, tự động từ chối, lọc, bản ghi MX, webmail.<br>
+ FTP: Tạo/sửa/xóa các tài khoản FTP<br>
+ DNS: Thay đổi DNS, bản ghi A, bản ghi CNAME, bản ghi NS, bản ghi MX, bản ghi PTR.<br>
+ Thống kê: Kiểm tra lượng tài nguyên đã sử dụng( dung lượng, băng thông), nhật ký truy cập site, xem các thông tin về tài khoản, sử dụng Phpmyadmin...<br>
+ MS Frontpage: Tối ưu hóa việc sử dụng cá website tại bởi MS FrontPage<br>
+ Tên miền phụ: Tạo/ xóa/ thống kê các tên miền phụ, tạo các tài khoản FTP cho từng tên miền phụ.<br>
+ Trình quản lý file: Quản lý, sao chép, di chuyển, tổi tên, xóa và thay đổi quyền truy cập , sửa, tạo file.
+ CSDL MySQL: Tạo/ xóa CSDL, tạo các tài khoản có quyền truy cập, thay đổi mật khẩu truy cập, sử dụng PhpMyadmin<br>
+ Tạo các bản sao lưu website đầy đủ, khôi phục dữ liệu website từ các bản sao lưu.<br>
+ Bảo vệ thư mục: Người dùng có thể tạo các tài khoản và mật khẩu để hạn chế quyền truy cập vào một số thư mục nhất định.<br>
+ Cài đặt xác thực SSL, xem các thông tin về máy chủ...

## 4. Thông tin quản trị DirectAdmin từ Nhân Hòa

Khi đăng ký sử dụng dịch vụ cloud server có kèm cloud app DirectAdmin của Nhân Hòa, Nhân Hòa sẽ cũng cấp qua email cho bạn một cloud server có cài đặt DirectAdmin với cấu hình (Disk Space, Bandwidth, Database, Ftp Accounts) đúng với lựa chọn của bạn. Nhân Hòa sẽ gửi 1 `đường link`, `tài khoản` để bạn login vào trang DriectAdmin.

![](/images/img-da-cloud-app/Screenshot_706.png)

**Bạn sử dụng thông tin trong email để login và thao tác với DirectAdmin**

![](/images/img-da-cloud-app/Screenshot_707.png)

![](/images/img-da-cloud-app/Screenshot_708.png)

---
<a href="https://cloud365.vn/" target="_blank">cloud365.vn</a>

Khi cần hỗ trợ xin liên hệ với chúng tôi:

**Công ty phần mềm Nhân Hòa**
- Trụ sở Hà Nội: 32 Võ Văn Dũng, Đống Đa, Hà Nội
- Chi nhánh HCM: 270 Cao Thắng (nối dài), Phường 12,Quận 10, TP HCM
- Hotline: `19006680`