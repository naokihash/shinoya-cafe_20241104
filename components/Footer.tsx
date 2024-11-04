import React from 'react';
import Logo from './Logo';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="inline-block">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-white rounded-full p-0.5">
                  <div className="h-full w-full bg-green-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">鮮直</span>
                  </div>
                </div>
                <span className="ml-2 text-lg font-semibold text-white">しのやカフェ</span>
              </div>
            </div>
            <p className="text-gray-400">
              福島の豊かな食材を活かした料理をお届けします。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">メニュー</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-400 transition">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-green-400 transition">
                  メニュー
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 transition">
                  私たちについて
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-400 transition">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">営業時間</h3>
            <ul className="space-y-2 text-gray-400">
              <li>月曜日 - 日曜日: 10:00 - 18:00</li>
              <li>年中無休</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">公式LINE</h3>
            <p className="text-gray-400 mb-4">
              最新情報やお得な情報をLINEでお届けします。
            </p>
            <a
              href="https://page.line.me/032cssbh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#06C755] text-white px-6 py-3 rounded-lg hover:bg-[#05b54c] transition"
            >
              <MessageCircle className="h-5 w-5" />
              <span>友だち追加</span>
            </a>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/syokuzai_shinoya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-green-400 transition"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} しのやカフェ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}