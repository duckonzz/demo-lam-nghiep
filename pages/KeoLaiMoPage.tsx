import React, { useState } from 'react';
import {
  Phone,
  Headset,
  ShieldCheck,
  Zap,
  Mountain,
  Shield,
  CheckCircle,
  Truck,
  Trees,
  Leaf,
  Ruler,
  Calendar,
  Check,
  ChevronRight,
} from 'lucide-react';
import Footer from '@/components/Footer';

// ==================== TYPES ====================
type TabType = 'details' | 'guide' | 'warranty';

interface RelatedProduct {
  id: number;
  name: string;
  description: string;
  image: string;
}

// ==================== COMPONENTS ====================

// Product Image Gallery
const ProductImageGallery: React.FC = () => {
  const [mainImage, setMainImage] = useState(0);

  const images = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9erV0--81_Y37jSzuRuszXjLg2VlQ6OTEZY3lVXnaS7odawry7JYAgWaE01Iz1UBaUqUL26VSQicOAfmK9UAKTICSHYFuCOdCU3d7VNNOpHv59kivhcfmePbDSzvbbEh7KKG9Kb3ELVpN3NWNmXi0ZP6w2uKucZBo56ma6IKhfaoRE4fB9qdvylrZ-Jc3BSVL01fkDhPDkBuK_l8f0IgqJA6dAXwll1IqAesn7e4WmcAohomyBuqhfDvsZ9kX1uIV0i-PScD9Li8',
      alt: 'Healthy young acacia seedlings in a nursery tray with sunlight',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANGjHpM1gadNfsfWU-CKChkYHjsNWFcVFXTZFNppONbBJuxq1gXhqGy3cjp7dULvlJ1nkVaynlzlradRkl8kRm1a27M52SWZsZVyWmBWoOl19CDFXzSpAk1DzVruQGHWNdXUavcN_Uf-mqM6O7J-aWcwNqewdAxOxREUDUOPld7WXa8iFBSW-R-Nivcri7iI57wq_VfBK1LEfv87-KTQdamx2G1_IZrx0adDvklHQ9furA_Xzp4BIdHNGTY_xQGnrTlpfx-id8VbA',
      alt: 'Closeup of acacia seedling leaves',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA06gJnDWBbH6kxV40mP0Da7vHqsQ6isK8WtQZ0Vb3OKi16QHvkVPrj5ogcs7PK17Cx5y4X5ZcqG5pJ8xUqwoNQRq5U6J47G-4DTGWCmOVnfaTSAKvbi0AJQu99Btlqgojzw3e5XY24Lidq697dDp89XQoGygJn8IqVQsKsxn3o75ShhvpZE2hErvXz6GeAfVn_BL0Tmjx-Pz434bWvWAYK3GclRVtufGuNGldy5WVM35gdU20Vf88v67pPE1WxahhSePAh8cJRI8c',
      alt: 'Rows of acacia plants in a greenhouse',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn3FEOc_be3_jWAa3p7IiFGCN8VmWsNevjjuLH3Ih3ZIzu1d9EdgVtoUrPywo3fGwQnviZ1A6Bon3pMeOSpl9JoQtAFhZxWYe0x8OR3WciC-SqfcBj70bMoOfwFYtQ6O3J2jLQ-LR-Bi87jTdxeqoqrym78Q2zyeQecQtcTqIw1rSQB8N8XlVhAAb8gm3Pyyrn5McLFWCdloMv1P89b2x5ZEMJcHjWJhEcbA0drKk0BQWAO_B41gWiK-Srmek_8DXeicECuH69cxU',
      alt: 'Hands holding a healthy seedling showing roots',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRicm_29wnvYX5notA1WLqrcllw__zWQnWAyawBBJ8x2XLKOr-4bmoMlm18wKlCIm1pPAk8_gTl4d-cM9uoY42y_CykzSbcVyFDz2UPUZQK_jkiTHK8dSIY9Fy05xMQ8j3OkjybFRH55jlaKyQNe3uFZAZC_7bjI_NKj5eIWqfln2xKU2xnJ4PgvubTrufoCdEqOoMQphbN1m5lrSuoHUXfq4j3v5iJNa82AtHs8ppMAsTuw-Iey4PF5y4s-og3gVaxVduJNFED8M',
      alt: 'Acacia plantation forest landscape',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative group">
        <div className="absolute top-4 left-4 bg-primary text-text-main text-xs font-bold px-3 py-1 rounded-full z-10">
          Bán chạy nhất
        </div>
        <img
          alt={images[mainImage].alt}
          src={images[mainImage].src}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setMainImage(idx)}
            className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
              idx === mainImage
                ? 'border-2 border-primary'
                : 'hover:opacity-80 border-2 border-transparent'
            }`}
          >
            <img
              alt={image.alt}
              src={image.src}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Tech Specs */}
      <div className="bg-white dark:bg-[#1a2e22] rounded-xl p-6 shadow-sm border border-[#eef2f0] dark:border-[#2a3e32]">
        <h3 className="text-lg font-bold mb-4 text-text-main dark:text-white flex items-center gap-2">
          <ShieldCheck size={20} className="text-primary" />
          Thông số kỹ thuật nổi bật
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
              <Zap size={20} />
            </div>
            <h4 className="font-bold text-text-main dark:text-white">
              Sinh trưởng
            </h4>
            <p className="text-sm text-text-sub">
              Tăng trưởng nhanh hơn 1.5 lần so với giống thường
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
              <Shield size={20} />
            </div>
            <h4 className="font-bold text-text-main dark:text-white">
              Kháng bệnh
            </h4>
            <p className="text-sm text-text-sub">
              Chống chịu tốt với nấm hồng, mối và sâu bệnh
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
              <Mountain size={20} />
            </div>
            <h4 className="font-bold text-text-main dark:text-white">
              Thích ứng
            </h4>
            <p className="text-sm text-text-sub">
              Phát triển tốt trên đất đồi, đất nghèo dinh dưỡng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Purchase Card with Pricing
const PurchaseCard: React.FC = () => {
  return (
    <div className="sticky top-24 flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-bold px-2.5 py-0.5 rounded border border-green-200 dark:border-green-800">
            Còn hàng
          </span>
          <span className="text-text-sub text-sm">Mã SP: KL-MO-01</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-text-main dark:text-white leading-tight mb-3">
          Giống Keo Lai Mô <br />
          <span className="text-primary">Siêu Năng Suất</span>
        </h1>
        <p className="text-text-sub text-base leading-relaxed">
          Cây giống được nhân bản bằng công nghệ nuôi cấy mô tiên tiến. Đảm bảo
          100% cây sạch bệnh, bộ rễ cọc phát triển mạnh, hạn chế tối đa hiện
          tượng đổ ngã do gió bão.
        </p>
      </div>

      <div className="p-5 bg-white dark:bg-[#1a2e22] rounded-xl border border-[#eef2f0] dark:border-[#2a3e32] shadow-sm">
        <div className="flex items-baseline justify-between mb-4 border-b border-[#f0f4f2] dark:border-[#2a3e32] pb-4">
          <span className="text-text-sub font-medium">Giá bán lẻ</span>
          <span className="text-2xl font-bold text-text-main dark:text-white">
            Liên hệ
          </span>
        </div>
        <div className="flex items-baseline justify-between mb-6">
          <div className="flex flex-col">
            <span className="text-text-sub font-medium">
              Giá số lượng lớn (&gt;1 vạn cây)
            </span>
            <span className="text-xs text-primary font-medium">
              Tiết kiệm tới 15%
            </span>
          </div>
          <span className="text-xl font-bold text-primary">Giá ưu đãi</span>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-text-main font-bold py-3.5 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform active:scale-[0.98]">
            <Phone size={18} />
            Liên hệ báo giá ngay
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-[#2a3e32] border border-[#d1d5db] dark:border-[#4a5e52] hover:bg-gray-50 dark:hover:bg-[#3a4e42] text-text-main dark:text-white font-bold py-3.5 px-6 rounded-lg transition-all">
            <Headset size={18} />
            Tư vấn kỹ thuật trồng
          </button>
        </div>
        <div className="mt-4 pt-4 border-t border-[#f0f4f2] dark:border-[#2a3e32] flex items-center justify-center gap-6 text-sm text-text-sub">
          <div className="flex items-center gap-1.5">
            <CheckCircle size={18} className="text-green-600" />
            <span>Giống chuẩn 100%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Truck size={18} className="text-green-600" />
            <span>Giao toàn quốc</span>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-white dark:bg-[#1a2e22] rounded-xl border border-[#eef2f0] dark:border-[#2a3e32] overflow-hidden">
        <div className="p-4 border-b border-[#f0f4f2] dark:border-[#2a3e32]">
          <h3 className="font-bold text-text-main dark:text-white">
            Đặc điểm sinh học
          </h3>
          <ul className="mt-2 space-y-2 text-sm text-text-sub">
            <li className="flex items-start gap-2">
              <Leaf size={18} className="text-primary mt-0.5 shrink-0" />
              <span>Thân thẳng, cành nhánh nhỏ, tự tỉa cành tốt.</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf size={18} className="text-primary mt-0.5 shrink-0" />
              <span>Rễ cọc phát triển sâu, chịu hạn tốt hơn keo giâm hom.</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf size={18} className="text-primary mt-0.5 shrink-0" />
              <span>Chiều cao trung bình 5 năm đạt 18-22m.</span>
            </li>
          </ul>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-[#15201a]">
          <h3 className="font-bold text-text-main dark:text-white mb-2">
            Hiệu quả kinh tế
          </h3>
          <p className="text-sm text-text-sub mb-2">
            Rút ngắn chu kỳ khai thác xuống còn 5-6 năm. Năng suất gỗ đạt
            200-250 tấn/ha.
          </p>
          <a
            href="#"
            className="text-primary text-sm font-bold hover:underline inline-flex items-center gap-1"
          >
            Xem bảng tính chi tiết <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

// Tab Navigation & Content
interface TabContentProps {
  activeTab: TabType;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  if (activeTab === 'details') {
    return (
      <div className="prose prose-slate dark:prose-invert max-w-none text-text-main dark:text-gray-300">
        <h3 className="text-2xl font-bold mb-4">
          Tại sao nên chọn Giống Keo Lai Mô Vũ Hà?
        </h3>
        <p className="mb-4 text-text-sub">
          Keo lai mô là bước đột phá trong công nghệ giống lâm nghiệp. Khác với
          phương pháp giâm hom truyền thống, công nghệ nuôi cấy mô giúp loại bỏ
          hoàn toàn các mầm bệnh từ cây mẹ, tạo ra thế hệ cây con đồng đều về
          mặt di truyền và có sức sống vượt trội.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 dark:bg-[#1a2e22] p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-2 text-text-main dark:text-white">
              Ưu điểm vượt trội
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-text-sub">
                <Check size={20} className="text-green-500 shrink-0" />
                Không bị rỗng ruột khi khai thác
              </li>
              <li className="flex items-center gap-2 text-sm text-text-sub">
                <Check size={20} className="text-green-500 shrink-0" />
                Tỷ lệ sống khi trồng rừng &gt;95%
              </li>
              <li className="flex items-center gap-2 text-sm text-text-sub">
                <Check size={20} className="text-green-500 shrink-0" />
                Đồng đều cao, dễ chăm sóc đồng loạt
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-[#1a2e22] p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-2 text-text-main dark:text-white">
              Quy chuẩn xuất vườn
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-text-sub">
                <Ruler size={20} className="text-primary shrink-0" />
                Chiều cao: 25cm - 35cm
              </li>
              <li className="flex items-center gap-2 text-sm text-text-sub">
                <Leaf size={20} className="text-primary shrink-0" />
                Đường kính cổ rễ: &gt; 2.5mm
              </li>
              <li className="flex items-center gap-2 text-sm text-text-sub">
                <Calendar size={20} className="text-primary shrink-0" />
                Tuổi cây: 3-4 tháng
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4">So sánh hiệu quả kinh tế</h3>
        <div className="overflow-x-auto rounded-lg border border-[#eef2f0] dark:border-[#2a3e32]">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 dark:bg-[#15201a] text-text-main dark:text-white font-bold uppercase">
              <tr>
                <th className="px-6 py-4">Tiêu chí</th>
                <th className="px-6 py-4 text-primary">Keo Lai Mô</th>
                <th className="px-6 py-4 text-gray-500">Keo Giâm Hom</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eef2f0] dark:divide-[#2a3e32]">
              <tr className="bg-white dark:bg-[#1a2e22]">
                <td className="px-6 py-4 font-medium">Chu kỳ khai thác</td>
                <td className="px-6 py-4 font-bold text-green-700 dark:text-green-400">
                  5 - 6 năm
                </td>
                <td className="px-6 py-4 text-gray-500">7 - 8 năm</td>
              </tr>
              <tr className="bg-white dark:bg-[#1a2e22]">
                <td className="px-6 py-4 font-medium">Năng suất gỗ/ha</td>
                <td className="px-6 py-4 font-bold text-green-700 dark:text-green-400">
                  180 - 220 tấn
                </td>
                <td className="px-6 py-4 text-gray-500">120 - 150 tấn</td>
              </tr>
              <tr className="bg-white dark:bg-[#1a2e22]">
                <td className="px-6 py-4 font-medium">Khả năng chống đổ ngã</td>
                <td className="px-6 py-4 font-bold text-green-700 dark:text-green-400">
                  Rất tốt (Rễ cọc)
                </td>
                <td className="px-6 py-4 text-gray-500">
                  Trung bình (Rễ chùm)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (activeTab === 'guide') {
    return (
      <div className="prose prose-slate dark:prose-invert max-w-none text-text-main dark:text-gray-300">
        <h3 className="text-2xl font-bold mb-4">Hướng dẫn trồng Keo Lai Mô</h3>
        <p className="mb-4 text-text-sub">
          Để đạt được năng suất cao nhất, cần tuân thủ các hướng dẫn kỹ thuật
          sau:
        </p>
        <h4 className="text-lg font-bold mt-6 mb-2">Chuẩn bị đất đai</h4>
        <ul className="space-y-2 mb-4">
          <li>Chọn đất có độ sâu &gt; 60cm, thoáng khí, không úng nước</li>
          <li>Làm đất sâu 30-40cm, bón phân hữu cơ 5-10 tấn/ha</li>
          <li>Đất pH từ 5.5 - 7.5 là tối ưu</li>
        </ul>

        <h4 className="text-lg font-bold mt-6 mb-2">Khoảng cách trồng</h4>
        <ul className="space-y-2 mb-4">
          <li>Trồng dôi: 3m × 2m (khoảng 1.500-1.700 cây/ha)</li>
          <li>Trồng đơn: 4m × 2m (khoảng 1.200-1.300 cây/ha)</li>
        </ul>

        <h4 className="text-lg font-bold mt-6 mb-2">Chăm sóc cây</h4>
        <ul className="space-y-2">
          <li>Tưới nước đầy đủ trong 3 tháng đầu</li>
          <li>Bón lót: NPK 10:10:10, 20kg/ha</li>
          <li>Bón thêm năm thứ 1-3: 50kg urea/ha mỗi năm</li>
          <li>Cắt tỉa cành thấp để có gỗ tròn, ít nút</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none text-text-main dark:text-gray-300">
      <h3 className="text-2xl font-bold mb-4">Chính sách bảo hành</h3>
      <p className="mb-4 text-text-sub">
        Công ty Vũ Hà cam kết chất lượng cây giống với các điều khoản sau:
      </p>

      <h4 className="text-lg font-bold mt-6 mb-2">Thời gian bảo hành</h4>
      <p className="text-text-sub">
        Bảo hành 30 ngày kể từ ngày nhận hàng. Nếu phát hiện cây chết do lỗi
        chất lượng, sẽ hoàn lại tiền hoặc gửi cây thay thế.
      </p>

      <h4 className="text-lg font-bold mt-6 mb-2">Điều kiện bảo hành</h4>
      <ul className="space-y-2 mb-4">
        <li>Cây còn nguyên vẹn, không bị tổn thương cơ học</li>
        <li>Được trồng theo hướng dẫn kỹ thuật</li>
        <li>Có hóa đơn hoặc chứng từ mua hàng</li>
      </ul>

      <h4 className="text-lg font-bold mt-6 mb-2">Không bảo hành khi:</h4>
      <ul className="space-y-2">
        <li>Cây bị chết do chăm sóc không đúng kỹ thuật</li>
        <li>Bị thiên tai, dịch bệnh bất khả kháng</li>
        <li>Quá thời gian bảo hành</li>
      </ul>
    </div>
  );
};

// Related Products
const RelatedProductItem: React.FC<{ product: RelatedProduct }> = ({
  product,
}) => {
  return (
    <a
      href="#"
      className="group flex gap-4 items-start p-3 rounded-lg hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-[#eef2f0] dark:hover:bg-[#1a2e22] dark:hover:border-[#2a3e32]"
    >
      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
        <img
          alt={product.name}
          src={product.image}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-bold text-text-main dark:text-white group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h4>
        <p className="text-xs text-text-sub mt-1">{product.description}</p>
        <span className="text-sm font-bold text-primary mt-1 block">
          Liên hệ
        </span>
      </div>
    </a>
  );
};

// Promo Card
const PromoCard: React.FC = () => {
  return (
    <div className="bg-[#1a2e22] p-6 rounded-xl text-white relative overflow-hidden mt-4">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Trees size={100} />
      </div>
      <h4 className="font-bold text-lg mb-2 relative z-10">
        Cần tư vấn dự án lớn?
      </h4>
      <p className="text-sm text-gray-300 mb-4 relative z-10">
        Chúng tôi cung cấp giải pháp trọn gói từ cây giống đến kỹ thuật trồng
        rừng cho doanh nghiệp.
      </p>
      <button className="w-full bg-primary text-text-main font-bold py-2 rounded relative z-10 hover:bg-white transition-colors">
        Hotline: 0912 345 678
      </button>
    </div>
  );
};

// ==================== MAIN PAGE ====================
const KeoLaiMoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('details');

  const relatedProducts: RelatedProduct[] = [
    {
      id: 1,
      name: 'Bạch Đàn Uro',
      description: 'Năng suất cao, vỏ mỏng',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCxqik7xLuHf0mNI8X2XjdSrGlWev1bTghetFk64EndSljzFM5RvGW-IMTHscsszH9K0m6UGA6eoCegLUX3R835PmJM06LSZ11fUaKaFfjsVriCDI4hJgNL1--TrNBmO1OlSIB-ZChVItPL6WMbpUVb1FFEl_RiPgOET7ruIVUQZwktvR8uyWzFb7gAxzIex5w3GClqPziEnDMXvkaZf4soML9nv4tmBr_Ry8FxG67PMXX0VPCVPtVJAj6HNT5XHbzahfV_sUrjIBo',
    },
    {
      id: 2,
      name: 'Cây Giống Cà Phê TR4',
      description: 'Kháng gỉ sắt, quả to',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAm4Pjzxd7zLUy2-kBGROstSwtOy7R58n44eKKFNTUPB27kmK72G4iPvt8VOVuk3AFQAHq1NbcHXoZ5jOqzXtGzTwnmoYxgmyh-UA2X_v9V4QRzRTx1-vLl2A9Bnc470qfSex-gWbIv4QwcleU06VxSSnGdwgFGFR91hcHl9YOoaxsb0gLyKGLk4OcZOyaVHYF3QML5augEz7hw-eD1UWhmrfsA22Qq7-4SVYbyj2IHc12Rqv4EKrlOq7ZNuAVKJPRVQCk1RUBirNk',
    },
    {
      id: 3,
      name: 'Cây Mắc Ca Ghép',
      description: 'Giống QN1, A38',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDC-5p76ndLxy6G69z6ooymmkZc1WkjcufVJUeFHNjyJMqjAbNe3AhQo-fC1lS7Mx6yGyFd7ktSGerRhHwsCYbjrE073oHiwclHDkTt0qv1YGLrif8_uN52KUOFsY3abayuWqodglH0Uqim66Lo0rljvCm0iju8tQsVL4HowBj2pyPCLiQbI9cssolpAg6gyTV_O6UGCuxdw_muLrnaKnXHbZ0QiKLKJJgqN3tcseWm0WZomFITcpuscb8GcBcQe8DZN4bve1WRoEU',
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 min-h-screen flex flex-col font-body">
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-10 py-6">
        {/* Product Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <ProductImageGallery />
          </div>

          <div className="lg:col-span-5 flex flex-col h-full">
            <PurchaseCard />
          </div>
        </div>

        {/* Detailed Tabs Section */}
        <div className="border-t border-[#f0f4f2] dark:border-[#2a3e32] pt-10 mt-16">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex border-b border-[#eef2f0] dark:border-[#2a3e32] mb-6 overflow-x-auto">
                {[
                  { id: 'details', label: 'Mô tả chi tiết' },
                  { id: 'guide', label: 'Hướng dẫn trồng' },
                  { id: 'warranty', label: 'Chính sách bảo hành' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`px-6 py-3 font-bold whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-text-sub hover:text-text-main'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <TabContent activeTab={activeTab} />
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-80 flex flex-col gap-6 shrink-0">
              <h3 className="text-xl font-bold text-text-main dark:text-white">
                Sản phẩm khác
              </h3>
              <div className="flex flex-col gap-4">
                {relatedProducts.map((product) => (
                  <RelatedProductItem key={product.id} product={product} />
                ))}
              </div>
              <PromoCard />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <meta
        name="description"
        content="Cây giống keo lai mô sạch bệnh, năng suất cao, rút ngắn chu kỳ khai thác 5-6 năm."
      />
    </div>
  );
};

export default KeoLaiMoPage;
