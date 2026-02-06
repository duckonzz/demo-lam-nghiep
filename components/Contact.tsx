import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="lien-he" className="py-16 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 leading-tight">
                Hợp tác cùng phát triển <br />
                <span className="text-primary">Lâm nghiệp bền vững</span>
              </h2>
              <p className="text-lg text-gray-600">
                Chúng tôi sẵn sàng tư vấn giải pháp cây giống tối ưu cho khu vực
                canh tác của bạn. Hãy để lại thông tin hoặc liên hệ trực tiếp.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm flex-shrink-0 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Hotline tư vấn
                  </p>
                  <a
                    href="tel:0912345678"
                    className="text-xl font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    0978.509.729
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm flex-shrink-0 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <a
                    href="mailto:info@lamnghiep.vn"
                    className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors"
                  >
                    info@lamnghiep.vn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm flex-shrink-0 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Vườn ươm chính
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    Xã Phước Thành, Huyện Tuy Phước, Tỉnh Bình Định
                  </p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-8 w-full h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200 relative bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3875.017555820881!2d109.1135054!3d13.7778148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f13c92e2d31f1%3A0x988b26771daaa48f!2zVsaw4budbiDGsMahbSBWxakgSMOg!5e0!3m2!1svi!2s!4v1770195027716!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100 h-fit">
            <h3 className="text-xl font-bold mb-6 text-slate-900">
              Gửi tin nhắn tư vấn
            </h3>
            <form className="flex flex-col gap-5">
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-gray-700">
                  Họ và tên
                </span>
                <input
                  type="text"
                  placeholder="Nhập tên của bạn"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-gray-50 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400 transition-all"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-gray-700">
                  Số điện thoại <span className="text-red-500">*</span>
                </span>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại để chúng tôi gọi lại"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-gray-50 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400 transition-all"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-gray-700">
                  Nội dung tư vấn
                </span>
                <textarea
                  id="loi-nhan-input"
                  placeholder="Bạn quan tâm đến loại cây giống nào (Keo lai, Bạch đàn...)?"
                  className="w-full min-h-[140px] p-4 rounded-lg border border-gray-300 bg-gray-50 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400 resize-none transition-all"
                ></textarea>
              </label>

              <button
                type="button"
                className="mt-2 w-full h-14 bg-primary hover:bg-primary-hover text-primary-foreground text-lg font-bold rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Gửi yêu cầu ngay</span>
                <Send size={20} />
              </button>

              <p className="text-center text-xs text-gray-500 mt-2">
                Chúng tôi cam kết bảo mật thông tin cá nhân của bạn.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
