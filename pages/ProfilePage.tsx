import React, { useState, useEffect } from 'react';
import {
  PlayCircle,
  Brain,
  Users,
  Sprout,
  Microscope,
  ShieldCheck,
  Briefcase,
  Medal,
  Leaf,
  Award,
  Phone,
  Home,
  ChevronRight,
  Factory,
  X,
  MessageSquare,
  ArrowRight,
  Globe2,
  Dna,
  Cpu,
  Landmark,
  Building2,
  MousePointer2, // Icon mới cho scroll indicator
  CheckCircle2, // Icon cho thẻ nổi
} from 'lucide-react';
import Footer from '@/components/Footer';

// --- DỮ LIỆU ---
const STATS = [
  { value: '10+', label: 'Năm kinh nghiệm', icon: Brain },
  { value: 'ISO', label: 'Chuẩn Quốc Tế', icon: ShieldCheck },
  { value: '50+', label: 'Chuyên gia & Kỹ sư', icon: Users },
  { value: '1M+', label: 'Cây giống/năm', icon: Sprout },
];

const DEPARTMENTS = [
  {
    name: 'Khối R&D',
    desc: 'Nghiên cứu & Lai tạo giống mới',
    icon: Microscope,
  },
  {
    name: 'Khối Sản Xuất',
    desc: 'Vận hành Nhà màng & Vườn ươm',
    icon: Factory,
  },
  {
    name: 'Khối Chất Lượng',
    desc: 'Kiểm soát quy trình (QA/QC)',
    icon: ShieldCheck,
  },
  {
    name: 'Khối Kinh Doanh',
    desc: 'Phát triển thị trường & Đối tác',
    icon: Briefcase,
  },
];

const CERTIFICATES = [
  { name: 'ISO 9001:2015', desc: 'Hệ thống quản lý chất lượng', icon: Medal },
  { name: 'VietGAP', desc: 'Thực hành nông nghiệp tốt', icon: ShieldCheck },
  {
    name: 'Top 10 Thương Hiệu',
    desc: 'Sản phẩm Nông nghiệp tiêu biểu',
    icon: Award,
  },
  { name: 'Chứng nhận Vườn ươm', desc: 'Sở Nông nghiệp cấp phép', icon: Leaf },
];

const INFRASTRUCTURE = [
  {
    title: 'Phòng Lab Tiêu Chuẩn',
    desc: 'Hệ thống nuôi cấy mô tế bào với thiết bị nhập khẩu Nhật Bản, đảm bảo vô trùng tuyệt đối.',
    image:
      'https://i.pinimg.com/736x/a9/e9/a7/a9e9a75089f150bde649df53f47a20fb.jpg',
    large: true,
  },
  {
    title: 'Vườn Ươm 50ha',
    desc: 'Hệ thống tưới Mist Sprinkler tự động và lưới cắt nắng thông minh.',
    image:
      'https://i.pinimg.com/1200x/30/99/33/309933b373af272db438672d93db7557.jpg',
    large: false,
  },
  {
    title: 'Khu Xuất Hàng',
    desc: 'Quy trình đóng gói chuyên nghiệp, xe tải chuyên dụng vận chuyển toàn quốc.',
    image:
      'https://cayxanhmienbac.vn/wp-content/uploads/2024/04/mua-ban-cay-chuoi-ngoc.jpg?v=1715760196',
    large: false,
  },
];

const PARTNERS_DATA = [
  { name: 'EcoFarm Global', icon: Globe2 },
  { name: 'VinGreen Agri', icon: Sprout },
  { name: 'BioSeed Lab', icon: Dna },
  { name: 'HighTech Forest', icon: Cpu },
  { name: 'AgriBank', icon: Landmark },
  { name: 'GreenHub', icon: Building2 },
  { name: 'VietForest', icon: Factory },
];

const ProfilePage: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVideo]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-body transition-colors duration-300">
      {/* 2. HERO SECTION - MASTER UI/UX IMPROVED */}
      <section className="relative w-full h-[700px] flex items-center overflow-hidden">
        {/* Background Image with Slow Zoom Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/1200x/4f/32/1d/4f321dc770c9b0f8638aba585225190b.jpg')",
            }}
          ></div>
          {/* Advanced Overlay: Darker at bottom/left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/70 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent z-10"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-20 pt-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl relative">
            {/* Floating Badge (Decorative) - New Feature */}
            <div className="hidden lg:flex absolute -right-32 -top-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl gap-3 animate-float">
              <div className="bg-primary/20 p-2 rounded-lg text-primary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">
                  Đạt chuẩn ISO 9001
                </p>
                <p className="text-gray-300 text-xs">Chứng nhận quốc tế</p>
              </div>
            </div>

            {/* Badge chính */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary mb-6 shadow-[0_0_15px_rgba(19,236,106,0.3)] animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Đối tác tin cậy hàng đầu
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 font-display drop-shadow-2xl animate-fade-in-up delay-100">
              Nâng Tầm Giá Trị <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-300 to-primary bg-300% animate-gradient">
                Nông Nghiệp Việt
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl border-l-4 border-primary pl-6 animate-fade-in-up delay-200 backdrop-blur-sm bg-white/5 py-2 rounded-r-lg">
              Tiên phong ứng dụng công nghệ <strong>Nuôi cấy mô</strong> trong
              sản xuất giống cây trồng sạch bệnh, năng suất vượt trội.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <button
                onClick={() => setShowVideo(true)}
                className="group flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold h-14 px-8 rounded-full transition-all hover:border-primary/50"
              >
                <PlayCircle
                  size={24}
                  fill="currentColor"
                  className="text-white/20 transition-colors"
                />
                Xem video giới thiệu
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator - New Feature */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}
        >
          <span className="text-xs uppercase tracking-widest font-light">
            Khám phá
          </span>
          <MousePointer2 size={24} />
        </div>

        {/* Custom Styles for Animations */}
        <style>{`
            @keyframes ken-burns {
                0% { transform: scale(1); }
                100% { transform: scale(1.1); }
            }
            .animate-ken-burns {
                animation: ken-burns 20s ease-out infinite alternate;
            }
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            .animate-float {
                animation: float 4s ease-in-out infinite;
            }
            .bg-300% { background-size: 300% auto; }
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-gradient {
                animation: gradient 6s ease infinite;
            }
            @keyframes fade-in-up {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
                animation: fade-in-up 0.8s ease-out forwards;
            }
            .delay-100 { animation-delay: 0.1s; }
            .delay-200 { animation-delay: 0.2s; }
            .delay-300 { animation-delay: 0.3s; }
        `}</style>
      </section>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in zoom-in-95 duration-300">
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/OqdGMsPnpb4?si=2UHOlfdBBf_5W_av&autoplay=1"
              title="Video giới thiệu Vũ Hà"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* 3. OVERVIEW & STATS */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">
                  Về chúng tôi
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 font-display leading-tight">
                  Hơn 10 năm kiến tạo nền tảng <br /> nông nghiệp xanh
                </h3>
                <p className="text-text-secondary dark:text-gray-400 text-lg leading-relaxed text-justify">
                  Công ty TNHH Vũ Hà tự hào là đơn vị tiên phong trong lĩnh vực
                  nghiên cứu và ứng dụng công nghệ tế bào thực vật.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat, idx) => (
                  <div
                    key={idx}
                    className="group p-6 rounded-2xl bg-background-light dark:bg-surface-dark border border-transparent hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                      <stat.icon size={26} />
                    </div>
                    <h4 className="text-3xl font-black text-text-main dark:text-white mb-1 font-display">
                      {stat.value}
                    </h4>
                    <p className="text-sm font-medium text-text-secondary dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white dark:border-surface-dark">
                <img
                  src="https://i.pinimg.com/736x/a7/b0/c4/a7b0c408a3af17ab6535210382d4f44f.jpg"
                  alt="High Tech Lab"
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-background-dark/95 backdrop-blur shadow-xl p-4 rounded-xl border border-gray-100 dark:border-white/10 flex items-center gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-primary">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-text-main dark:text-white">
                      Cam kết 100%
                    </p>
                    <p className="text-xs text-text-secondary dark:text-gray-400">
                      Giống sạch bệnh & thuần chủng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SƠ ĐỒ TỔ CHỨC */}
      <section className="py-24 bg-background-light dark:bg-surface-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
              Bộ máy nhân sự
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white font-display">
              Cấu trúc doanh nghiệp
            </h3>
            <p className="mt-4 text-text-secondary dark:text-gray-400">
              Mô hình quản trị tinh gọn, chuyên môn hóa cao.
            </p>
          </div>
          <div className="relative">
            <div className="flex justify-center mb-12 relative z-10">
              <div className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-xl border-t-4 border-primary text-center w-72 relative group hover:-translate-y-1 transition-transform">
                <div className="w-20 h-20 mx-auto rounded-full p-1 bg-gradient-to-tr from-primary to-green-300 mb-4">
                  <img
                    src="https://i.pinimg.com/736x/a9/5e/7a/a95e7a415633a614613e757bac4246ed.jpg"
                    alt="CEO"
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-background-dark"
                  />
                </div>
                <h4 className="font-bold text-lg text-text-main dark:text-white">
                  Ban Giám Đốc
                </h4>
                <p className="text-xs text-primary font-bold uppercase tracking-wide">
                  Điều hành & Chiến lược
                </p>
                <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              </div>
            </div>
            <div className="hidden md:block w-3/4 mx-auto h-0.5 bg-gray-300 dark:bg-gray-600 mb-8 relative">
              <div className="absolute left-0 top-0 h-4 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              <div className="absolute right-0 top-0 h-4 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              <div className="absolute left-1/3 top-0 h-4 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              <div className="absolute right-1/3 top-0 h-4 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {DEPARTMENTS.map((dept, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-lg hover:border-primary/50 transition-all group text-center relative"
                >
                  <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 -mt-6 h-6 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="w-12 h-12 mx-auto bg-background-light dark:bg-surface-dark rounded-full flex items-center justify-center text-text-secondary dark:text-gray-300 mb-3 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                    <dept.icon size={20} />
                  </div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    {dept.name}
                  </h4>
                  <p className="text-xs text-text-secondary dark:text-gray-400">
                    {dept.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CHỨNG NHẬN */}
      <section className="py-24 bg-background-light dark:bg-surface-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
              Chất lượng khẳng định
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white font-display">
              Giải thưởng & Chứng nhận
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {CERTIFICATES.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-xl hover:border-primary/30 transition-all group text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 mx-auto bg-background-light dark:bg-surface-dark rounded-full flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-all mb-4">
                  <cert.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-lg text-text-main dark:text-white mb-1">
                  {cert.name}
                </h4>
                <p className="text-sm text-text-secondary dark:text-gray-400">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ĐỐI TÁC - MARQUEE INFINITE */}
      <section className="py-20 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold text-text-secondary dark:text-gray-500 uppercase tracking-[0.2em] mb-12">
            Được tin tưởng bởi các tổ chức hàng đầu
          </p>
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-background-dark to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-background-dark to-transparent z-10"></div>
            <div className="flex overflow-hidden group">
              <div className="flex animate-marquee group-hover:paused whitespace-nowrap">
                {PARTNERS_DATA.map((partner, idx) => (
                  <div
                    key={`p1-${idx}`}
                    className="mx-8 md:mx-12 flex items-center gap-3 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer select-none"
                  >
                    <div className="p-2 bg-gray-100 dark:bg-white/10 rounded-lg">
                      <partner.icon
                        size={28}
                        className="text-gray-800 dark:text-white shrink-0"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-xl font-black text-gray-400 dark:text-gray-500 hover:text-primary transition-colors font-display">
                      {partner.name}
                    </span>
                  </div>
                ))}
                {PARTNERS_DATA.map((partner, idx) => (
                  <div
                    key={`p2-${idx}`}
                    className="mx-8 md:mx-12 flex items-center gap-3 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer select-none"
                  >
                    <div className="p-2 bg-gray-100 dark:bg-white/10 rounded-lg">
                      <partner.icon
                        size={28}
                        className="text-gray-800 dark:text-white shrink-0"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-xl font-black text-gray-400 dark:text-gray-500 hover:text-primary transition-colors font-display">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
          .animate-marquee { animation: marquee 30s linear infinite; }
          .paused { animation-play-state: paused; }
        `}</style>
      </section>

      <Footer />
    </div>
  );
};

export default ProfilePage;
