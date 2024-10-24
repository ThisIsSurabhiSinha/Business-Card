// import React from 'react';
// import qrCodeImage from '../images/GooglePay_QR.png';
// function QR() {
//   return (
//     <div className="qr-code-container">
//       <img src={qrCodeImage} alt="Payment UPI QR Code" className="qr-code" />
//     </div>
//   );
// }

// export default QR;

import React, { useState } from 'react';
import qrCodeImage from '../images/QR_code.webp'; 
import { FaQrcode } from 'react-icons/fa'; 

function QRCode() {
  const [isVisible, setIsVisible] = useState(false); 

  const toggleQRCode = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="qr-code-container">
      <FaQrcode className="qr-code-icon" onClick={toggleQRCode} />
      {isVisible && (
        <img src={qrCodeImage} alt="Payment UPI QR Code" className="qr-code" />
      )}
    </div>
  );
}

export default QRCode;
