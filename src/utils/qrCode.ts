import QRCode from 'qrcode';

export const generateQRCode = async (gtin: string): Promise<string> => {
  try {
    // Format with Application Identifier (01)
    const data = `(01)${gtin}`;
    // Generate high-resolution QR code
    const qrCodeDataUrl = await QRCode.toDataURL(data, {
      width: 400,
      margin: 2,
      errorCorrectionLevel: 'H'
    });
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
};