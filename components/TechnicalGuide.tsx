import React, { useState } from 'react';
import {
  TreePine,
  Sprout,
  Droplets,
  Bug,
  Share2,
  Download,
  ChevronRight,
  AlertTriangle,
  Trees,
  Flower,
  Leaf as LeafIcon,
  GraduationCap,
  CheckCircle,
  Scissors, // Icon cho phần chăm sóc
} from 'lucide-react';
import Footer from './Footer';

// [CẬP NHẬT] Thêm dữ liệu careTimeline cho Bước 4
const treeData = {
  name: 'Kỹ thuật Trồng Rừng Bền Vững',
  updatedAt: '25/10/2023',
  steps: [
    {
      id: 'step-1',
      title: 'Chuẩn bị đất trồng',
      icon: Sprout,
      content:
        'Khâu xử lý thực bì và làm đất quyết định 40% tỷ lệ sống của cây con. Cần tiến hành trước khi trồng ít nhất 15-20 ngày để đất được ải và diệt trừ mầm bệnh.',
      checklist: [
        {
          label: 'Kích thước hố:',
          value: '30 x 30 x 30 cm hoặc 40 x 40 x 40 cm tùy độ dốc.',
        },
        {
          label: 'Xử lý thực bì:',
          value: 'Phát dọn toàn diện, không đốt thực bì để bảo vệ mùn.',
        },
        {
          label: 'Bón lót:',
          value: 'Trộn đều lớp đất mặt với 200g phân vi sinh/hố.',
        },
      ],
      note: 'Lưu ý: Với đất dốc > 15 độ, cần thiết kế đường đồng mức để chống xói mòn.',
    },
    {
      id: 'step-2',
      title: 'Mật độ trồng',
      icon: TreePine,
      content:
        'Mật độ trồng phụ thuộc vào mục đích kinh doanh (gỗ nhỏ hay gỗ lớn) và điều kiện lập địa.',
      table: [
        {
          purpose: 'Gỗ dăm (Nguyên liệu giấy)',
          density: '1,660',
          distance: '3 x 2 m',
          note: 'Thu hoạch sau 5-6 năm',
        },
        {
          purpose: 'Gỗ xẻ (Gỗ lớn)',
          density: '1,110',
          distance: '3 x 3 m',
          note: 'Tỉa thưa vào năm 3 và 5',
        },
        {
          purpose: 'Vùng đất xấu, dốc cao',
          density: '2,000',
          distance: '2.5 x 2 m',
          note: 'Tăng độ che phủ, giữ đất',
        },
      ],
    },
    {
      id: 'step-3',
      title: 'Kỹ thuật bón phân',
      icon: Droplets,
      cards: [
        {
          title: 'Bón lót',
          time: 'Thực hiện ngay khi lấp hố trồng.',
          detail: [
            { l: 'NPK (5:10:3):', v: '200g' },
            { l: 'Vi sinh:', v: '300g' },
          ],
          color: 'bg-green-100 text-green-700',
          icon: 'compost',
        },
        {
          title: 'Bón thúc năm 1',
          time: 'Sau trồng 1-2 tháng khi cây bén rễ.',
          detail: [
            { l: 'NPK (16:16:8):', v: '100g' },
            { l: 'Cách gốc:', v: '20cm' },
          ],
          color: 'bg-blue-100 text-blue-700',
          icon: 'water_drop',
        },
        {
          title: 'Bón thúc năm 2',
          time: 'Vào đầu mùa mưa năm thứ 2.',
          detail: [
            { l: 'NPK tổng hợp:', v: '200g' },
            { l: 'Xới vun:', v: 'Có' },
          ],
          color: 'bg-orange-100 text-orange-700',
          icon: 'upgrade',
        },
      ],
    },
    {
      id: 'step-4',
      title: 'Chăm sóc & Phòng trừ sâu bệnh',
      icon: Bug,
      // [MỚI] Dữ liệu timeline chăm sóc
      careTimeline: [
        {
          year: 'Năm thứ 1',
          task: 'Chăm sóc 2-3 lần. Phát dọn thực bì xâm lấn, xới đất quanh gốc đường kính 0.8m.',
          color: 'bg-primary',
        },
        {
          year: 'Năm thứ 2',
          task: 'Chăm sóc 2 lần. Trồng dặm cây chết vào đầu mùa mưa. Tỉa cành tạo dáng cây thẳng.',
          color: 'bg-primary/60',
        },
        {
          year: 'Năm thứ 3',
          task: 'Chăm sóc 1 lần. Phát luỗng dây leo, cây bụi. Bảo vệ rừng khỏi cháy.',
          color: 'bg-primary/30',
        },
      ],
      issues: [
        {
          name: 'Bệnh Phấn trắng',
          risk: 'Nguy hiểm',
          symptom: 'Lá phủ lớp bột trắng, xoăn lại.',
          fix: 'Phun dung dịch Booc-đô 1% hoặc Tilt super.',
        },
        {
          name: 'Mối ăn rễ',
          risk: 'Thường gặp',
          symptom: 'Cây con héo rũ bất thường.',
          fix: 'Vệ sinh hố sạch, dùng thuốc Termosant.',
        },
      ],
    },
  ],
};

const TechnicalGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState('step-1');

  const scrollToStep = (id: string) => {
    setActiveStep(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background-light min-h-screen font-display text-text-main antialiased">
      <div className="max-w-[1440px] mx-auto flex min-h-screen pt-6 pb-20 px-4 sm:px-6 lg:px-8 gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 self-start sticky top-24">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h3 className="font-bold text-lg text-text-main mb-1">
                Danh mục loài cây
              </h3>
              <p className="text-text-secondary text-sm">
                Hướng dẫn kỹ thuật chi tiết
              </p>
            </div>
            <nav className="p-3 space-y-1">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/10 text-primary-dark font-semibold border-l-4 border-primary"
              >
                <TreePine size={20} /> Keo Lai
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-main hover:bg-gray-50 transition-colors"
              >
                <Trees size={20} className="text-text-secondary" /> Bạch Đàn
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-main hover:bg-gray-50 transition-colors"
              >
                <Flower size={20} className="text-text-secondary" /> Keo Tai
                Tượng
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-main hover:bg-gray-50 transition-colors"
              >
                <LeafIcon size={20} className="text-text-secondary" /> Giống Bản
                Địa
              </a>
            </nav>
            <div className="p-4 mt-2">
              <div className="bg-[#f0fdf4] rounded-lg p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-2 text-green-800 font-semibold text-sm">
                  <GraduationCap size={18} /> Góc chuyên gia
                </div>
                <p className="text-xs text-green-700 leading-relaxed mb-3">
                  Cần tư vấn về thổ nhưỡng đặc thù?
                </p>
                <button className="w-full bg-white border border-green-200 text-green-700 text-xs font-bold py-2 rounded shadow-sm hover:bg-green-50 transition-colors">
                  Đặt câu hỏi
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img
                src="https://i.pinimg.com/1200x/8e/53/b0/8e53b0e95db218533528d962a6d329b0.jpg"
                alt="Background"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <span className="bg-primary/20 text-primary-dark px-2 py-1 rounded text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                Cập nhật: {treeData.updatedAt}
              </span>
              <h1 className="text-3xl font-black text-text-main mb-4">
                {treeData.name}
              </h1>
              <p className="text-text-secondary text-lg">
                Hướng dẫn chuẩn hóa quy trình trồng để đạt năng suất tối đa.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {treeData.steps.map((step, index) => (
              <section
                key={step.id}
                id={step.id}
                className="scroll-mt-24 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Step Header */}
                <div className="flex items-center gap-4 p-6 md:p-8 pb-0">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary text-white font-bold text-xl step-circle">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl font-bold text-text-main">
                    {step.title}
                  </h2>
                </div>

                <div className="p-6 md:p-8 pt-6">
                  {step.content && (
                    <p className="text-text-main leading-relaxed mb-6">
                      {step.content}
                    </p>
                  )}

                  {/* Step 1: Checklist */}
                  {step.checklist && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <ul className="space-y-3">
                        {step.checklist.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle
                              size={20}
                              className="text-primary mt-0.5"
                            />
                            <div>
                              <span className="font-bold">{item.label}</span>{' '}
                              <span className="text-text-secondary">
                                {item.value}
                              </span>
                            </div>
                          </li>
                        ))}
                        {step.note && (
                          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 flex gap-3 mt-4">
                            <AlertTriangle
                              size={20}
                              className="text-yellow-600 shrink-0"
                            />
                            <p className="text-sm text-yellow-800">
                              <strong>Lưu ý:</strong>{' '}
                              {step.note.replace('Lưu ý:', '')}
                            </p>
                          </div>
                        )}
                      </ul>
                      <div className="h-48 md:h-auto rounded-lg overflow-hidden relative">
                        <img
                          src="https://i.pinimg.com/1200x/12/00/70/120070c120b7a975c431654dc22c0701.jpg"
                          alt="Soil"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Table */}
                  {step.table && (
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-background-light uppercase text-text-secondary font-bold text-xs">
                          <tr>
                            <th className="px-6 py-4">Mục đích</th>
                            <th className="px-6 py-4">Mật độ</th>
                            <th className="px-6 py-4">Cự ly</th>
                            <th className="px-6 py-4">Ghi chú</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {step.table.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-medium">
                                {row.purpose}
                              </td>
                              <td className="px-6 py-4 text-primary-dark font-bold">
                                {row.density}
                              </td>
                              <td className="px-6 py-4">{row.distance}</td>
                              <td className="px-6 py-4 text-text-secondary">
                                {row.note}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Step 3: Cards */}
                  {step.cards && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {step.cards.map((card, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform"
                        >
                          <div
                            className={`${card.color} p-3 rounded-lg mb-4 w-fit`}
                          >
                            <Droplets size={32} />
                          </div>
                          <h3 className="text-lg font-bold mb-2">
                            {card.title}
                          </h3>
                          <p className="text-sm text-text-secondary mb-4">
                            {card.time}
                          </p>
                          <div className="w-full bg-background-light rounded p-3 text-sm border border-gray-100">
                            {card.detail.map((d, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between mb-1"
                              >
                                <span>{d.l}</span>
                                <span className="font-bold">{d.v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* [QUAN TRỌNG] Step 4: Split Layout (Timeline + Issues) */}
                  {step.careTimeline && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 -mx-6 -mb-8 md:-mx-8">
                      {/* Cột Trái: Chăm sóc rừng (Timeline) */}
                      <div className="p-8 border-t md:border-t-0 md:border-r border-gray-100">
                        <h3 className="flex items-center gap-2 text-xl font-bold text-text-main mb-6">
                          <Scissors className="text-primary" size={24} /> Chăm
                          sóc rừng
                        </h3>
                        <div className="space-y-6">
                          {step.careTimeline.map((item, i) => (
                            <div key={i} className="flex gap-4">
                              <div className="flex-none pt-1">
                                <div
                                  className={`size-3 rounded-full ${item.color}`}
                                ></div>
                              </div>
                              <div>
                                <h4 className="font-bold text-text-main text-sm uppercase mb-1">
                                  {item.year}
                                </h4>
                                <p className="text-sm text-text-secondary">
                                  {item.task}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cột Phải: Sâu bệnh (Issues) */}
                      <div className="p-8 bg-background-light/50">
                        <h3 className="flex items-center gap-2 text-xl font-bold text-text-main mb-6">
                          <Bug className="text-red-500" size={24} /> Phòng trừ
                          sâu bệnh
                        </h3>
                        <div className="space-y-4">
                          {step.issues?.map((issue, i) => (
                            <div
                              key={i}
                              className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-text-main">
                                  {issue.name}
                                </h4>
                                <span
                                  className={`text-xs px-2 py-0.5 rounded font-bold ${
                                    issue.risk === 'Nguy hiểm'
                                      ? 'bg-red-100 text-red-800'
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}
                                >
                                  {issue.risk}
                                </span>
                              </div>
                              <p className="text-sm text-text-secondary mb-2">
                                {issue.symptom}
                              </p>
                              <div className="text-xs font-semibold text-primary-dark bg-primary/5 px-2 py-1 rounded inline-block">
                                Xử lý: {issue.fix}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* CTA Footer */}
            <div className="bg-primary/10 rounded-2xl p-8 text-center border border-primary/20">
              <h3 className="text-2xl font-bold text-text-main mb-3">
                Bạn cần tư vấn chi tiết hơn?
              </h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                Đội ngũ kỹ thuật của GreenForestry luôn sẵn sàng hỗ trợ bà con
                trong mọi giai đoạn canh tác.
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Liên hệ Kỹ thuật viên
                </button>
                <button className="bg-white text-text-main border border-gray-200 font-bold py-3 px-8 rounded-lg hover:bg-gray-50 transition-all">
                  Xem dự án mẫu
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default TechnicalGuide;
