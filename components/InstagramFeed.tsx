import React from 'react';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    caption: '齋藤りんご園さんの新鮮なりんごが入荷しました🍎 #福島県産 #りんご #地元の味'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    caption: 'トロピカルトマトさんの完熟トマト。甘みと酸味のバランスが絶妙です🍅 #地産地消 #トマト #福島の味'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    caption: '大野農園さんの桃が入荷！みずみずしい香りと甘さをお楽しみください🍑 #福島の桃 #くだもの #旬の果物'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    caption: '鈴木農園さんの人参。甘みたっぷりのジュースに仕上げています🥕 #にんじん #野菜ジュース #福島県産'
  }
];

const INSTAGRAM_URL = 'https://www.instagram.com/syokuzai_shinoya';

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">旬の食材</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            福島の豊かな自然が育んだ、今が旬の食材をご紹介します。
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-green-800 hover:text-green-700 mt-4"
          >
            <Instagram className="h-5 w-5" />
            <span>@syokuzai_shinoya</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
                  <div className="absolute inset-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-sm line-clamp-3">{post.caption}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            <span>Instagramをフォロー</span>
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}