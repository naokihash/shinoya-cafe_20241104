import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useWeb3Forms } from '@web3forms/react';
import { FormData, FormError } from './types';

const COOLDOWN_PERIOD = 60000;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [formError, setFormError] = useState<FormError | null>(null);

  const { submit, isSubmitting, isSuccess } = useWeb3Forms({
    access_key: import.meta.env.VITE_WEB3FORMS_KEY || '',
    settings: {
      from_name: 'しのやカフェ お問い合わせフォーム',
      subject: 'しのやカフェ 新規お問い合わせ',
      to: 'naoki.hashimoto@krym.jp',
      message: `
        新しいお問い合わせが届きました。

        ■お名前
        {name}

        ■メールアドレス
        {email}

        ■電話番号
        {phone}

        ■メッセージ
        {message}
      `
    }
  });

  useEffect(() => {
    if (lastSubmissionTime) {
      const interval = setInterval(() => {
        const remaining = Math.max(
          0,
          Math.ceil((COOLDOWN_PERIOD - (Date.now() - lastSubmissionTime)) / 1000)
        );
        setCooldownSeconds(remaining);
        if (remaining <= 0) {
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [lastSubmissionTime]);

  const canSubmit = () => {
    if (!lastSubmissionTime) return true;
    return Date.now() - lastSubmissionTime >= COOLDOWN_PERIOD;
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFormError({ field: 'name', message: 'お名前を入力してください' });
      return false;
    }
    if (!formData.email.trim()) {
      setFormError({ field: 'email', message: 'メールアドレスを入力してください' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormError({ field: 'email', message: '有効なメールアドレスを入力してください' });
      return false;
    }
    if (!formData.phone.trim()) {
      setFormError({ field: 'phone', message: '電話番号を入力してください' });
      return false;
    }
    if (!formData.message.trim()) {
      setFormError({ field: 'message', message: 'メッセージを入力してください' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!canSubmit()) {
      setFormError({ message: `送信は${cooldownSeconds}秒後に可能になります` });
      return;
    }

    if (!validateForm()) return;

    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;
      if (!apiKey) {
        throw new Error('Web3Forms APIキーが設定されていません');
      }

      await submit({
        ...formData,
        access_key: apiKey,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      setLastSubmissionTime(Date.now());
      setFormError(null);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setFormError({
        message: '送信に失敗しました。時間をおいて再度お試しください。'
      });
    }
  };

  const resetForm = () => {
    if (canSubmit()) {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setFormError(null);
    }
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formError?.field === field) setFormError(null);
  };

  if (isSuccess) {
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
        {!canSubmit() && (
          <p className="text-sm text-gray-500 mb-4">
            新しいお問い合わせは{cooldownSeconds}秒後に可能になります
          </p>
        )}
        <button
          onClick={resetForm}
          disabled={!canSubmit()}
          className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          新しいお問い合わせをする
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          お名前<span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className={`w-full px-4 py-2 border ${
            formError?.field === 'name' ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
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
          onChange={(e) => handleInputChange('email', e.target.value)}
          className={`w-full px-4 py-2 border ${
            formError?.field === 'email' ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
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
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className={`w-full px-4 py-2 border ${
            formError?.field === 'phone' ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
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
          onChange={(e) => handleInputChange('message', e.target.value)}
          className={`w-full px-4 py-2 border ${
            formError?.field === 'message' ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !canSubmit()}
        className={`w-full bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? '送信中...' : !canSubmit() ? `再送信まで${cooldownSeconds}秒` : '送信する'}
      </button>

      {formError && (
        <div className="flex items-center space-x-2 text-red-600 justify-center mt-4">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">{formError.message}</p>
        </div>
      )}
    </form>
  );
}