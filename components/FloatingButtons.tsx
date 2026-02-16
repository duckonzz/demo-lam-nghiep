import React from 'react';
import { Phone } from 'lucide-react';

// Config contact info tập trung
const CONTACT_INFO = {
  phone: '0978509729',
  zalo: 'https://zalo.me/0978509729',
};

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-[60] flex flex-col gap-4 items-end pointer-events-none">
      {/* Zalo Chat Button */}
      <a
        href={CONTACT_INFO.zalo}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-end pointer-events-auto relative"
        title="Chat qua Zalo"
      >
        <div className="absolute right-full mr-3 px-3 py-1.5 bg-white dark:bg-[#1a2e23] text-blue-600 dark:text-blue-400 text-sm font-bold rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 hidden sm:block">
          Chat Zalo
        </div>
        <div className="relative flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:scale-110 transition-transform">
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-20 animate-ping"></span>
          <span className="text-white font-black text-xs">Zalo</span>
        </div>
      </a>

      {/* Hotline Button */}
      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="group flex items-center justify-end pointer-events-auto relative"
        title="Gọi hotline tư vấn"
      >
        <div className="absolute right-full mr-3 px-3 py-1.5 bg-white dark:bg-[#1a2e23] text-primary dark:text-[#67d07a] text-sm font-bold rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 hidden sm:block">
          Hotline
        </div>
        <div className="relative flex items-center justify-center w-12 h-12 bg-primary dark:bg-[#0b3d20] rounded-full shadow-lg hover:scale-110 transition-transform">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-[#0b3d20] opacity-50 animate-ping"></span>
          <Phone className="text-white dark:text-[#67d07a]" size={24} />
        </div>
      </a>
    </div>
  );
};

export default FloatingButtons;
