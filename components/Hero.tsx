import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { openZaloChat, smoothScrollToElement } from '../utils/scrollUtils';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] lg:h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center parallax-bg"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBaXfaX3hmKe7sYzbsg7v4r00r-_Onoozi8Tc-I0CRrxH5L3EScsoc0E4twr3-pE2uRm0O8lCVuiAtWxU2fWkpaUUbuD8hfJvUs8vGqO767EwJn6sQRLlU33mWpAY67Rvlfn8apq5pccqSXcEdQjkedsQvNqU-4snuXtFkIDtVB9zT9EWks870oFaLk8RaFXXYLXrtT8syXhNBvTyQt1p7-3K_oifWHOZEAfzHnoSYIvgQmqbGgKFOolXYqQf74_d3Vpm5HumnKcL0')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Công nghệ sinh học hàng đầu
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-lg">
            CÔNG TY TNHH <br className="hidden md:block" />
            <span className="text-primary">LÂM NGHIỆP</span> GIỐNG CÂY TRỒNG
          </h1>

          <p className="text-gray-100 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl drop-shadow-md">
            Chuyên cung cấp giống cây nuôi cấy mô chất lượng cao, sạch bệnh và
            năng suất vượt trội cho nền lâm nghiệp bền vững tại Việt Nam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
            <button
              onClick={() => openZaloChat('0978509729')}
              className="flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-primary hover:bg-primary-hover text-primary-foreground text-base font-bold transition-all shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <Phone size={20} />
              Liên hệ tư vấn
            </button>
            <button
              onClick={() => smoothScrollToElement('lien-he', 'loi-nhan-input')}
              className="flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base font-bold transition-all shadow-lg w-full sm:w-auto"
            >
              <FileText size={20} />
              Nhận báo giá
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px] text-background-light fill-current"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
