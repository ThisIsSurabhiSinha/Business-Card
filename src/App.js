import React from 'react';
import './App.css';
import Main from './Components/Main';  // Importing the Main component
import DownloadButton from './Components/DownloadButton'; // Importing the DownloadButton component
 // Importing the QRCode component

function App() {
  return (
    <div className="App">
      <Main />
     
      <DownloadButton targetId="business-card" /> {/* Button to download the business card */}
    </div>
  );
}

export default App;
