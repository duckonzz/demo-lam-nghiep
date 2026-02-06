import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { openZaloChat } from '../utils/scrollUtils';

const FloatingButtons: React.FC = () => {
  const handleCallHotline = () => {
    window.location.href = 'tel:0978509729';
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40 pointer-events-none">
      {/* Hotline Button */}
      <button
        onClick={handleCallHotline}
        className="pointer-events-auto flex items-center justify-center gap-2 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-110 active:scale-95 group relative"
        title="Gọi hotline tư vấn"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-3 bg-green-500 text-white px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
          Hotline
        </span>
      </button>

      {/* Zalo Chat Button */}
      <button
        onClick={() => openZaloChat('0978509729')}
        className="pointer-events-auto flex items-center justify-center gap-2 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50 transition-all transform hover:scale-110 active:scale-95 group relative"
        title="Chat qua Zalo"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-3 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
          Chat Zalo
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;
