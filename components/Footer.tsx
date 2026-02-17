import React from 'react';
import { Link } from 'react-router-dom';
import {
  Trees,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  FileText,
  ShieldCheck,
  Truck,
  Download,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Cột 2: Sản phẩm chủ lực
  const products = [
    { name: 'Giống Keo Lai Mô', href: '/san-pham/keo-lai-mo' },
    { name: 'Giống Bạch Đàn Lai', href: '/san-pham/bach-dan-lai' },
    { name: 'Giống Keo Tai Tượng', href: '/san-pham/keo-tai-tuong' },
    { name: 'Cây giống lâm nghiệp khác', href: '/san-pham/khac' },
  ];

  // Cột 3: Hỗ trợ & Tài liệu (Kết hợp Kỹ thuật + Pháp lý + Hậu cần)
  const supportLinks = [
    {
      name: 'Hồ sơ năng lực',
      href: '/ho-so-nang-luc',
      icon: FileText,
      highlight: true,
    },
    { name: 'Giấy chứng nhận & Pháp lý', href: '/phap-ly', icon: ShieldCheck },
    { name: 'Kỹ thuật trồng rừng', href: '/ky-thuat' },
    { name: 'Chính sách bảo hành', href: '/chinh-sach-bao-hanh' },
    { name: 'Hướng dẫn vận chuyển', href: '/van-chuyen', icon: Truck },
  ];

  return (
    <footer className="bg-[#102217] text-white pt-16 pb-8 border-t-4 border-primary font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Phần nội dung chính */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* CỘT 1: THƯƠNG HIỆU & KẾT NỐI MẠNG XÃ HỘI */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-[#102217] shadow-lg shadow-primary/20">
                <Trees size={28} />
              </div>
              <span className="text-xl font-bold tracking-tight uppercase leading-tight">
                Công Ty TNHH <br /> Vũ Hà
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-justify">
              Đối tác tin cậy cung cấp giống cây lâm nghiệp chất lượng cao. Cam
              kết tỷ lệ sống &gt;95%, đầy đủ hồ sơ nguồn gốc xuất xứ cho các dự
              án trồng rừng quy mô lớn.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#1877F2]/20 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300"
              >
                <Facebook size={20} fill="currentColor" strokeWidth={0} />
              </a>
              {/* Thêm nút Zalo (thường dùng icon chat hoặc phone) */}
              <a
                href="https://zalo.me/0978509729"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#0068FF]/20 hover:bg-[#0068FF] text-white flex items-center justify-center transition-all duration-300 font-bold text-xs"
              >
                Zalo
              </a>
            </div>
          </div>

          {/* CỘT 2: SẢN PHẨM CHỦ LỰC */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary relative inline-block">
              Sản phẩm
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary/40 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {products.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="group flex items-center text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    <ChevronRight
                      size={16}
                      className="text-primary mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Banner nhỏ quảng cáo Khách hàng dự án */}
            <Link
              to="/khach-hang-du-an"
              className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer group block"
            >
              <h5 className="text-primary font-bold text-sm mb-1 group-hover:text-white transition-colors">
                Khách hàng & Dự án
              </h5>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                Xem hình ảnh thực tế rừng trồng 1-3 năm tuổi.
              </p>
            </Link>
          </div>

          {/* CỘT 3: HỖ TRỢ & PHÁP LÝ (QUAN TRỌNG) */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary relative inline-block">
              Hỗ trợ & Pháp lý
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary/40 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={`group flex items-center text-sm transition-colors ${
                      item.highlight
                        ? 'text-yellow-400 font-medium hover:text-yellow-300'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.icon ? (
                      <item.icon size={16} className="mr-2 flex-shrink-0" />
                    ) : (
                      <ChevronRight
                        size={16}
                        className="text-primary mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                      />
                    )}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 4: THÔNG TIN LIÊN HỆ */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary relative inline-block">
              Liên hệ Vườn Ươm
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary/40 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-medium mb-1">
                    Vườn ươm chính:
                  </span>
                  <span>Xã Phước Thành, Huyện Tuy Phước, Tỉnh Bình Định</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <div>
                  <span className="block text-xs text-gray-500">
                    Hotline / Zalo (24/7)
                  </span>
                  <a
                    href="tel:0978509729"
                    className="text-white hover:text-primary transition-colors font-bold text-lg"
                  >
                    0978.509.729
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@vuha.vn"
                  className="hover:text-primary transition-colors"
                >
                  info@vuha.vn
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2 border-t border-white/10 mt-2">
                <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-medium text-xs uppercase mb-1">
                    Giờ làm việc
                  </span>
                  <span>Thứ 2 - CN: 7:00 - 17:30</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Công ty TNHH Vũ Hà. Bản quyền thuộc về Vũ Hà.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Điều khoản
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Chính sách đại lý
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
