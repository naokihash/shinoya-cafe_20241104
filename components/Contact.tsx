import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import useWeb3Forms from '@web3forms/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { submit, isSubmitting, isSuccess, error } = useWeb3Forms({
    access_key: import.meta.env.VITE_WEB3FORMS_KEY as string,
    settings: {
      from_name: 'しのやカフェ お問い合わせフォーム',
      subject: 'しのやカフェ 新規お問い合わせ',
      to: 'naoki.hashimoto@krym.jp'
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      if (isSuccess) {
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              お問い合わせありがとうございます
            </h3>
            <p className="text-gray-600 mb-6">
              内容を確認次第、担当者よりご連絡させていただきます。
              しばらくお待ちくださいませ。
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              新しいお問い合わせをする
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ご予約・お問い合わせはお気軽にご連絡ください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">店舗情報</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-green-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">住所</p>
                  <p className="text-gray-600">〒963-8835</p>
                  <p className="text-gray-600">福島県郡山市小関谷地23-1</p>
                  <p className="text-gray-600">Bakeryいずみがもり桑野店内</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-green-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">電話番号</p>
                  <p className="text-gray-600">024-954-8339</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-green-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">営業時間</p>
                  <p className="text-gray-600">10:00～18:00</p>
                  <p className="text-gray-600">年中無休</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-green-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">ウェブサイト</p>
                  <a href="https://shinoya-cafe.com" className="text-green-800 hover:text-green-700">
                    shinoya-cafe.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">お問い合わせフォーム</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  お名前<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  メールアドレス<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  電話番号<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="例: 090-1234-5678"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  メッセージ<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
              {error && (
                <p className="text-red-600 text-center mt-4">
                  申し訳ありません。送信に失敗しました。時間をおいて再度お試しください。
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}