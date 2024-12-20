import React from 'react';
import { PrintButton } from './PrintButton';
import { UPCBarcode } from './UPCBarcode';

interface QRCodeDisplayProps {
  qrCodeUrl: string | null;
  gtin?: string;
}

export const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ qrCodeUrl, gtin }) => {
  if (!qrCodeUrl) return null;

  return (
    <div className="mt-6">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={qrCodeUrl}
          alt="Generated QR Code"
          className="mx-auto border-2 border-gray-200 rounded-lg"
        />
        {gtin && (
          <>
            <p className="text-lg font-mono">GTIN: {gtin}</p>
            <UPCBarcode gtin={gtin} />
          </>
        )}
      </div>
      <div className="mt-4 flex justify-center">
        <a
          href={qrCodeUrl}
          download="qrcode.png"
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Download QR Code
        </a>
        <PrintButton qrCodeUrl={qrCodeUrl} gtin={gtin} />
      </div>
    </div>
  );
};