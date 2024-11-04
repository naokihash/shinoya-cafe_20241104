import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactInfo as ContactInfoType } from './types';

const contactInfo: ContactInfoType[] = [
  {
    icon: <MapPin className="h-6 w-6 text-green-800 mt-1" />,
    title: '住所',
    content: (
      <>
        <p className="text-gray-600">〒963-8835</p>
        <p className="text-gray-600">福島県郡山市小関谷地23-1</p>
        <p className="text-gray-600">Bakeryいずみがもり桑野店内</p>
      </>
    )
  },
  {
    icon: <Phone className="h-6 w-6 text-green-800 mt-1" />,
    title: '電話番号',
    content: <p className="text-gray-600">024-954-8339</p>
  },
  {
    icon: <Clock className="h-6 w-6 text-green-800 mt-1" />,
    title: '営業時間',
    content: (
      <>
        <p className="text-gray-600">10:00～18:00</p>
        <p className="text-gray-600">年中無休</p>
      </>
    )
  },
  {
    icon: <Mail className="h-6 w-6 text-green-800 mt-1" />,
    title: 'ウェブサイト',
    content: (
      <a href="https://shinoya-cafe.com" className="text-green-800 hover:text-green-700">
        shinoya-cafe.com
      </a>
    )
  }
];

export default function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">店舗情報</h3>
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-start space-x-4">
            {info.icon}
            <div>
              <p className="font-medium text-gray-900">{info.title}</p>
              {info.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}