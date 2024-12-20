import React, { useState } from 'react';

interface QRCodeFormProps {
  onSubmit: (gtin: string) => void;
}

export const QRCodeForm: React.FC<QRCodeFormProps> = ({ onSubmit }) => {
  const [gtin, setGtin] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(gtin);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="gtin" className="block text-sm font-medium text-gray-700">
          Application Identifier (01) - GTIN
        </label>
        <input
          type="text"
          id="gtin"
          value={gtin}
          onChange={(e) => setGtin(e.target.value)}
          pattern="[0-9]{14}"
          maxLength={14}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter 14-digit GTIN"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Generate QR Code
      </button>
    </form>
  );
};