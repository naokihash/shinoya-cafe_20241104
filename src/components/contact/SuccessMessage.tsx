import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  canSubmit: boolean;
  cooldownSeconds: number;
  onReset: () => void;
}

export default function SuccessMessage({
  canSubmit,
  cooldownSeconds,
  onReset
}: SuccessMessageProps) {
  return (
    <div className="text-center">
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
      {!canSubmit && (
        <p className="text-sm text-gray-500 mb-4">
          新しいお問い合わせは{cooldownSeconds}秒後に可能になります
        </p>
      )}
      <button
        onClick={onReset}
        disabled={!canSubmit}
        className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        新しいお問い合わせをする
      </button>
    </div>
  );
}