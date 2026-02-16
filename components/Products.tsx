import React from 'react';
import { ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      title: "Keo lai mô (Hybrid Acacia)",
      image: "https://th.bing.com/th/id/R.afb1fd1f3bca0eec35c2b904a20b5db8?rik=XDieyz4BXZpECw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-ri9_k6orCSI%2fVeUObg2Nc8I%2fAAAAAAAAxVU%2fdM_2fTlvy_M%2fs1600%2fIMG_0841.JPG&ehk=YtpI6p9m1P2dEJo2fADVH9t4txmRRSNA52R82657CJM%3d&risl=&pid=ImgRaw&r=0",
      details: ["Chiều cao: 25-30cm", "Tuổi cây: 3-4 tháng", "Đặc tính: Sinh trưởng nhanh"],
      bestSeller: true
    },
    {
      title: "Bạch đàn mô (Eucalyptus)",
      image: "https://lamnghiepbinhthuan.com/Uploads/images/VuonUom/t1.jpg",
      details: ["Dòng vô tính: U6, PN14", "Khả năng kháng bệnh tốt", "Năng suất gỗ cao"],
      bestSeller: true
    },
    {
      title: "Cây giống lâm nghiệp khác",
      image: "https://hdvn.vn/uploads/images/giong-cay/cay-cong-trinh/sao-den/cay-sao-den-giong.jpg",
      details: ["Đa dạng chủng loại", "Tư vấn kỹ thuật trồng", "Cung cấp số lượng lớn"],
      bestSeller: false
    }
  ];

  return (
    <section id="san-pham" className="py-20 lg:py-24 bg-background-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Sản phẩm chất lượng cao</span>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold leading-tight mb-4">Danh mục sản phẩm cây giống</h2>
          <p className="text-gray-600 mt-2 max-w-2xl text-base">
            Chúng tôi cung cấp các giống cây lâm nghiệp được tuyển chọn kỹ lưỡng, sạch bệnh và có tỷ lệ sống cao, phù hợp với khí hậu Việt Nam.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="flex flex-col group rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="w-full h-64 overflow-hidden relative">
                <div 
                  className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${product.image}')` }}
                ></div>
                {product.bestSeller && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Bán chạy
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-slate-900 text-xl font-bold mb-3">{product.title}</h3>
                  <div className="space-y-1">
                    {product.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-gray-500 text-sm">• {detail}</p>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-5 border-t border-gray-100">
                  <button className="w-full flex items-center justify-center gap-2 h-10 rounded-lg bg-gray-50 text-slate-900 font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors group/btn">
                    <span>Liên hệ tư vấn</span>
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;