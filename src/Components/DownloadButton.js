

import React from 'react';
import { FaDownload } from 'react-icons/fa'; 
import html2canvas from 'html2canvas';

function DownloadButton({ targetId }) {
  const handleDownload = () => {
    const cardElement = document.getElementById(targetId);
    setTimeout(() => {
      html2canvas(cardElement).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'business_card.png';
        link.click(); 
      });
    }, 3000); 
  };

  return (
    <div onClick={handleDownload} className="download-icon" style={{ cursor: 'pointer' }}>
      <FaDownload size={30} /> 
    </div>
  );
}

export default DownloadButton;