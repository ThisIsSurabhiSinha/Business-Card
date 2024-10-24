

import React from "react";
import profilePic from '../images/profile.png'; 

export default function Header() {
    return (
        <>
            <div className="p-lg mx-auto header-curve">
        
                <div className="profile-pic-container mx-auto">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                </div>
                
                <div className="d-flex gap-3 justify-content-center lead fw-normal">
                    <a className="icon-link" href="#">
                        <svg className="bi">
                            <use xlinkHref="#chevron-right" />
                        </svg>
                    </a>
                    <a className="icon-link" href="#">
                        
                        <svg className="bi">
                            <use xlinkHref="#chevron-right" />
                        </svg>
                    </a>
                </div>
               
            </div>
        </>
    );
}
