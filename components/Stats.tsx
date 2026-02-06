import React from 'react';
import { ShieldCheck, Trees, TrendingUp } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <ShieldCheck size={32} />,
      value: "15+",
      label: "Năm kinh nghiệm"
    },
    {
      icon: <Trees size={32} />,
      value: "5 Triệu+",
      label: "Cây giống xuất xưởng/năm"
    },
    {
      icon: <TrendingUp size={32} />,
      value: "98%",
      label: "Tỷ lệ cây sống"
    }
  ];

  return (
    <section className="py-16 bg-background-light border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary">
                {stat.icon}
              </div>
              <p className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-slate-900">
                {stat.value}
              </p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;