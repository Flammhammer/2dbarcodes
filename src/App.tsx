import React from 'react';
import { QRCodeGenerator } from './components/QRCodeGenerator';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          QR Code Generator
        </h1>
        <QRCodeGenerator />
      </div>
    </div>
  );
}

export default App;