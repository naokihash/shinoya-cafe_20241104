import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const previewItems = [
  {
    category: 'ワンプレート',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: '福島の新鮮な野菜を使用したワンプレートメニュー'
  },
  {
    category: 'フード',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: '季節の野菜を使用したスープやサラダ'
  },
  {
    category: 'ドリンク',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: '地元の食材を使用した特製ドリンク'
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">メニュー</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            福島の豊かな食材を活かした、心と体に優しいメニューをご用意しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewItems.map((item) => (
            <Link
              key={item.category}
              to="/menu"
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.category}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-green-800 group-hover:text-green-700">
                  <span className="mr-2">メニューを見る</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
          >
            <span>メニュー一覧を見る</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}