// Convert GTIN-14 to UPC-A by removing prefix digits
export const convertGTINtoUPC = (gtin: string): string => {
  // GTIN-14 format: Indicator(1) + GS1 Company Prefix(6-9) + Item Reference + Check digit
  // UPC-A needs 12 digits
  if (gtin.length !== 14) {
    throw new Error('Invalid GTIN length. Must be 14 digits.');
  }
  
  // Extract the last 12 digits from GTIN-14 to get UPC-A
  return gtin.slice(2);
};