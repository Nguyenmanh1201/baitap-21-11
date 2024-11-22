function indanhsach() {
   const thanhvien = [
       { hovaten: 'Nguyễn Quang Huy', gioitinh: 'Nam', Noisinh: 'Hà Tĩnh' },
       { hovaten: 'Trần Đình Hưng Thịnh', gioitinh: 'Nam', Noisinh: 'Nghệ An' },
       { hovaten: 'Trần Minh Long', gioitinh: 'Nam', Noisinh: 'Hà Nội' },
       { hovaten: 'Đào Thế Vũ', gioitinh: 'Nam', Noisinh: 'Hà Nội' },
       { hovaten: 'Nguyễn Công Mạnh', gioitinh: 'Nam', Noisinh: 'Hà Tĩnh' },
       { hovaten: 'Nguyễn Nam Khánh', gioitinh: 'Nam', Noisinh: 'Hà Nội' },
       { hovaten: 'Nguyễn Việt Dương', gioitinh: 'Nam', Noisinh: 'Hà Nội' },
       { hovaten: 'Trần Thị Thu Huyền', gioitinh: 'Nữ', Noisinh: 'Hà Nội' },
       { hovaten: 'Đỗ Thị Lan Hương', gioitinh: 'Nữ', Noisinh: 'Hải Phòng' },
   ];

   // Tìm phần tử HTML có id là "danh-sach-thanh-vien"
   const danhSach = document.getElementById('danh-sach-thanh-vien');

   thanhvien.forEach((tv) => { /*Như kiểu vòng lặp for, tv như là i còn thanhvien như là n, từng thành viên sẽ được chạy hàm phía trong sau dấu {},
      Gán dữ liệu của js vào div để hiện HTML, nhúng cái bảng từ file js vào HTML */
       // Tạo một div mới cho mỗi thành viên
       const div = document.createElement('div');
       div.className = 'thanh-vien';
       div.innerHTML = `
           <table style="width: 100%; border-spacing: 10px 5px;">
               <tr>
                   <td style="font-weight: bold; width: 30%;">Họ và tên:</td>
                   <td>${tv.hovaten}</td>
               </tr>
               <tr>
                   <td style="font-weight: bold;">Giới tính:</td>
                   <td>${tv.gioitinh}</td>
               </tr>
               <tr>
                   <td style="font-weight: bold;">Nơi sinh:</td>
                   <td>${tv.Noisinh}</td>
               </tr>
           </table>
       `;

       // Thêm CSS để tạo giao diện đẹp hơn
       div.style.marginBottom = '15px'; // Khoảng cách giữa các div
       div.style.padding = '10px'; // Khoảng cách bên trong
       div.style.background = '#f9f9f9'; // Màu nền
       div.style.borderRadius = '5px'; // Bo góc nhẹ

       danhSach.appendChild(div); // thêm phần tử div vào danhsach
   });
}

// Gọi hàm để in danh sách
indanhsach();
