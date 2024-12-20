import React, { useState } from 'react';
import { QRCodeForm } from './QRCodeForm';
import { QRCodeDisplay } from './QRCodeDisplay';
import { generateQRCode } from '../utils/qrCode';

export function QRCodeGenerator() {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [currentGtin, setCurrentGtin] = useState<string>('');

  const handleGenerateQRCode = async (gtin: string) => {
    try {
      const url = await generateQRCode(gtin);
      setQrCodeUrl(url);
      setCurrentGtin(gtin);
    } catch (error) {
      console.error('Failed to generate QR code:', error);
      alert('Failed to generate QR code. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <QRCodeForm onSubmit={handleGenerateQRCode} />
      <QRCodeDisplay qrCodeUrl={qrCodeUrl} gtin={currentGtin} />
    </div>
  );
}