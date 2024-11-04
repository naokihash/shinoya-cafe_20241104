import React from 'react';
import { Sprout, Leaf, UtensilsCrossed } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            こだわり
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            地元福島の新鮮な食材を使用し、素材本来の味わいを大切にした料理をご提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Sprout className="h-8 w-8" />}
            title="地産地消"
            description="福島県全域から厳選した新鮮な食材を使用し、地域の豊かな食文化を守ります。"
          />
          <FeatureCard
            icon={<Leaf className="h-8 w-8" />}
            title="季節の味わい"
            description="旬の野菜や果物を使用し、季節ごとに変わる特別なメニューをお楽しみいただけます。"
          />
          <FeatureCard
            icon={<UtensilsCrossed className="h-8 w-8" />}
            title="手作りの温もり"
            description="素材の味を活かした手作りの惣菜やスイーツで、心温まるひとときをお届けします。"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-lg transition">
      <div className="inline-block p-3 bg-green-100 rounded-full text-green-800 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}