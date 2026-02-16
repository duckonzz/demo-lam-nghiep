import React, { useState } from 'react';
import {
  Home,
  ChevronRight,
  ShieldCheck,
  Printer,
  Copy,
  Check,
  FileText,
  Search,
  Download,
  Gavel,
  Phone,
  X,
  FileCheck,
  Building2,
  Calendar,
  MapPin,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Footer from '@/components/Footer';

// --- DỮ LIỆU PHÁP LÝ ---
const LEGAL_INFO = [
  {
    label: 'Tên doanh nghiệp',
    value: 'CÔNG TY TNHH LÂM NGHIỆP VŨ HÀ',
    icon: Building2,
  },
  { label: 'Mã số thuế', value: '0106882XXX', icon: FileText, copyable: true },
  {
    label: 'Đại diện pháp luật',
    value: 'Ông Nguyễn Văn Vũ - Giám đốc điều hành',
    icon: ShieldCheck,
  },
  { label: 'Ngày thành lập', value: '15/03/2010', icon: Calendar },
  {
    label: 'Trụ sở chính',
    value:
      'Số 123, Đường Lâm Nghiệp, Xã Tân Tiến, Huyện Văn Giang, Tỉnh Hưng Yên',
    icon: MapPin,
  },
  {
    label: 'Lĩnh vực hoạt động',
    value: 'Sản xuất giống cây lâm nghiệp, Kinh doanh gỗ rừng trồng',
    icon: Briefcase,
    isTag: true,
  },
];

// --- DỮ LIỆU CHỨNG NHẬN ---
const CERTIFICATES = [
  {
    id: 1,
    title: 'Giấy ĐKKD Doanh Nghiệp',
    desc: 'Chứng nhận đăng ký kinh doanh chính thức cấp bởi Sở Kế hoạch & Đầu tư Hưng Yên.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcD1ruoOPg_we2GCumZs0NYJWBJm2LbVmZdGBfqtFQbbJVIE7P7qrixPpSLy4rDjW8Rvn70iLU562x51V6oy7dPMCrJtaU-Wh_rTD5zjwVShjnJjeAAwDnt-jyzX9b7bv_N_LwLJRHqMsOrjF0QaQyglCaaIhbEgy6NKZWAWrv6FSxVvzbwfrVCoHNrm1JUo37zGP_e6YJZ1yUfZ3kaCW8Mo8gjhKywsno1FI0sOVCa4xr3ox9w1HfHChITHiGrOp-L7sCrUm8vKA', // Thay ảnh thật của bạn
    type: 'Pháp lý',
  },
  {
    id: 2,
    title: 'Chứng nhận ISO 9001:2015',
    desc: 'Hệ thống quản lý chất lượng đạt tiêu chuẩn quốc tế cho quy trình ươm giống.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBRUkN2nw6Ohwp6Jg6C9wwQ__Ojofv48nep9eU_-ggxxJOF3dyvkifDGgtY0eUvTyL-e5wOQrTJItxG_NHJQ-USXS_LYZnpmOawP1arPm19bUCK9eRZ_GYRwfRKD0uwSTNmoclpz-qxr5UMGkczZBFyoHPgq2htUHmWCiVyzRObhZfFRKIUfG4qRxdQbyubCLjzOwtMmRVbf_KFeXtM4aiK5kkuikkGbN6KTvmfL2x0VQpS2RdRbZDKQnnkWAlZn6YmEGRqBrOlQA',
    type: 'Chất lượng',
  },
  {
    id: 3,
    title: 'Nguồn gốc giống cây trồng',
    desc: 'Chứng nhận nguồn gốc xuất xứ lô giống cây Keo lai và Bạch đàn.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiD5MXSesCcCIckamvKBvZr5Hm2A1W0VftS-ee4KCDUFm6p78cw81wRsUz3vzuX7wgJZeM9p51iVYb0a3M9pm0P3cJWRhQqFuJdWJhcWQd1p_9w_9DOECSEBAFKfk_CNLgW4bH8vvvlyV8oshJvcGOuh4R1zbBD8fuaqGYhp_gh_R60fhQeFwYKPk1hYLfJPeb6XImDfKgSzFMeLGynQjkpPT-9gsf0YzmVHFtm63kkOjeAzUBG0M9B-0u7TV8ulRn6aLIPyMwCbQ',
    type: 'Nguồn gốc',
  },
  {
    id: 4,
    title: 'Chứng nhận Đăng Ký Thuế',
    desc: 'Giấy chứng nhận đăng ký thuế doanh nghiệp hợp pháp.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3e896TWkrR-qX46RyeD6buixsB3N5K2pyXoBVUDlafi1a8dsVv8yhLcEbphJjjmYhcNr41j0q-OLBBLWB2jaQl-VsyqxWvP14Ww1xYjPFIpbiba7u2UCv0j5yZdcgC4I0MtYpYMSmC59BCJ6F9I06ImPL1GvR0Gop0n5K3ybxITuvjA4OdSeHFCSauP-q1vZvXiDXZN0YJQs1dzYuPiprJRIISzRQseSYcrtSIvDNdvmtBRgNsIQRch_E7a5nKadmOXVytVQCY-4',
    type: 'Pháp lý',
  },
];

const LegalPage: React.FC = () => {
  // State cho Lightbox (Xem ảnh phóng to)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // State cho nút Copy
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white dark:bg-background-dark text-[#111814] dark:text-white font-display transition-colors duration-300">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 lg:pb-28 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=1200')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d20]/95 to-[#0b3d20]/60"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider w-fit">
              <span className="w-2 h-2 rounded-full bg-[#67d07a]"></span>
              Minh bạch & Pháp lý
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg">
              Hoạt động <br />
              <span className="text-[#67d07a]">
                minh bạch & tuân thủ pháp luật
              </span>
            </h1>
            <p className="text-gray-100 text-base md:text-xl font-normal leading-relaxed max-w-3xl drop-shadow-md">
              Công ty TNHH Vũ Hà cam kết hoạt động với sự minh bạch tuyệt đối,
              tuân thủ các quy định Luật Lâm Nghiệp Việt Nam và tiêu chuẩn chất
              lượng quốc tế.
            </p>
          </div>
        </div>
      </section>

      {/* 2. LEGAL INFO SECTION */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[#0b1a12]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <span className="text-[#0b3d20] dark:text-[#67d07a] font-bold uppercase tracking-wider text-sm mb-3 block">
                Thông tin doanh nghiệp
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hồ sơ pháp lý <br />
                <span className="text-[#0b3d20] dark:text-[#67d07a]">
                  công ty
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Tất cả thông tin doanh nghiệp được cập nhật hàng năm và tuân thủ
                quy định của Nhà nước.
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 bg-[#0b3d20] dark:bg-[#0b3d20] text-white hover:bg-[#0a2d1a] dark:hover:bg-[#0a2d1a] font-bold rounded-xl transition-all shadow-lg hover:-translate-y-1"
            >
              <Printer size={20} />
              In hồ sơ
            </button>
          </div>

          <div className="bg-white dark:bg-[#15281e] rounded-2xl shadow-lg border border-gray-200 dark:border-[#2a4034] overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-[#2a4034]">
              {LEGAL_INFO.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row p-8 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                >
                  <div className="md:w-1/3 flex items-center gap-3 mb-4 md:mb-0">
                    <div className="w-10 h-10 bg-[#0b3d20]/10 dark:bg-[#67d07a]/10 rounded-lg flex items-center justify-center">
                      <item.icon
                        size={20}
                        className="text-[#0b3d20] dark:text-[#67d07a]"
                      />
                    </div>
                    <span className="font-bold text-[#0b3d20] dark:text-gray-300">
                      {item.label}
                    </span>
                  </div>
                  <div className="md:w-2/3 font-medium text-[#111814] dark:text-white text-lg flex items-center gap-3 flex-wrap">
                    {item.isTag ? (
                      <div className="flex flex-wrap gap-2">
                        {item.value.split(', ').map((tag, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-[#0b3d20]/10 dark:bg-[#67d07a]/10 text-[#0b3d20] dark:text-[#67d07a] border border-[#0b3d20]/20 dark:border-[#67d07a]/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span>{item.value}</span>
                    )}

                    {item.copyable && (
                      <button
                        onClick={() => handleCopy(item.value)}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-[#0b3d20] dark:text-[#67d07a] transition-colors relative group/copy"
                        title="Sao chép"
                      >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied && (
                          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                            Đã chép!
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CERTIFICATES GALLERY */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#0b3d20] dark:text-[#67d07a] font-bold uppercase tracking-wider text-sm mb-3 block">
                Chứng thư & Giấy phép
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Thư viện chứng nhận <br /> &amp;{' '}
                <span className="text-[#0b3d20] dark:text-[#67d07a]">
                  giấy phép hoạt động
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className="group bg-white dark:bg-[#15281e] rounded-2xl border border-gray-200 dark:border-[#2a4034] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image Section */}
                <div
                  className="relative h-56 bg-gray-100 dark:bg-black/30 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <div className="absolute top-3 right-3 z-10 bg-[#0b3d20] text-white text-xs px-3 py-1.5 rounded-lg font-bold backdrop-blur-md">
                    {cert.type}
                  </div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/95 dark:bg-[#0b3d20] text-[#0b3d20] dark:text-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Search size={24} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3
                      className="font-bold text-base text-[#111814] dark:text-white line-clamp-2 hover:text-[#0b3d20] dark:hover:text-[#67d07a] transition-colors cursor-pointer"
                      onClick={() => setSelectedImage(cert.image)}
                    >
                      {cert.title}
                    </h3>
                    <FileCheck
                      className="text-[#0b3d20] dark:text-[#67d07a] shrink-0"
                      size={18}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 line-clamp-2 min-h-[40px] leading-relaxed">
                    {cert.desc}
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedImage(cert.image)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-[#0b3d20] dark:bg-[#0b3d20] hover:bg-[#0a2d1a] dark:hover:bg-[#0a2d1a] rounded-xl transition-all transform hover:-translate-y-0.5"
                    >
                      <Search size={16} /> Xem
                    </button>
                    <button
                      className="flex items-center justify-center w-10 h-10 text-[#0b3d20] dark:text-[#67d07a] bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-xl transition-colors"
                      title="Tải về"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Placeholder Card */}
            <div className="group bg-white dark:bg-[#15281e] rounded-2xl border-2 border-dashed border-gray-300 dark:border-[#2a4034] flex flex-col items-center justify-center p-8 text-center hover:border-[#0b3d20] dark:hover:border-[#67d07a] transition-colors cursor-pointer h-full">
              <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FileText
                  className="text-gray-400 dark:text-gray-600"
                  size={28}
                />
              </div>
              <h3 className="font-bold text-base text-[#111814] dark:text-gray-300 mb-1">
                Giấy chứng nhận
                <br />
                năm 2024
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Đang cập nhật...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMITMENT SECTION */}
      <section className="py-20 lg:py-28 bg-[#0b3d20] dark:bg-[#0b3d20] text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#67d07a]/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#67d07a]/5 rounded-full blur-2xl -ml-36 -mb-36"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="lg:w-2/3 flex flex-col gap-8">
              <div>
                <span className="text-[#67d07a] font-bold uppercase tracking-wider text-sm mb-3 block">
                  Cam kết pháp lý
                </span>
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                  Tuân thủ Luật <br />
                  Lâm Nghiệp Việt Nam
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Vũ Hà cam kết tuân thủ nghiêm ngặt tất cả các quy định tại
                  Luật Lâm Nghiệp năm 2017 và các quy định liên quan của Bộ Nông
                  Nghiệp & Phát Triển Nông Thôn. Mọi hoạt động kinh doanh của
                  chúng tôi đều:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Có nguồn gốc xuất xứ rõ ràng cho mỗi lô giống',
                    'Đảm bảo quy trình canh tác bền vững & thân thiện môi trường',
                    'Minh bạch trong báo cáo thuế và quản lý tài chính',
                    'Tuân thủ tiêu chuẩn chất lượng ISO & các quy chuẩn quốc gia',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-[#67d07a] shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:w-1/3 w-full">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-2xl text-center hover:border-white/30 transition-all">
                <Gavel className="w-16 h-16 mx-auto mb-6 text-[#67d07a]" />
                <h3 className="text-white font-black text-2xl mb-3">
                  Cần hỗ trợ?
                </h3>
                <p className="text-gray-200 text-sm mb-8 leading-relaxed">
                  Liên hệ bộ phận pháp lý để giải đáp mọi thắc mắc về hợp đồng &
                  hồ sơ
                </p>
                <a
                  href="tel:0978509729"
                  className="inline-flex items-center justify-center w-full bg-[#67d07a] hover:bg-green-400 text-[#0b3d20] font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:-translate-y-1"
                >
                  <Phone className="mr-2" size={20} />
                  0978 509 729
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Certificate Fullscreen"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LegalPage;
