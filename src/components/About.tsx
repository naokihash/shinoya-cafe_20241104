import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">私たちについて</h2>
            <p className="text-lg text-gray-600 mb-6">
              しのやカフェは、福島県の豊かな食材を活かした「ファーム・トゥ・テーブル」をコンセプトに、
              地域の食文化を守り、新しい形で発信していくカフェです。
            </p>
            <p className="text-lg text-gray-600 mb-8">
              地元の生産者から直接仕入れた新鮮な野菜や果物を使用し、素材本来の味わいを大切にした料理をご提供。
              福島の食材の魅力を最大限に引き出すメニューづくりに取り組んでいます。
            </p>
            <a
              href="https://store.shinoya.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition"
            >
              詳しく見る
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="新鮮な野菜"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-50 p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-green-800">100%</p>
              <p className="text-gray-600">地元食材</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}