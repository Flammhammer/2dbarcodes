import React from 'react';
import { printQRCode } from '../utils/printUtils';

interface PrintButtonProps {
  qrCodeUrl: string;
  gtin?: string;
}

export const PrintButton: React.FC<PrintButtonProps> = ({ qrCodeUrl, gtin }) => {
  return (
    <button
      onClick={() => printQRCode(qrCodeUrl, gtin)}
      className="ml-4 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
    >
      Print QR Code
    </button>
  );
};