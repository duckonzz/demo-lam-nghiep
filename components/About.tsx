import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="gioi-thieu" className="py-20 lg:py-28 bg-background-light overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEx-N6-Cm57WitG7DmfciCveTaPlNrsZcr7yeGiYCwGq4i4tgnQ_QzLgsux1W81nViFi0rvNn-fo4an6ecG3JMl4UcMGu8oKSYJ8ZKWKAMPHACLT0SgUBFrOKYhiGhaB1QO1mIZ1uZH7NyFoobbHWKgfbFq8m8BlXbguD59MogS1Su9zvkiWitzCtRkfBsiqn-LqJV7iXElTtl8TPbdMDdBC4KOZkp0wGWxfrkiKjaOX_RCpAVl-dgz9CqBpX5pTnUrwqXT83ZagI" 
                alt="Scientist in lab" 
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-primary flex items-center gap-3 max-w-[200px]">
                <span className="text-3xl font-black text-primary">10+</span>
                <span className="text-xs font-semibold text-gray-700">Năm kinh nghiệm trong ngành</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Về Chúng Tôi</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Tiên phong trong công nghệ <br />
                <span className="relative inline-block mt-1">
                  giống cây trồng
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/30 -z-10 rounded-sm"></span>
                </span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Chúng tôi tự hào là đơn vị hàng đầu trong lĩnh vực nghiên cứu và phát triển giống cây lâm nghiệp bằng công nghệ nuôi cấy mô hiện đại. Với đội ngũ kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang đến những giống cây khỏe mạnh, sạch bệnh và năng suất cao nhất.
            </p>

            <ul className="space-y-4 mt-2">
              {[
                "Công nghệ nuôi cấy mô tiên tiến nhất hiện nay.",
                "Đội ngũ chuyên gia nông nghiệp đầu ngành tư vấn.",
                "Hỗ trợ kỹ thuật canh tác trọn đời cho khách hàng."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} weight="fill" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button className="flex items-center gap-2 text-primary-foreground font-bold hover:gap-4 transition-all group">
                Tìm hiểu thêm về chúng tôi
                <ArrowRight size={20} className="group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;