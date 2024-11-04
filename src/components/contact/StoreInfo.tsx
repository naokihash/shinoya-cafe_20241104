import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function StoreInfo() {
  return (
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
  );
}