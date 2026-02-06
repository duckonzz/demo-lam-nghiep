import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trees, Menu, X } from 'lucide-react';
import { smoothScrollToElement } from '../utils/scrollUtils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Giới thiệu', href: '#gioi-thieu' },
    { name: 'Sản phẩm', href: '#san-pham' },
    { name: 'Quy trình', href: '#quy-trinh' },
    { name: 'Liên hệ', href: '#lien-he' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm py-2'
          : 'bg-white/95 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="text-primary flex items-center justify-center">
              <Trees size={32} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight uppercase hidden md:block">
                Lâm Nghiệp Giống Cây Trồng
              </h1>
              <span className="text-xs text-gray-500 font-medium hidden md:block">
                Uy tín - Chất lượng - Bền vững
              </span>
              <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight uppercase md:hidden">
                LNGCT
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith('#') ? (
                <button
                  key={link.name}
                  onClick={() => smoothScrollToElement(link.href.slice(1))}
                  className="text-slate-700 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wide"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-slate-700 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => smoothScrollToElement('lien-he')}
              className="hidden sm:flex items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-bold transition-all shadow-sm transform hover:-translate-y-0.5"
            >
              Liên hệ ngay
            </button>
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  smoothScrollToElement('lien-he');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center rounded-lg h-12 bg-primary text-primary-foreground font-bold"
              >
                Liên hệ ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
