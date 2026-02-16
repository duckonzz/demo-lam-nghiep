import React from 'react';
import {
  Eye,
  Sprout,
  Leaf,
  ShieldCheck,
  FlaskConical,
  HeartHandshake,
  Microscope,
  Trees,
  PackageCheck,
  Trophy,
  Zap,
  TrendingUp,
  Flag,
  ArrowRight,
} from 'lucide-react';
import Footer from '../components/Footer';

// --- Dữ liệu mẫu ---
const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: 'Chất lượng là danh dự',
    desc: 'Chúng tôi đặt chất lượng cây giống lên hàng đầu. Mỗi cây giống xuất vườn là lời cam kết uy tín của công ty đối với khách hàng.',
  },
  {
    icon: FlaskConical,
    title: 'Đổi mới không ngừng',
    desc: 'Luôn cập nhật và ứng dụng các công nghệ sinh học tiên tiến nhất thế giới vào quy trình sản xuất để tối ưu hóa năng suất.',
  },
  {
    icon: HeartHandshake,
    title: 'Trách nhiệm xã hội',
    desc: 'Phát triển bền vững gắn liền với trách nhiệm bảo vệ rừng, hỗ trợ cộng đồng địa phương và nâng cao đời sống người lao động.',
  },
];

const HISTORY_MILESTONES = [
  {
    year: '2014',
    title: 'Thành lập công ty',
    desc: 'Khởi đầu với một vườn ươm nhỏ quy mô 2ha và 5 kỹ sư lâm nghiệp tâm huyết, đặt nền móng cho sứ mệnh xanh hóa.',
    icon: Flag,
  },
  {
    year: '2017',
    title: 'Mở rộng quy mô',
    desc: 'Xây dựng phòng nuôi cấy mô đầu tiên đạt chuẩn ISO, nâng công suất lên 1 triệu cây giống/năm.',
    icon: TrendingUp,
  },
  {
    year: '2020',
    title: 'Đột phá công nghệ',
    desc: 'Ứng dụng công nghệ Bioreactor tiên tiến, cung cấp các dòng keo lai mô BV10, BV16, BV32 với tỷ lệ sống trên 98%.',
    icon: Zap,
  },
  {
    year: 'Nay',
    title: 'Vị thế dẫn đầu',
    desc: 'Sở hữu hệ thống 3 vườn ươm lớn (50ha), cung cấp hơn 10 triệu cây giống mỗi năm cho các dự án trọng điểm.',
    icon: Trophy,
  },
];

const INFRASTRUCTURE_IMAGES = [
  {
    id: 1, // Dùng ID để dễ xếp layout
    src: 'https://i.pinimg.com/736x/a9/e9/a7/a9e9a75089f150bde649df53f47a20fb.jpg',
    title: 'Phòng Lab Tiêu Chuẩn',
    desc: 'Công nghệ nuôi cấy mô tế bào, đảm bảo giống sạch bệnh 100%.',
    icon: Microscope,
  },
  {
    id: 2,
    src: 'https://i.pinimg.com/1200x/30/99/33/309933b373af272db438672d93db7557.jpg',
    title: 'Hệ Thống Vườn Ươm 3ha',
    desc: 'Quy mô lớn với hệ thống tưới tự động và lưới che thông minh điều tiết ánh sáng.',
    large: true, // Ảnh này sẽ to nhất
    icon: Trees,
  },
  {
    id: 3,
    src: 'https://cayxanhmienbac.vn/wp-content/uploads/2024/04/mua-ban-cay-chuoi-ngoc.jpg?v=1715760196',
    title: 'Khu Vực Xuất Hàng',
    desc: 'Quy trình đóng gói chuyên nghiệp, vận chuyển an toàn đi toàn quốc.',
    icon: PackageCheck,
  },
  //   {
  //     src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0mJWDopQvwLxrjt_FwwFGLwIOMB9w8NETG4njKH5HHGhRbXb7GDKkAbFr0FjCClwYmPbu263D5-a5GnzfzXFMAU6Gc-q63tkeni-vbUTFoPTfgSjbwgqW09yF_eaCzXsEhzI6OnaBu_fZlEhnJYJP6nb8rua5NvT18FMRkz4RRdP2JRh9P_VC1OmRCs_7dex10BWUoERTkaRO00-VF_m__I4tqJ1fWqzm396wuD_mQaZepxaB-BgPMln2Bas2pbnQNS5KsAymMxk',
  //     title: 'Đội Ngũ Chuyên Gia',
  //     desc: 'Các kỹ sư nông nghiệp giàu kinh nghiệm trực tiếp giám sát.',
  //   },
  //   {
  //     src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV1QEi6ap4A5OpZQYM29XSW1wFdQ7WNwQxr1hvGyNnM1mUbMTi63nq2CaTGgtwIVZkCx9s_HO7F6FawDmz5Jb8AiEspCdgZasivnXUF7KTfe5OFP3eBpCSxBiDzTOpF-eIe-YJ6WbjAtl0-AbsgjnarbGrCGYMscRS6Uc0v-ajYyBcHR2oX29kuisZAyG98sSExQmwFwOKRkUJ-NCBVs8TtYyRnTAWxfjw7Ujk6Dwqm5WDXeBjY90YnEEqkniG5JCLGlaJrFS7_Yo',
  //     title: 'Công Nghệ Mới',
  //     desc: 'Ứng dụng IoT trong quản lý nhiệt độ và độ ẩm.',
  //   },
];

const AboutDetail: React.FC = () => {
  return (
    // Sửa: Dùng font-body thay vì font-display cho body text
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-body transition-colors duration-300">
      {/* 2. Hero Section */}
      <section className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop')",
          }}
        ></div>

        {/* Gradient đi từ Xanh Rêu đậm (trái) -> Trong suốt (phải) */}
        {/* Giúp chữ bên trái ĐỌC RÕ, còn bên phải vẫn THẤY ẢNH */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d20]/95 via-[#0b3d20]/70 to-transparent z-0"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider w-fit animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#13ec6a]"></span>
              Câu chuyện của chúng tôi
            </div>

            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg font-display">
              Hành trình 10 năm <br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(19,236,106,0.5)]">
                xanh hóa rừng Việt
              </span>
            </h1>

            <p className="text-gray-200 text-base md:text-xl font-normal leading-relaxed max-w-2xl drop-shadow-md">
              Từ những cây mầm nhỏ bé trong phòng thí nghiệm đến những cánh rừng
              bạt ngàn. Chúng tôi kiên định với sứ mệnh mang lại màu xanh và
              thịnh vượng.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-20 lg:py-28 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">
                  Tầm nhìn & Sứ mệnh
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                  Cam kết cho một nền <br /> lâm nghiệp{' '}
                  <span className="text-primary">bền vững</span>
                </h2>
                <p className="text-text-secondary dark:text-gray-300 text-lg">
                  Chúng tôi không chỉ trồng cây, chúng tôi gieo mầm cho tương
                  lai. Sự phát triển gắn liền với bảo vệ môi trường sinh thái.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-background-light dark:bg-surface-dark rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-background-dark rounded-full flex items-center justify-center text-primary shadow-sm">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-text-main dark:text-white">
                      Tầm nhìn
                    </h3>
                    <p className="text-text-secondary dark:text-gray-400 text-sm">
                      Đơn vị dẫn đầu Việt Nam về công nghệ giống lâm nghiệp vào
                      năm 2030.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-background-light dark:bg-surface-dark rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-background-dark rounded-full flex items-center justify-center text-primary shadow-sm">
                    <Sprout size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-text-main dark:text-white">
                      Sứ mệnh
                    </h3>
                    <p className="text-text-secondary dark:text-gray-400 text-sm">
                      Cung cấp giống sạch bệnh, năng suất cao, đồng hành cùng bà
                      con.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://i.pinimg.com/1200x/65/52/f6/6552f63670f9761afbdfcb0d7cfd3fa9.jpg"
                alt="Phòng Lab"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-surface-dark p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                    <Leaf size={20} />
                  </div>
                  <span className="font-bold text-lg text-text-main dark:text-white">
                    Cam kết xanh
                  </span>
                </div>
                <p className="text-text-secondary dark:text-gray-400 text-sm">
                  100% quy trình thân thiện môi trường.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-text-secondary dark:text-gray-400 text-lg">
              Những nguyên tắc định hình văn hóa và hành động của chúng tôi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 group text-center border-t-4 border-transparent hover:border-primary"
              >
                <div className="w-20 h-20 mx-auto bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <val.icon size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-main dark:text-white">
                  {val.title}
                </h3>
                <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Timeline History */}
      <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-3 block">
              Hành trình phát triển
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-text-main dark:text-white leading-tight">
              10 Năm Kiến Tạo Giá Trị Bền Vững
            </h2>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* TRỤC DỌC */}
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-gray-200 dark:bg-gray-700 md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {HISTORY_MILESTONES.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Spacer Desktop */}
                    <div className="hidden md:block w-1/2"></div>

                    {/* Icon Tròn Ở Giữa */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 w-12 h-12 bg-white dark:bg-background-dark border-4 border-primary rounded-full shadow-lg">
                      <item.icon
                        className="w-5 h-5 text-primary"
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* CARD NỘI DUNG */}
                    <div
                      className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                        isEven ? 'md:pr-16' : 'md:pl-16'
                      }`}
                    >
                      <div
                        className={`
                      group relative p-8 bg-gray-50 dark:bg-[#15281e] rounded-2xl 
                      border-2 border-transparent hover:border-primary/50  /* Fix lỗi lệch layout: Luôn có border */
                      hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out
                      ${isEven ? 'md:text-right' : 'md:text-left'}
                    `}
                      >
                        {/* Mũi tên chỉ vào trục (Desktop) */}
                        <div
                          className={`hidden md:block absolute top-8 w-4 h-4 bg-gray-50 dark:bg-[#15281e] rotate-45 border-transparent transition-colors duration-300 
                        ${
                          isEven
                            ? '-right-2.5 border-t-2 border-r-2 group-hover:border-primary/50'
                            : '-left-2.5 border-b-2 border-l-2 group-hover:border-primary/50'
                        }
                        /* Hack nhỏ để che đường viền thừa khi hover */
                        group-hover:border-b-0 group-hover:border-l-0
                      `}
                        ></div>

                        {/* Năm (Watermark) - Đã đưa vào trong card và chỉnh màu */}
                        <span
                          className={`
                        text-6xl font-black text-primary/10 group-hover:text-primary/20 dark:text-white/5 
                        absolute top-2 z-0 select-none transition-colors duration-300
                        ${isEven ? 'left-6' : 'right-6'}
                      `}
                        >
                          {item.year}
                        </span>

                        {/* Nội dung Text */}
                        <div className="relative z-10 pt-2">
                          {/* Badge năm nhỏ cho Mobile dễ đọc */}
                          <div
                            className={`md:hidden mb-2 inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-primary/10 text-primary border border-primary/20`}
                          >
                            {item.year}
                          </div>
                          <h4 className="text-xl font-bold text-text-main dark:text-white mb-3 group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Infrastructure Gallery */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">
                Cơ sở vật chất
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-text-main dark:text-white font-display">
                Hạ tầng hiện đại - <br /> Nền tảng của chất lượng
              </h2>
            </div>
          </div>

          {/* Gallery Grid - Bento Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 h-auto lg:h-[600px]">
            {INFRASTRUCTURE_IMAGES.map((img, idx) => {
              // Logic xếp layout: Ảnh 'large' chiếm 2 cột, 2 dòng (bên trái). Các ảnh còn lại xếp cột phải.
              const isLarge = img.large;
              const gridClass = isLarge
                ? 'lg:col-span-2 lg:row-span-2' // Ảnh to chiếm 2/3
                : 'lg:col-span-1 lg:row-span-1'; // Ảnh nhỏ chiếm 1/3

              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${gridClass} h-[300px] lg:h-auto`}
                >
                  {/* Background Image with Zoom Effect */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Icon nổi bật */}
                    <div className="w-12 h-12 mb-4 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-primary border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {img.icon && <img.icon size={24} />}
                    </div>

                    <h3
                      className={`font-bold text-white mb-2 font-display ${
                        isLarge ? 'text-2xl md:text-3xl' : 'text-xl'
                      }`}
                    >
                      {img.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      {img.desc}
                    </p>

                    {/* Decorative Line */}
                    <div className="w-0 group-hover:w-full h-1 bg-primary mt-4 transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutDetail;
