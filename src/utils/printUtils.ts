export const printQRCode = (qrCodeUrl: string, gtin?: string) => {
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  const iframeDoc = iframe.contentWindow?.document;
  if (!iframeDoc) {
    console.error('Failed to access iframe document');
    return;
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print QR Code</title>
        <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
        <style>
          body {
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: monospace;
          }
          .container {
            text-align: center;
          }
          img {
            max-width: 400px;
            height: auto;
            margin-bottom: 1rem;
          }
          .gtin {
            font-size: 1.2rem;
            margin: 1rem 0;
          }
          svg {
            max-width: 300px;
            height: auto;
          }
          @media print {
            @page {
              size: auto;
              margin: 0mm;
            }
            body {
              margin: 1cm;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img src="${qrCodeUrl}" alt="QR Code" />
          ${gtin ? `
            <div class="gtin">GTIN: ${gtin}</div>
            <svg id="barcode"></svg>
            <script>
              JsBarcode("#barcode", "${gtin}", {
                format: "upc",
                width: 2,
                height: 100,
                displayValue: true,
                fontSize: 20,
                margin: 10
              });
            </script>
          ` : ''}
        </div>
      </body>
    </html>
  `;

  iframeDoc.open();
  iframeDoc.write(html);
  iframeDoc.close();

  const img = iframeDoc.querySelector('img');
  if (img) {
    img.onload = () => {
      setTimeout(() => {
        iframe.contentWindow?.print();
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 100);
      }, 500); // Added delay to ensure barcode renders
    };
  }
};