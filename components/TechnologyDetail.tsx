import React from 'react';
import { X, CheckCircle, Droplets, Grid3x3, Zap, Phone } from 'lucide-react';

interface TechnologyDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

const TechnologyDetail: React.FC<TechnologyDetailProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Modal Container - Positioned with offset from top */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
        }`}
        style={{
          paddingTop: '120px',
          paddingBottom: '60px',
          overflowY: 'auto',
        }}
      >
        {/* Modal Content */}
        <div
          className="bg-white dark:bg-[#1a2c20] rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
          style={{ pointerEvents: 'auto', maxHeight: 'calc(100vh - 180px)' }}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-slate-50 to-white dark:from-[#0c1a12] dark:to-[#1a2c20] border-b border-gray-200 dark:border-[#2a4030] p-6 flex items-start justify-between z-20 shrink-0">
            <div className="flex-1 pr-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f7ed] dark:bg-[#2a4030] text-primary text-xs font-bold uppercase tracking-wider mb-2 border border-[#dbe6df] dark:border-[#2a4030]">
                <span>🔬</span>
                Công nghệ sinh học tiên tiến
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                Chi tiết Quy trình{' '}
                <span className="text-primary">Nuôi cấy mô</span>
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-[#2a4030] rounded-lg transition-colors"
              title="Đóng"
            >
              <X size={24} className="text-slate-900 dark:text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1 p-6 md:p-10 space-y-12">
            {/* Intro */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Hệ thống nhân giống vô tính in-vitro hiện đại bậc nhất, đảm bảo
                100% cây giống sạch bệnh, đồng nhất về di truyền và có sức sống
                vượt trội khi đưa ra môi trường tự nhiên.
              </p>
            </div>

            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center pb-8 border-b border-gray-200 dark:border-[#2a4030]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center size-10 rounded-full bg-primary text-slate-900 font-bold text-lg">
                    1
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Tuyển chọn Cây đầu dòng
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
                  Quy trình bắt đầu bằng việc khảo sát và tuyển chọn khắt khe từ
                  rừng giống tự nhiên hoặc vườn giống đầu dòng. Chỉ những cây mẹ
                  (Cây Plus) có ưu thế lai vượt trội, thân thẳng, không sâu bệnh
                  và sinh trưởng nhanh nhất mới được chọn để lấy mẫu mô
                  (explant).
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-slate-900 dark:text-gray-300 font-medium">
                      Sàng lọc gen di truyền
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-slate-900 dark:text-gray-300 font-medium">
                      Kiểm tra sạch bệnh virus/vi khuẩn
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-48 bg-gray-200">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCJGaN9bTx4FeG68D_GPWGmQeIIDOsWfHkEOFotNWSaoHZMxESnpeTiMVHHc9DEC1AW2L-U6GqDYzsbH7OKSpBrl34Ui7sV7DbgjlYCLy1thhXmH4E0h6Z0XDlU6b4XNhHWFwedvOJnte9MiVWKpwsmZ26xgElcp4BRG1CbzlF3sfqTXyWg0NpgUitJnnvCH4ECdPeg4vuyA3HbUeS9uQFvCjL6eLjFjVect8gmmG6VH2IdlP6C-iuc1Y_jErtcMfmvvUUOOgxjZ0"
                  alt="Cây đầu dòng"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center pb-8 border-b border-gray-200 dark:border-[#2a4030]">
              <div className="rounded-xl overflow-hidden shadow-lg h-48 bg-gray-200 md:order-last">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTYmQjYFw5z2ZJtdxdI5l4GLTM9-w5ZM30FsBybBGH7SAM-3F0szpKu4T2b_SZ4Fa-UUq-y1fWyrbufqUCu_sNsOC-XwsuyTWfcGINEi0_sFRy9Scvyy2ahj8c1eQKhTTiOFXMaJvYmdv1_yMoz-g38etORqLjbK43L7u_v_xJmsTx-4uk4lyDKleSVdHgSk0FVu45te6hz4LS9WNohdTJp2QoRiP8sJ04YwrlHgli3HGNg6hUut3JzdDrw_ZLmiE_FIljhZi9IcE"
                  alt="Lab tissue culture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:order-first">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center size-10 rounded-full bg-primary text-slate-900 font-bold text-lg">
                    2
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Nuôi cấy In-vitro (Phòng Lab)
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                  Đây là giai đoạn quan trọng nhất. Các mẫu mô được khử trùng và
                  đưa vào môi trường dinh dưỡng nhân tạo (Môi trường MS cải
                  tiến) trong điều kiện vô trùng tuyệt đối.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-[#102217] p-4 rounded-lg border border-gray-200 dark:border-[#2a4030]">
                    <Zap size={24} className="text-primary mb-2" />
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      Kiểm soát nhiệt độ
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      25°C ± 2°C liên tục
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-[#102217] p-4 rounded-lg border border-gray-200 dark:border-[#2a4030]">
                    <Zap size={24} className="text-primary mb-2" />
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      Chu kỳ chiếu sáng
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      16 giờ sáng / 8 giờ tối
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center pb-8 border-b border-gray-200 dark:border-[#2a4030]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center size-10 rounded-full bg-primary text-slate-900 font-bold text-lg">
                    3
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Giai đoạn Thuần dưỡng
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                  Cây con sau khi ra rễ trong ống nghiệm được chuyển ra nhà
                  màng. Tại đây, cây được tập thích nghi với độ ẩm và ánh sáng
                  tự nhiên thông qua hệ thống phun sương tự động và lưới cắt
                  nắng thông minh.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Droplets
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-slate-900 dark:text-gray-300 font-medium">
                      Hệ thống tưới phun sương tự động
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Grid3x3
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-slate-900 dark:text-gray-300 font-medium">
                      Giá thể sạch bệnh (xơ dừa, than bùn)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-48 bg-gray-200">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0qKmGgVHAd_cCFIqOVYTFLDfLxaioOubS-PDa_RRc71ZtwXcIxxrlYE_2VosyEOP3HLHUYE4r64bBuQVlb4HCUicgDJG6yBexT8hPZzHtdBLTQw1mC378RoqxeDBZpPudQhva-XZSOWyZxu0AmWfHGMgMXeFglrZCHwoI5gQY3ISs7oo4x8C_yB0CAouGUbd4Yp4b5rVXykkE--0kPwIBKaSunh0bRURpMM2hIa5MIReSGOnSRB8VKkXMfMQLauzXeZZyOs8wxnE"
                  alt="Thuần dưỡng cây con"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center pb-8 border-b border-gray-200 dark:border-[#2a4030]">
              <div className="rounded-xl overflow-hidden shadow-lg h-48 bg-gray-200 md:order-last">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUhiSEKlhYnOgFZY7LAlUIwEgJfWaszJ4ygHfTS798-cG3PLzgKYjCcqIuHyztVQJgIwK1Llnl1gl6GWyMi2mFll7rTh3QV5lLL7Wv3S7wEkyBfxTolvupLONCrbyMf4-gV2qBwDwkh6FGVGS8mJ09MKdnwgkBQyWNja2ROH3RLteM77P0z0OC0TelzjHllYxLLuqhDEaiXoRZDTRBklAZ6oBU-7_IaVSRE_GrjiND-Q9ERcAWhSqiuuw9Y9UuDZwfcJqzjws8bSo"
                  alt="Kiểm định và xuất vườn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:order-first">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center size-10 rounded-full bg-primary text-slate-900 font-bold text-lg">
                    4
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Kiểm định & Xuất vườn
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                  Trước khi đến tay khách hàng, từng bầu cây được kiểm tra thủ
                  công. Cây đạt chuẩn phải có bộ rễ khỏe mạnh (rễ trắng, bám
                  bầu), thân cứng cáp, chiều cao từ 25-30cm và không có dị tật.
                </p>
                <div className="p-5 bg-primary/10 rounded-xl border border-primary/20">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                    ✓ Cam kết chất lượng
                  </h4>
                  <p className="text-sm text-slate-900 dark:text-gray-300">
                    Chúng tôi cam kết tỷ lệ sống &gt;95% khi trồng đúng kỹ
                    thuật. Hỗ trợ 1 đổi 1 cho cây hư hỏng trong quá trình vận
                    chuyển.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Standards */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
                Tiêu chuẩn Kỹ thuật & Chỉ số
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-[#102217] p-6 rounded-lg border border-gray-200 dark:border-[#2a4030] text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    99.9%
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Độ thuần chủng Gene
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-[#102217] p-6 rounded-lg border border-gray-200 dark:border-[#2a4030] text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Sạch bệnh & Virus
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-[#102217] p-6 rounded-lg border border-gray-200 dark:border-[#2a4030] text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    ISO 9001
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Quy trình quản lý
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-[#102217] p-6 rounded-lg border border-gray-200 dark:border-[#2a4030] text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    &gt;95%
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Tỷ lệ sống thực tế
                  </p>
                </div>
              </div>
            </div>
            {/* CTA */}
            <div className="text-center bg-primary/5 dark:bg-[#102217] border border-primary/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Bạn cần tư vấn thêm về kỹ thuật trồng?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Đội ngũ kỹ sư lâm nghiệp của chúng tôi luôn sẵn sàng hỗ trợ giải
                đáp mọi thắc mắc về quy trình trồng và chăm sóc cây giống mô.
              </p>
              <div className="flex gap-4 flex-wrap justify-center">
                <button className="flex items-center gap-2 bg-transparent border border-gray-300 dark:border-[#2a4030] text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-[#1a2c20] px-8 py-3 rounded-lg font-medium transition-colors">
                  <Phone size={18} />
                  0978 509 729
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyDetail;
