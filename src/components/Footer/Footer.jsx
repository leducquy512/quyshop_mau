import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import logoImage from '../../img/logo.png';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="phuclong-footer">
            <div className="footer-container">
                {/* Cột 1: Thông tin công ty & Logo */}
                <div className="footer-column company-info">
                    <img src={logoImage} alt="Phuc Long Logo" className="footer-logo" />
                    <p className="company-name">Trụ sở chính: Công ty Cổ Phần Phúc Long Heritage</p>
                    <p>Địa chỉ: 42/24 - 42/26 Đường 643 Tạ Quang Bửu, P.4, Q.8, TP.HCM</p>
                    <p>Điện thoại: 028 6263 0377 - 6263 0378</p>
                    <p>Email: info2@phuclong.com.vn</p>
                </div>

                {/* Cột 2: Liên kết nhanh */}
                <div className="footer-column">
                    <h3 className="footer-heading">VỀ CHÚNG TÔI</h3>
                    <ul className="footer-links">
                        <li><a href="/about">Tầm nhìn & Sứ mệnh</a></li>
                        <li><a href="/career">Cơ hội nghề nghiệp</a></li>
                        <li><a href="/promotions">Tin tức & Khuyến mãi</a></li>
                        <li><a href="/stores">Hệ thống cửa hàng</a></li>
                    </ul>
                </div>

                {/* Cột 3: Chính sách */}
                <div className="footer-column">
                    <h3 className="footer-heading">CHÍNH SÁCH</h3>
                    <ul className="footer-links">
                        <li><a href="/policy">Chính sách bảo mật</a></li>
                        <li><a href="/terms">Điều khoản sử dụng</a></li>
                        <li><a href="/delivery-policy">Chính sách giao hàng</a></li>
                    </ul>
                </div>

                {/* Cột 4: Đăng ký & Mạng xã hội */}
                <div className="footer-column">
                    <h3 className="footer-heading">THEO DÕI CHÚNG TÔI</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://instagram.com" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="https://youtube.com" className="social-icon"><i className="fab fa-youtube"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="newsletter">
                        <p>Đăng ký nhận tin từ Phúc Long</p>
                        <div className="subscribe-box">
                            <input type="email" placeholder="Email của bạn..." />
                            <button className="subscribe-btn"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer: Copyright */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <span>© 2024 Phuc Long Heritage. All rights reserved.</span>
                    <div className="footer-bottom-links">
                        <span>VN</span> | <span>EN</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;