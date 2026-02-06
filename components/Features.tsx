import React from 'react';
import { FlaskConical, TrendingUp, ShieldCheck, Truck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <FlaskConical size={32} />,
      title: "Giống nuôi cấy mô",
      desc: "Quy trình nhân giống vô tính trong phòng thí nghiệm đảm bảo cây con đồng đều về di truyền và sạch bệnh hoàn toàn."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Tỷ lệ sống cao",
      desc: "Cây giống được huấn luyện thích nghi với môi trường tự nhiên trước khi xuất vườn, đảm bảo tỷ lệ sống trên 98%."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Quy trình đạt chuẩn",
      desc: "Mọi khâu từ chọn vật liệu giống đến nuôi cấy và chăm sóc đều tuân thủ nghiêm ngặt các tiêu chuẩn quản lý chất lượng."
    },
    {
      icon: <Truck size={32} />,
      title: "Giao hàng đúng hạn",
      desc: "Hệ thống vận chuyển chuyên nghiệp, đảm bảo cây giống đến tay khách hàng đúng thời điểm mùa vụ và an toàn tuyệt đối."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tại Sao Chọn Chúng Tôi?</h2>
          <p className="text-gray-600 text-lg">
            Chúng tôi không chỉ cung cấp cây giống, chúng tôi cung cấp giải pháp cho sự phát triển bền vững của khu rừng của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-background-light p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;