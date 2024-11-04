import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type MenuItem = {
  category: string;
  name: string;
  description?: string;
  price: string;
  image?: string;
};

const menuItems: MenuItem[] = [
  {
    category: 'ワンプレート',
    name: 'スープとサラダ',
    price: '¥850',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ワンプレート',
    name: 'スープとサラダ（パン付き）',
    price: '¥950',
    image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ワンプレート',
    name: 'バターチキンカレー（パン・サラダ付き）',
    description: '笑夢カレー',
    price: '¥1,200',
    image: 'https://images.unsplash.com/photo-1604579835207-bc02fe9d058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ワンプレート',
    name: '欧風ポークカレー（パン・サラダ付き）',
    description: '笑夢カレー',
    price: '¥1,200',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'フード',
    name: '季節野菜のチャウダー',
    price: '¥480',
    image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'フード',
    name: '季節野菜のコンソメスープ',
    price: '¥480',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'フード',
    name: 'こだわり野菜のサラダ',
    price: '¥400',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'フード',
    name: 'かき氷　大',
    price: '¥1,200',
    image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'フード',
    name: 'かき氷　小',
    price: '¥800',
    image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'コーヒー',
    description: 'わかき珈琲',
    price: '¥400',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'カフェラテ',
    price: '¥450',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'カフェモカ',
    price: '¥470',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'ココア',
    price: '¥420',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'ミルク',
    description: '会津中央乳業',
    price: '¥400',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'りんごジュース',
    description: '齋藤りんご園',
    price: '¥400',
    image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'プレミアムトマトジュース',
    description: 'トロピカルトマト',
    price: '¥500',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'にんじんジュース',
    description: '鈴木農園',
    price: '¥550',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'ももジュース',
    description: '大野農園',
    price: '¥550',
    image: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'いちごとにんじんの発酵スムージー',
    price: '¥600',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'りんごと小松菜の発酵スムージー',
    price: '¥600',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'ももの発酵スムージー',
    price: '¥600',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'ドリンク',
    name: 'スパークリングドリンク',
    price: '¥500',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

const categories = Array.from(new Set(menuItems.map(item => item.category)));

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">メニュー</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              福島の新鮮な食材を使用した、心と体に優しいメニューをご用意しています。
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category} id={category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-green-800">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems
                    .filter(item => item.category === category)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
                      >
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                              {item.description && (
                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                              )}
                            </div>
                            <span className="text-lg font-medium text-green-800">{item.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}