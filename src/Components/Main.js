import React from "react";
import Header from "./Header";  
import ContactInfo from "./ContactInfo";
import About from "./About";  
import QR from "./QR"; 

export default function Main() {
    return (
        <div  id="business-card" className="business-card">

                <Header />
                <About />
                <ContactInfo />
                <QR />
          
        </div>
    );
}
