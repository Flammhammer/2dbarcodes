import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { convertGTINtoUPC } from '../utils/barcodeUtils';

interface UPCBarcodeProps {
  gtin: string;
}

export const UPCBarcode: React.FC<UPCBarcodeProps> = ({ gtin }) => {
  const barcodeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (barcodeRef.current) {
      try {
        const upcCode = convertGTINtoUPC(gtin);
        JsBarcode(barcodeRef.current, upcCode, {
          format: "upc",
          width: 2,
          height: 100,
          displayValue: true,
          fontSize: 20,
          margin: 10
        });
      } catch (error) {
        console.error('Failed to generate barcode:', error);
      }
    }
  }, [gtin]);

  return (
    <svg ref={barcodeRef} className="w-full max-w-[300px] h-auto"></svg>
  );
};