import React, { useState } from 'react';
import { Search, FlaskConical, Sprout, Truck, ArrowRight } from 'lucide-react';
import TechnologyDetail from './TechnologyDetail';

const Process: React.FC = () => {
  const [showTechDetail, setShowTechDetail] = useState(false);
  const steps = [
    {
      icon: <Search size={24} />,
      title: '1. Chọn giống gốc',
      desc: 'Tuyển chọn cây mẹ ưu việt (cây đầu dòng) có gen tốt, sạch bệnh và khả năng sinh trưởng mạnh mẽ.',
    },
    {
      icon: <FlaskConical size={24} />,
      title: '2. Nuôi cấy mô',
      desc: 'Nhân giống trong môi trường vô trùng tại phòng Lab hiện đại, đảm bảo độ đồng đều 100%.',
    },
    {
      icon: <Sprout size={24} />,
      title: '3. Thuần dưỡng',
      desc: 'Đưa cây ra nhà lưới để thích nghi dần với điều kiện tự nhiên, giúp cây cứng cáp.',
    },
    {
      icon: <Truck size={24} />,
      title: '4. Xuất vườn',
      desc: 'Kiểm định chất lượng lần cuối, đóng gói quy chuẩn và vận chuyển đến khách hàng.',
    },
  ];

  return (
    <section id="quy-trinh" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="md:w-1/3 flex flex-col justify-start pt-4">
            <span className="text-primary text-sm font-bold uppercase tracking-wider mb-3">
              Quy trình khép kín
            </span>
            <h2 className="text-slate-900 text-3xl font-bold leading-tight mb-4">
              Quy trình sản xuất chuẩn khoa học
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Mỗi cây giống đều trải qua quy trình kiểm soát nghiêm ngặt từ
              phòng thí nghiệm đến vườn ươm để đảm bảo chất lượng đồng nhất.
            </p>
            <div className="mt-8">
              <button
                onClick={() => setShowTechDetail(true)}
                className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors"
              >
                <span>Tìm hiểu chi tiết công nghệ</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-[56px_1fr] gap-x-6 relative">
              {/* Vertical Line */}
              <div className="absolute left-[28px] top-4 bottom-12 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>

              {steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="relative z-10 flex flex-col items-center pt-2 pb-10">
                    <div
                      className={`flex items-center justify-center size-14 rounded-full border-2 shadow-sm ${
                        idx === 0
                          ? 'bg-white border-primary text-primary'
                          : 'bg-white border-gray-200 text-slate-700'
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <div
                    className={`flex flex-col pt-3 pb-10 ${
                      idx !== steps.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <h3 className="text-slate-900 text-lg font-bold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Detail Modal */}
      <TechnologyDetail
        isOpen={showTechDetail}
        onClose={() => setShowTechDetail(false)}
      />
    </section>
  );
};

export default Process;
