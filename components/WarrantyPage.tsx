import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Truck,
  Phone,
  AlertCircle,
  ChevronDown,
  FileText,
  MessageCircle,
  Leaf,
  Award,
  Wrench,
  PhoneCall,
  FileCheck,
  Zap,
  Download,
} from 'lucide-react';
import Footer from './Footer';

const WarrantyPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const policies = [
    {
      title: 'Cam kết chất lượng giống',
      content: [
        'Nguồn gốc xuất xứ: 100% cây giống được sản xuất từ vườn ươm được cấp phép, có hồ sơ truy xuất nguồn gốc rõ ràng.',
        'Tiêu chuẩn hình thái: Cây đạt chiều cao tiêu chuẩn (25-30cm đối với keo, bạch đàn), thân thẳng, không cụt ngọn, không sâu bệnh.',
        'Hệ rễ: Bầu cây chắc chắn, hệ rễ phát triển mạnh, rễ không bị cuộn xoắn trong bầu.',
        'Sạch bệnh: Đã qua xử lý nấm bệnh trước khi xuất vườn.',
      ],
    },
    {
      title: 'Chính sách Đổi trả & Bồi thường',
      content: [
        'Thời gian khiếu nại: Trong vòng 30 ngày kể từ ngày nhận cây.',
        'Điều kiện áp dụng: Tỷ lệ sống thực tế kiểm đếm dưới 85% do lỗi từ phía nhà cung cấp.',
        'Yêu cầu: Khách hàng tuân thủ đúng quy trình kỹ thuật trồng và chăm sóc do công ty hướng dẫn.',
        'Hình thức: Bù cây mới tương đương hoặc hoàn tiền theo thỏa thuận.',
      ],
    },
    {
      title: 'Quy định về Vận chuyển',
      content: [
        'Chúng tôi sử dụng xe tải chuyên dụng có giàn đỡ để đảm bảo cây không bị gãy ngọn, dập nát trong quá trình di chuyển.',
        'Khách hàng được quyền kiểm tra tình trạng cây ngay tại xe trước khi hạ hàng.',
        'Mọi hư hỏng do vận chuyển sẽ được bù ngay lập tức tại thời điểm giao hàng.',
      ],
    },
  ];

  return (
    <div className="bg-background-light text-text-dark font-body min-h-screen transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative w-full bg-background-light dark:bg-background-dark">
        {/* Background Image & Gradient Overlay */}
        <div
          className="absolute inset-0 h-[450px] w-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 34, 23, 0.7), rgba(16, 34, 23, 0.8)), url('https://i.pinimg.com/1200x/96/9d/e0/969de0f730b201e5903de19abd39b422.jpg')`,
          }}
        ></div>

        <div className="relative layout-container flex flex-col items-center pt-24 pb-16 px-4 md:px-10">
          <div className="max-w-[800px] text-center flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-center rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm border border-white/20">
              <ShieldCheck className="text-primary" size={16} />
              <span className="text-xs font-bold uppercase tracking-wider text-white font-display">
                Văn bản chính thức
              </span>
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl font-display">
              Chính sách Bảo hành & <br />
              <span className="text-primary">Cam kết Chất lượng</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed font-light">
              Chúng tôi hiểu rằng rừng là tài sản trọn đời. Công ty TNHH Vũ Hà cam
              kết đồng hành cùng bà con với những tiêu chuẩn khắt khe nhất về
              giống và dịch vụ.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <button className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-text-dark font-bold hover:translate-y-[-2px] transition-transform shadow-lg shadow-primary/20">
                <Download size={20} />
                <span>Tải văn bản PDF</span>
              </button>
              <button className="flex h-12 items-center justify-center gap-2 rounded-lg bg-white/10 px-6 text-white font-bold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                <MessageCircle size={20} />
                <span>Liên hệ tư vấn</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges - Nổi lên trên */}
      <div className="relative -mt-10 z-10 px-4 md:px-10 mb-16">
        <div className="mx-auto max-w-[1024px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shadow-xl rounded-xl bg-white dark:bg-[#1a3324] p-6 border border-[#dbe6df] dark:border-[#2a4a35]">
            {[
              {
                icon: Leaf,
                title: 'Chuẩn Giống F1',
                desc: 'Gen thuần chủng, sạch bệnh 100% từ phòng Lab.',
              },
              {
                icon: Award,
                title: 'Bảo Hành Tỷ Lệ Sống',
                desc: 'Cam kết bù cây nếu tỷ lệ sống < 85% trong 30 ngày.',
              },
              {
                icon: Wrench,
                title: 'Đồng Hành Kỹ Thuật',
                desc: 'Đội ngũ kỹ sư lâm nghiệp hỗ trợ kỹ thuật trọn đời dự án.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 gap-3 border-b md:border-b-0 md:border-r border-[#f0f4f2] last:border-0"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e3fbed] text-primary mb-2">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-text-dark font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="layout-container flex flex-col items-center px-4 md:px-10 pb-20">
        <div className="w-full max-w-[960px] flex flex-col gap-16">
          {/* Section 1: Policies Accordion */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight text-text-dark font-display">
                Chi tiết điều khoản
              </h2>
              <p className="text-text-muted">
                Các quy định cụ thể về chất lượng sản phẩm và quyền lợi khách
                hàng.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {policies.map((policy, index) => (
                <div
                  key={index}
                  className={`group flex flex-col rounded-lg border bg-white transition-all duration-300 ${
                    openSection === index
                      ? 'border-primary ring-1 ring-primary/50'
                      : 'border-[#dbe6df]'
                  }`}
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="flex cursor-pointer items-center justify-between gap-4 p-5 w-full text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f4f2] text-text-dark font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-text-dark font-display">
                        {policy.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`text-text-dark transition-transform duration-300 ${
                        openSection === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openSection === index && (
                    <div className="px-5 pb-5 pl-[68px]">
                      {index === 1 ? (
                        // Special render for Return Policy (Section 2) containing a styled box
                        <div>
                          <p className="mb-4 text-text-muted text-base leading-relaxed">
                            Công ty TNHH Vũ Hà cam kết chia sẻ rủi ro cùng bà con
                            nông dân. Chính sách bảo hành được áp dụng như sau:
                          </p>
                          <div className="rounded-lg bg-[#f0f4f2] p-4 border border-[#dbe6df]">
                            <h4 className="font-bold text-text-dark mb-2 text-sm uppercase">
                              Điều kiện áp dụng
                            </h4>
                            <ul className="flex flex-col gap-2 list-none text-text-muted text-sm">
                              {policy.content.slice(1).map((line, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle
                                    size={18}
                                    className="text-primary mt-0.5 shrink-0"
                                  />
                                  <span>{line.split(': ')[1] || line}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <ul className="flex flex-col gap-3 text-text-muted text-base leading-relaxed">
                          {policy.content.map((line, i) => (
                            <li key={i} className="flex items-start gap-2">
                              {index === 0 ? (
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-text-muted shrink-0"></div>
                              ) : null}
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-[#f0f4f2]" />

          {/* Section 2: Timeline */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight text-text-dark font-display">
                Quy trình xử lý khiếu nại
              </h2>
              <p className="text-text-muted">
                Minh bạch, nhanh chóng và luôn đặt quyền lợi khách hàng lên hàng
                đầu.
              </p>
            </div>

            <div className="relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#dbe6df] -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                {[
                  {
                    step: '1',
                    title: 'Ghi nhận',
                    desc: 'Chụp ảnh/Video hiện trạng cây.',
                    icon: null,
                  }, // Step 1 uses number
                  {
                    step: '2',
                    title: 'Liên hệ',
                    desc: 'Gọi Hotline hoặc Zalo.',
                    icon: PhoneCall,
                  },
                  {
                    step: '3',
                    title: 'Thẩm định',
                    desc: 'Kỹ sư xác nhận trong 24h.',
                    icon: FileCheck,
                  },
                  {
                    step: '4',
                    title: 'Bồi thường',
                    desc: 'Vận chuyển cây bù hoặc hoàn tiền.',
                    icon: Truck,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col gap-4 items-center md:items-start bg-white md:bg-transparent p-4 md:p-0 rounded-lg border border-[#dbe6df] md:border-none"
                  >
                    {item.icon ? (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-2 border-primary text-primary font-bold text-lg shadow-lg ring-4 ring-white">
                        <item.icon size={24} />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-text-dark font-bold text-lg shadow-lg ring-4 ring-white">
                        1
                      </div>
                    )}

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                      <h4 className="text-lg font-bold text-text-dark font-display">
                        {item.title}
                      </h4>
                      <p className="text-sm text-text-muted mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: CTA Box */}
          <div className="rounded-2xl bg-[#102217] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="flex flex-col gap-4 max-w-lg">
                <div className="inline-flex items-center gap-2 rounded-md bg-primary/20 px-3 py-1 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                  Hỗ trợ 24/7
                </div>
                <h2 className="text-3xl font-bold text-white font-display">
                  Cần hỗ trợ kỹ thuật trồng rừng?
                </h2>
                <p className="text-gray-300 text-lg">
                  Đội ngũ chuyên gia của chúng tôi sẵn sàng giải đáp mọi thắc
                  mắc về kỹ thuật canh tác, bón phân và phòng trừ sâu bệnh.
                </p>
              </div>
              <div className="flex flex-col w-full md:w-auto gap-4">
                <button className="flex h-14 min-w-[200px] items-center justify-center gap-3 rounded-lg bg-primary px-6 text-[#102217] text-base font-bold hover:bg-white transition-colors shadow-lg shadow-primary/20">
                  <Phone size={20} /> <span>Gọi 0978 509 729</span>
                </button>
                <button className="flex h-14 min-w-[200px] items-center justify-center gap-3 rounded-lg bg-white/10 border border-white/20 px-6 text-white text-base font-bold hover:bg-white/20 transition-colors">
                  <MessageCircle size={20} /> <span>Chat Zalo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WarrantyPage;
