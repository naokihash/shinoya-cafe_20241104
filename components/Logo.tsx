import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="h-12 w-12 bg-white rounded-full p-1">
        <div className="h-full w-full bg-green-800 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">鮮直</span>
        </div>
      </div>
      <span className="ml-2 text-xl font-semibold text-green-900">しのやカフェ</span>
    </div>
  );
}