import React from 'react';
import {
  Package,
  Truck,
  Handshake,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Package2,
  Forklift,
  Clock,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import Footer from '@/components/Footer';

// --- DATA TYPES ---
interface ProcessStep {
  id: number;
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface Vehicle {
  title: string;
  desc: string;
  features: string[];
  image: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface PackagingRule {
  title: string;
  desc: string;
}

interface ChecklistStep {
  id: number;
  title: string;
  desc: string;
}

// --- DATA ---
const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Đóng gói & Bảo quản',
    desc: 'Cây được xếp vào sọt/bầu chuyên dụng, tưới giữ ẩm kỹ càng trước khi lên xe.',
    icon: Package,
  },
  {
    id: 2,
    title: 'Bốc xếp Lên xe',
    desc: 'Sử dụng băng chuyền hoặc nhân công lành nghề, tránh va đập gãy ngọn.',
    icon: Forklift,
  },
  {
    id: 3,
    title: 'Vận chuyển',
    desc: 'Xe tải có mui che hoặc xe lạnh tùy loại cây và cự ly di chuyển.',
    icon: Truck,
  },
  {
    id: 4,
    title: 'Giao nhận',
    desc: 'Kiểm đếm tại chân công trình và ký biên bản bàn giao đầy đủ.',
    icon: Handshake,
  },
];

const VEHICLES: Vehicle[] = [
  {
    title: 'Xe tải nhỏ (1-2.5 tấn)',
    desc: 'Phù hợp cho đơn hàng lẻ, giao trong phạm vi tỉnh hoặc lân cận (<100km).',
    features: ['Linh hoạt vào đường nhỏ', 'Giao nhanh trong ngày'],
    image:
      'https://tse4.mm.bing.net/th/id/OIP.tWobD9DkGBO2Yvwg3wt1qAHaFj?w=1024&h=768&rs=1&pid=ImgDetMain&o=7&rm=3',
    icon: Truck,
  },
  {
    title: 'Xe tải lớn (8-15 tấn)',
    desc: 'Dành cho dự án lớn, vận chuyển liên tỉnh đường dài với chi phí tối ưu.',
    features: ['Sức chứa lớn (vạn cây)', 'Thùng xe thoáng khí'],
    image:
      'https://xetaicenter.com/wp-content/uploads/2018/07/xe-tai-8-tan-hino.jpg',
    icon: Package2,
  },
  {
    title: 'Xe chuyên dụng',
    desc: 'Xe có giàn treo hoặc xe lạnh cho các loại giống quý, yêu cầu bảo quản đặc biệt.',
    features: ['Kiểm soát nhiệt độ', 'Giảm chấn động tối đa'],
    image:
      'https://vantaimientrung.com/wp-content/uploads/2017/12/chieu_cao_cua_xe_container_40_feet_c-640x480.jpg',
    icon: ShieldCheck,
  },
];

const PACKAGING_RULES: PackagingRule[] = [
  {
    title: 'Cây bầu đất',
    desc: 'Xếp khay nhựa hoặc sọt tre, cố định bầu tránh vỡ đất.',
  },
  {
    title: 'Cây rễ trần',
    desc: 'Bó thành từng bó 50-100 cây, bọc rễ bằng giá thể giữ ẩm.',
  },
  {
    title: 'Kỹ thuật xếp xe',
    desc: 'Tạo khoảng thoáng khí giữa các tầng, không xếp quá 3 tầng.',
  },
];

const CHECKLIST_STEPS: ChecklistStep[] = [
  {
    id: 1,
    title: 'Kiểm tra số lượng',
    desc: 'Đếm lại toàn bộ số cây được ghi trong phiếu giao nhận so với hàng nhận được.',
  },
  {
    id: 2,
    title: 'Kiểm tra sức khỏe',
    desc: 'Quan sát lá, thân cây không có vết bệnh, được giữ ẩm tốt trong suốt quá trình vận chuyển.',
  },
  {
    id: 3,
    title: 'Ký biên bản',
    desc: 'Ký xác nhận tình trạng hàng. Nếu phát hiện lỗi, ghi chú chi tiết trên biên bản ngay.',
  },
];

const DeliveryGuide: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background-dark text-[#111814] dark:text-white font-display transition-colors duration-300">
      {/* HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 lg:pb-28 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed animate-slow-zoom"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/37/31/81/373181aacad695f9c28be1a69a627e85.jpg')",
          }}
        ></div>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d20]/95 via-[#0b3d20]/70 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider w-fit">
              <Truck size={16} />
              <span>Vận chuyển</span>
            </div>

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg">
              Vận chuyển an toàn <br />
              <span className="text-[#67d07a]">Tận nơi toàn quốc</span>
            </h1>

            {/* Description */}
            <p className="text-gray-100 text-base md:text-xl font-normal leading-relaxed max-w-3xl drop-shadow-md">
              Dịch vụ chuyên nghiệp của Vũ Hà đảm bảo cây giống đến tay khách
              hàng luôn khỏe mạnh, đúng tiến độ và tối ưu chi phí.
            </p>
          </div>
        </div>

        {/* Tailwind Animation */}
        <style>{`
          @keyframes slow-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          .animate-slow-zoom { animation: slow-zoom 20s ease-out infinite alternate; }
        `}</style>
      </section>

      {/* QUY TRÌNH GIAO NHẬN */}
      <section
        id="process-section"
        className="py-20 lg:py-28 bg-white dark:bg-[#0b1a12]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0b3d20] dark:text-[#67d07a] font-bold uppercase tracking-wider text-sm mb-3 block">
              Quy trình làm việc
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111814] dark:text-white">
              Các bước giao nhận hàng
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 dark:bg-[#2a4034] z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-white dark:bg-[#15281e] border-4 border-gray-200 dark:border-[#2a4034] group-hover:border-[#0b3d20] dark:group-hover:border-[#67d07a] rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-all duration-300 relative">
                    <step.icon
                      size={36}
                      className="text-gray-600 dark:text-gray-400 group-hover:text-[#0b3d20] dark:group-hover:text-[#67d07a] transition-colors"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0b3d20] dark:bg-[#67d07a] text-white dark:text-[#0b3d20] font-bold rounded-full flex items-center justify-center text-sm shadow-md">
                      {step.id}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#111814] dark:text-white mb-3 group-hover:text-[#0b3d20] dark:group-hover:text-[#67d07a] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIÊU CHUẨN ĐÓNG GÓI */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#15281e] rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-[#2a4034] shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1.5 h-8 bg-[#0b3d20] dark:bg-[#67d07a] rounded-full"></span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#111814] dark:text-white">
                    Tiêu chuẩn Đóng gói
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  Chất lượng cây giống sau vận chuyển là ưu tiên hàng đầu của Vũ
                  Hà. Chúng tôi áp dụng quy chuẩn đóng gói nghiêm ngặt để đảm
                  bảo tỷ lệ sống trên 95% khi đến tay khách hàng.
                </p>

                <div className="space-y-4">
                  {PACKAGING_RULES.map((rule, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-[#0b3d20]/30 dark:hover:border-[#67d07a]/30 transition-all hover:bg-[#0b3d20]/5 dark:hover:bg-[#67d07a]/5"
                    >
                      <div className="bg-[#0b3d20]/20 dark:bg-[#67d07a]/20 p-2 rounded-full text-[#0b3d20] dark:text-[#67d07a] mt-1 shrink-0">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111814] dark:text-white mb-1">
                          {rule.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {rule.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Images - Bento Grid */}
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4 pt-8">
                  <div className="rounded-xl overflow-hidden shadow-md h-48 relative group">
                    <img
                      alt="Đóng gói cây giống"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1974&auto=format&fit=crop"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  </div>
                  <div className="bg-[#0b3d20]/10 dark:bg-[#67d07a]/10 p-6 rounded-xl flex flex-col justify-center h-48 border border-[#0b3d20]/20 dark:border-[#67d07a]/20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <ShieldCheck
                        size={80}
                        className="text-[#0b3d20] dark:text-[#67d07a]"
                      />
                    </div>
                    <span className="text-5xl font-black text-[#0b3d20] dark:text-[#67d07a] mb-2 relative z-10">
                      &gt;95%
                    </span>
                    <span className="text-sm font-bold text-[#111814] dark:text-gray-300 relative z-10">
                      Tỷ lệ sống đảm bảo
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-md h-64 relative group">
                    <img
                      alt="Cây giống khỏe mạnh"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md h-48 relative group">
                    <img
                      alt="Xếp hàng lên xe"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHƯƠNG THỨC VẬN CHUYỂN */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[#0b1a12]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0b3d20] dark:text-[#67d07a] font-bold uppercase tracking-wider text-sm mb-3 block">
              Đội ngũ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111814] dark:text-white">
              Phương thức Vận chuyển
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VEHICLES.map((vehicle, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-[#15281e] rounded-2xl border border-gray-200 dark:border-[#2a4034] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white p-2 rounded-lg border border-white/10">
                    <vehicle.icon size={20} aria-hidden="true" />
                  </div>
                  <img
                    alt={vehicle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={vehicle.image}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-lg text-[#111814] dark:text-white mb-3 group-hover:text-[#0b3d20] dark:group-hover:text-[#67d07a] transition-colors">
                    {vehicle.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 min-h-[40px] leading-relaxed">
                    {vehicle.desc}
                  </p>
                  <ul className="space-y-3">
                    {vehicle.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-xs font-medium text-gray-600 dark:text-gray-500"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#0b3d20] dark:text-[#67d07a] shrink-0"
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HƯỚNG DẪN NHẬN HÀNG */}
      <section className="py-20 lg:py-28 bg-[#0b3d20] dark:bg-[#0b3d20] text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#67d07a]/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#67d07a]/5 rounded-full blur-2xl -ml-36 -mb-36"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#67d07a] p-3 rounded-xl text-[#0b3d20]">
                  <ShieldCheck size={32} strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black">
                    Hướng dẫn nhận hàng
                  </h2>
                  <p className="text-[#67d07a] text-sm font-bold uppercase tracking-wider mt-1">
                    Quyền lợi khách hàng
                  </p>
                </div>
              </div>

              <p className="text-gray-100 mb-10 text-lg leading-relaxed">
                Để đảm bảo quyền lợi tuyệt đối, Quý khách hàng vui lòng thực
                hiện các bước kiểm tra sau khi xe đến nơi:
              </p>

              <div className="space-y-6">
                {CHECKLIST_STEPS.map((step) => (
                  <div key={step.id} className="flex gap-5 items-start group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 text-[#67d07a] font-bold flex items-center justify-center border border-white/20 group-hover:bg-[#67d07a] group-hover:text-[#0b3d20] transition-colors">
                      {step.id}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Contact Box */}
            <div className="lg:w-1/3 w-full">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl hover:border-white/30 transition-all">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-16 h-16 bg-[#67d07a]/20 rounded-full flex items-center justify-center text-[#67d07a] mb-4">
                    <Phone size={32} />
                  </div>
                  <h3 className="font-black text-xl mb-2">Cần hỗ trợ gấp?</h3>
                  <p className="text-gray-300 text-sm">
                    Liên hệ ngay nếu có sự cố vận chuyển
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 text-sm text-gray-200 bg-black/20 p-4 rounded-xl border border-white/5">
                    <Phone className="text-[#67d07a] shrink-0" size={20} />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 uppercase">
                        Hotline
                      </span>
                      <span className="font-bold text-lg">0978 509 729</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-200 bg-black/20 p-4 rounded-xl border border-white/5">
                    <Mail className="text-[#67d07a] shrink-0" size={20} />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 uppercase">
                        Email
                      </span>
                      <span className="font-medium">vanchuyen@vuha.vn</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-gray-400 italic mb-4 text-center">
                    "Chúng tôi chịu trách nhiệm 100% về sự an toàn của cây giống
                    trong quá trình vận chuyển."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeliveryGuide;
