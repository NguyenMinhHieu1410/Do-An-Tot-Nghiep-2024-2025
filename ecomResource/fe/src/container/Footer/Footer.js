import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            {/* Cột Giới thiệu */}
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>Về Chúng Tôi</h4>
              <p>
                Chúng tôi chuyên cung cấp đồ dùng và dịch vụ cho sự kiện, từ thiết bị ánh sáng,
                âm thanh đến trang trí không gian và đồ dùng tiệc.
              </p>
            </div>
            {/* Cột Liên kết nhanh */}
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>Liên kết nhanh</h4>
              <ul>
                <li><a href="/about">Về Chúng Tôi</a></li>
                <li><a href="/services">Dịch Vụ</a></li>
                <li><a href="/contact">Liên Hệ</a></li>
                <li><a href="/blog">Tin Tức</a></li>
              </ul>
            </div>
            {/* Cột Dịch vụ */}
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>Dịch Vụ</h4>
              <ul>
                <li><a href="#">Cho thuê thiết bị</a></li>
                <li><a href="#">Tổ chức sự kiện</a></li>
                <li><a href="#">Thiết kế không gian</a></li>
                <li><a href="#">Trang trí tiệc</a></li>
              </ul>
            </div>
            {/* Cột Liên hệ */}
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>Liên Hệ</h4>
              <ul>
                <li><i className="fa fa-map-marker"></i> 123 Đường Sự Kiện, TP. Hồ Chí Minh</li>
                <li><i className="fa fa-phone"></i> 0123 456 789</li>
                <li><i className="fa fa-envelope"></i> info@sukienhieu.com</li>
              </ul>
              <div className="social-icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom row align-items-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">
              &copy; 2024 Đồ Án Tốt Nghiệp - Nguyễn Minh Hiếu. Tất cả các quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
