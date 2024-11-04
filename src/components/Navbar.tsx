import React, { useState } from 'react';
import { Menu as MenuIcon, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (sectionId: string) => {
    if (!isHome) {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition">
              ホーム
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition">
              メニュー
            </Link>
            <button
              onClick={() => handleNavClick('about')}
              className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition"
            >
              私たちについて
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition"
            >
              お問い合わせ
            </button>
            <a
              href="https://store.shinoya.co/collections"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
            >
              <ExternalLink className="h-4 w-4" />
              <span>オンラインショップ</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-800"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/"
              className="block text-gray-700 hover:text-green-800 px-3 py-2 text-base font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              ホーム
            </Link>
            <Link
              to="/menu"
              className="block text-gray-700 hover:text-green-800 px-3 py-2 text-base font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              メニュー
            </Link>
            <button
              onClick={() => handleNavClick('about')}
              className="w-full text-left text-gray-700 hover:text-green-800 px-3 py-2 text-base font-medium transition"
            >
              私たちについて
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left text-gray-700 hover:text-green-800 px-3 py-2 text-base font-medium transition"
            >
              お問い合わせ
            </button>
            <a
              href="https://store.shinoya.co/collections"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-1 bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
            >
              <ExternalLink className="h-4 w-4" />
              <span>オンラインショップ</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}