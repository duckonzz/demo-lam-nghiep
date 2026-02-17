import React, { useState, useRef } from 'react';
import {
  Home,
  ChevronRight,
  LayoutGrid,
  Clock,
  Trees,
  MapPin,
  ArrowUpRight,
  Calendar,
  Ruler,
  Star,
  Quote,
  CheckCircle2,
  TrendingUp,
  Leaf,
  Phone,
  Zap,
  Award,
  Gavel,
} from 'lucide-react';
import Footer from '../components/Footer';

type Category = 'all' | '1-year' | '2-year' | '3-year' | 'harvest';

interface Project {
  id: number;
  title: string;
  location: string;
  category: Category;
  year: number;
  height: string;
  status: string;
  image: string;
  badgeColor: string;
  badgeIcon: React.ElementType;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  province: string;
  content: string;
  image: string;
  rating: number;
}

// Mock Projects Data
const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Rừng Keo Lai - Chư Prông',
    location: 'Gia Lai',
    category: '2-year',
    year: 2022,
    height: '8-10m',
    status: 'Phát triển tốt',
    image:
      'https://caygiong4s.com/wp-content/uploads/2021/07/cay-keo-lai-cong-dung.jpg',
    badgeColor:
      'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400',
    badgeIcon: TrendingUp,
  },
  {
    id: 2,
    title: 'Keo Tai Tượng - Hoài Nhơn',
    location: 'Bình Định',
    category: '3-year',
    year: 2021,
    height: '12-15m',
    status: 'Trữ lượng cao',
    image: 'https://lamnghiepbinhthuan.com/Uploads/images/VuonUom/t1.jpg',
    badgeColor:
      'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400',
    badgeIcon: Star,
  },
  {
    id: 3,
    title: 'Bạch Đàn U6',
    location: 'Phú Yên',
    category: '1-year',
    year: 2023,
    height: '3-5m',
    status: 'Đang khép tán',
    image:
      'https://caygiongvinhphuc.com/wp-content/uploads/2021/04/giong-cay-bach-dan-mo.jpg',
    badgeColor:
      'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400',
    badgeIcon: CheckCircle2,
  },
  {
    id: 4,
    title: 'Keo Lai Mô - Ba Tơ',
    location: 'Quảng Ngãi',
    category: '3-year',
    year: 2021,
    height: '14-16m',
    status: 'Vượt chỉ số',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071',
    badgeColor:
      'text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400',
    badgeIcon: Zap, // Đổi sang Zap cho cảm giác "vượt trội"
  },
  {
    id: 5,
    title: 'Vườn Ươm Công Nghệ Cao',
    location: 'Kon Tum',
    category: 'all',
    year: 2024,
    height: '20-40cm',
    status: 'Sẵn sàng xuất vườn',
    image:
      'https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=2070',
    badgeColor:
      'text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400',
    badgeIcon: Leaf,
  },
  {
    id: 6,
    title: 'Khai thác Keo Lai 5 năm',
    location: 'Đắk Lắk',
    category: 'harvest',
    year: 2019,
    height: '18-20m',
    status: 'Đang thu hoạch',
    image:
      'https://images.unsplash.com/photo-1588336142586-36aff13141fc?q=80&w=1974',
    badgeColor: 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400',
    badgeIcon: Gavel, // Icon búa hoặc Check biểu thị việc kết thúc chu kỳ
  },
  {
    id: 7,
    title: 'Keo Lai Úc - Ia Grai',
    location: 'Gia Lai',
    category: '2-year',
    year: 2022,
    height: '9-11m',
    status: 'Ổn định',
    image:
      'https://images.unsplash.com/photo-1448375232d63-6a5203f4f141?q=80&w=2070',
    badgeColor:
      'text-cyan-600 bg-cyan-100 dark:bg-cyan-900/30 dark:text-cyan-400',
    badgeIcon: Trees,
  },
  {
    id: 8,
    title: 'Bạch Đàn Mô CT3',
    location: 'Kon Tum',
    category: '1-year',
    year: 2023,
    height: '4-6m',
    status: 'Sinh trưởng nhanh',
    image:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041',
    badgeColor:
      'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400',
    badgeIcon: CheckCircle2,
  },
  {
    id: 9,
    title: 'Bạch Đàn Kon Tum - GĐ2',
    location: 'Kon Tum',
    category: '3-year',
    year: 2021,
    height: '15-18m',
    status: 'Chất lượng gỗ loại A',
    image:
      'https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=1974',
    badgeColor:
      'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400',
    badgeIcon: Award, // Thay Star bằng Award cho chất lượng gỗ
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Anh Hùng',
    role: 'Chủ rừng',
    province: 'Gia Lai',
    content:
      'Tỷ lệ sống đạt 98%, cây lớn rất nhanh. Tôi rất hài lòng với chất lượng giống của Vũ Hà và sự hỗ trợ kỹ thuật nhiệt tình.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkv1CAQEVm7gOfb-9PW-kJb2tt68vI6xk0K95MM_wT0YRdveNZ3AuV7IL1Z-puW0n9xzknqt4hErb24yvUFH0BYKMmyClKSYfp7OY5vNp7IHTtUPuVvsvATkxwMzWthr9b4Ch1YJtbR2Z1wlPNNxPsGLBPeYpdHS_kmkg73eRajLb0rViVGMIf8NvYtBk3EM6AGk2KGv8ppV6TqjsQ-CZfNnd4l36OB-QkhXmPNA899auZd2sfkII0NuJq9pw6kkekXLFghEnw0vs',
    rating: 5,
  },
  {
    id: 2,
    name: 'Chị Mai',
    role: 'Quản lý dự án',
    province: 'Bình Định',
    content:
      'Dự án trồng rừng 20ha của chúng tôi đã thành công mỹ mãn nhờ nguồn giống chuẩn. Cây đồng đều, ít sâu bệnh.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSdQhdsDGMtvFhoisKk5cDbLqVyIG8VcZkKTtqPbwh6jNM1zTOwcXeO19pmXgLwpwvNuz_izkx7E07gjdGCtdE7rPdmerzVjWMLczLpwR9FFa7i-JtDcQ8EONbLR-n2sOTcA5Y94TwVWkFVr8RbR65vy3j-Q6znxedhhPzyxk5FN-wOukmcBKRjBTWrtgoaGUaAKSC9IONeTYDcCyLY0yEu4-iNKkUXawHCkJSiAkVpWyf7cPbrffz7dzqKZHIUxnBvYk06xGHuhA',
    rating: 5,
  },
  {
    id: 3,
    name: 'Chú Ba',
    role: 'Hộ trồng rừng',
    province: 'Phú Yên',
    content:
      'Giao hàng đúng hẹn, cây giống khỏe, rễ nhiều. Sẽ tiếp tục ủng hộ Vũ Hà trong các vụ mùa tới.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAi0wCOhQcvWzzuxB9vEXhLvbGSqmIOanAFraVVBJ2pw8olerfdWRQW_oRkdANrNHMMjVOnKy83mKZGmPEoHeP1NHfNArfUaKt_Fas3aIB_EEAvQJ6jqlLhPpj7cE7Zh76AwBUc7EKrDBzpr56FJKSXQtgDX3jVkmObmFzaJUn_A-9xpfiC6xADIx9HNOaCzF5fljNaKj66BP2QRRRJQByo-vBVVamOQ4hHEvzwC-34ZaKBFBd3Og2g6ApjdX06Uxxej-EsAaPDQ30',
    rating: 5,
  },
];

// --- COMPONENTS ---

// Interactive Before/After Slider
const ImageComparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX =
      'touches' in event ? event.touches[0].clientX : event.clientX;
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/c9/91/f1/c991f1337bac1cfadb4ad2c53ea50eb5.jpg')",
        }}
      />
      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded shadow-lg z-10">
        Sau 3 năm
      </div>

      {/* Before Image */}
      <div
        className="absolute inset-0 bg-cover bg-center border-r-4 border-white"
        style={{
          backgroundImage:
            "url('https://lsx.vn/wp-content/uploads/2022/08/Ho-so-de-nghi-cong-nhan-nguon-giong-cay-trong-lam-nghiep-can-nhung-giay-to-gi.jpg')",
          width: `${sliderPosition}%`,
        }}
      >
        <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-sm">
          Giai đoạn cây con
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center z-20 pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 20px)` }}
      >
        <div className="flex gap-1">
          <ChevronRight size={14} className="rotate-180 text-gray-800" />
          <ChevronRight size={14} className="text-gray-800" />
        </div>
      </div>
    </div>
  );
};

// Reusable Section Header
const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <div className="flex flex-col items-center text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-base">
        {subtitle}
      </p>
    )}
  </div>
);

// Project Card Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-white/5 cursor-pointer">
    <div className="relative h-72 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${project.image}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

      {/* Status Badge */}
      <div
        className={`absolute top-4 right-4 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm ${project.badgeColor}`}
      >
        <project.badgeIcon size={14} />
        {project.status}
      </div>
    </div>

    <div className="p-6 relative">
      <div className="absolute -top-6 right-6 size-12 rounded-full bg-primary text-white dark:text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <ArrowUpRight size={24} />
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-4 line-clamp-1">
        {project.title}
      </h3>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-primary" />
          <span>Trồng: {project.year}</span>
        </div>
        <div className="flex items-center gap-2">
          <Ruler size={16} className="text-primary" />
          <span>Cao: {project.height}</span>
        </div>
      </div>
    </div>
  </div>
);

// Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative">
    <Quote size={40} className="text-primary/20 absolute top-6 right-6" />

    <div className="flex gap-1 text-yellow-400 mb-6">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} size={18} fill="currentColor" />
      ))}
    </div>

    <p className="text-gray-600 dark:text-gray-300 italic mb-8 flex-grow leading-relaxed">
      "{testimonial.content}"
    </p>

    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
      <div
        className="size-12 rounded-full bg-gray-200 bg-cover bg-center border-2 border-primary"
        style={{ backgroundImage: `url('${testimonial.image}')` }}
      ></div>
      <div>
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">
          {testimonial.name}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {testimonial.role} • {testimonial.province}
        </p>
      </div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const CustomersAndProjects: React.FC = () => {
  const [filter, setFilter] = useState<Category>('all');
  const [displayCount, setDisplayCount] = useState(6);

  // Filter Logic
  const filteredProjects = PROJECTS.filter((project) =>
    filter === 'all' ? true : project.category === filter
  );

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-body transition-colors duration-300">
      <main>
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Hình ảnh thực tế các dự án rừng trồng 1-3 năm tuổi tại Tây Nguyên và Duyên hải Nam Trung Bộ."
        />

        {/* Hero Section */}
        <section className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center px-4 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAbRVX7sa4kYqtQ6vbCmM6o-oThlNDWHhxNk_ygQBG4HxzaxM_iZKMUMeD5ZA-q5WXMjFO8qapDHKYL34P0x0MzqVEt-DZTXEWJT4_IIrWhvsXlHyphQH8mDyiLYohd3u6QwVjX5DwBM1d4Pw8A569QReFQ7VLzJiIPZwyf3AQUPqMt5ogPqaXHXJmbxLiZAjxfiBUPxdc6yLQeK93O5l37vbz0iBNNs7YwerPqrYlnk1XpNYsCafb_ZWb2QgSBDFFyWQ4JS9F9CU')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background-dark dark:to-black/60"></div>
          </div>

          <div className="max-w-4xl text-center text-white space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary mb-2">
              <Trees size={16} />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Dự án thực tế
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-2xl">
              Thành Quả Từ Những <br />{' '}
              <span className="text-primary">Giống Cây Chất Lượng</span>
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-90 drop-shadow-md text-gray-200">
              Khám phá các dự án rừng trồng thành công 1-3 năm tuổi, minh chứng
              cho chất lượng và sự tận tâm của Công ty TNHH Vũ Hà.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="h-14 px-8 bg-primary hover:bg-primary-hover text-white dark:text-slate-900 rounded-full font-bold text-base transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                <Phone size={20} /> Liên hệ ngay
              </button>
              <button className="h-14 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2">
                Xem hồ sơ năng lực
              </button>
            </div>
          </div>
        </section>

        {/* PROJECT GALLERY SECTION */}
        <section className="py-20 lg:py-24 bg-background-light dark:bg-gray-900">
          <div className="max-w-[1280px] mx-auto w-full px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Dự án tiêu biểu
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Các khu rừng đã và đang phát triển mạnh mẽ trên khắp cả nước
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2 overflow-x-auto pb-1 p-1 bg-gray-100 dark:bg-white/5 rounded-full w-fit">
                {[
                  { id: 'all', label: 'Tất cả', icon: LayoutGrid },
                  { id: '1-year', label: '1 Năm tuổi', icon: Clock },
                  { id: '2-year', label: '2 Năm tuổi', icon: Trees },
                  { id: '3-year', label: '3 Năm tuổi', icon: Trees },
                  { id: 'harvest', label: 'Thu hoạch', icon: MapPin },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setFilter(btn.id as Category)}
                    className={`
                      whitespace-nowrap flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300
                      ${
                        filter === btn.id
                          ? 'bg-white dark:bg-surface-dark text-primary shadow-md'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }
                    `}
                  >
                    <btn.icon size={16} />
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredProjects.slice(0, displayCount).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* View More Button */}
            {displayCount < filteredProjects.length && (
              <div className="flex justify-center">
                <button
                  onClick={() => setDisplayCount(displayCount + 3)}
                  className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white dark:text-slate-900 font-bold transition-all shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5"
                >
                  <span>Xem thêm dự án</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* BEFORE & AFTER SECTION WITH INTERACTIVE SLIDER */}
        <section className="bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/5">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-widest text-xs mb-4 uppercase flex items-center gap-2">
                <TrendingUp size={16} /> Sự thay đổi ngoạn mục
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 dark:text-white">
                Từ cây giống nhỏ bé đến <br /> cánh rừng bạt ngàn
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
                Chất lượng giống cây quyết định 70% thành công của một dự án
                rừng. Vũ Hà cam kết cung cấp những cây giống khỏe mạnh nhất, đảm
                bảo tỷ lệ sống cao và tốc độ sinh trưởng vượt trội.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 transition-all">
                  <div className="size-14 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                      Tỷ lệ sống trên 95%
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Giảm thiểu rủi ro, tối đa hóa lợi nhuận.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 transition-all">
                  <div className="size-14 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                      Tăng trưởng nhanh gấp 1.5 lần
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Rút ngắn chu kỳ khai thác, quay vòng vốn nhanh.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Slider */}
            <div className="bg-transparent flex items-center justify-center p-0">
              <div className="w-full h-full relative min-h-[400px]">
                <ImageComparison />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 lg:py-24 bg-background-light dark:bg-gray-900">
          <div className="max-w-[1280px] mx-auto w-full px-4 lg:px-8">
            <SectionHeader title="Khách hàng nói gì về chúng tôi?" />

            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </section>

        {/* MAP STATS SECTION */}
        <section className="relative rounded-3xl overflow-hidden h-[500px] bg-slate-900 shadow-2xl mx-4 lg:mx-8 mb-20">
          {/* Overlay Panel */}
          <div className="absolute top-8 left-8 z-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-sm border border-white/20">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Mạng Lưới Phủ Xanh
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Chúng tôi đã cung cấp giống cho hơn{' '}
              <span className="text-primary font-bold">500+ dự án</span> trên
              khắp các tỉnh Tây Nguyên và Duyên hải Nam Trung Bộ.
            </p>
            <ul className="space-y-4">
              {[
                { label: 'Gia Lai', count: '120+' },
                { label: 'Kon Tum', count: '80+' },
                { label: 'Bình Định', count: '95+' },
                { label: 'Đắk Lắk', count: '150+' },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between text-sm font-medium border-b border-gray-100 dark:border-white/10 pb-2 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_#13ec6a]"></span>
                    <span className="text-slate-900 dark:text-gray-200">
                      {item.label}
                    </span>
                  </div>
                  <span className="font-bold text-primary">{item.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Background */}
          <div
            className="w-full h-full bg-cover bg-center relative transition-transform duration-[20s] hover:scale-110"
            style={{
              backgroundImage: "url('')",
              filter: 'grayscale(30%) contrast(1.1) brightness(0.7)',
            }}
          >
            {/* Animated Pins */}
            <div className="absolute top-[40%] left-[45%] flex flex-col items-center group cursor-pointer hover:z-30">
              <div className="size-4 bg-primary rounded-full animate-ping absolute"></div>
              <div className="size-10 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center relative z-10 transform group-hover:scale-125 transition-transform">
                <Trees className="text-white dark:text-slate-900" size={18} />
              </div>
              <div className="bg-white text-xs font-bold px-3 py-1 rounded shadow-lg mt-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Gia Lai
              </div>
            </div>

            <div className="absolute top-[55%] left-[48%] flex flex-col items-center group cursor-pointer hover:z-30">
              <div className="size-3 bg-white rounded-full animate-ping absolute"></div>
              <div className="size-6 bg-primary rounded-full border-2 border-white shadow-lg relative z-10"></div>
              <div className="bg-white text-xs font-bold px-3 py-1 rounded shadow-lg mt-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Đắk Lắk
              </div>
            </div>

            <div className="absolute top-[35%] left-[55%] flex flex-col items-center group cursor-pointer hover:z-30">
              <div className="size-3 bg-white rounded-full animate-ping absolute"></div>
              <div className="size-6 bg-primary rounded-full border-2 border-white shadow-lg relative z-10"></div>
              <div className="bg-white text-xs font-bold px-3 py-1 rounded shadow-lg mt-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Bình Định
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CustomersAndProjects;
