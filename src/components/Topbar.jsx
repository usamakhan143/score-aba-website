import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <div className="topbar-item">
            <PhoneIcon className="topbar-icon" />
            <span>+1 (315) 239-8008</span>
          </div>
          <div className="topbar-item">
            <EnvelopeIcon className="topbar-icon" />
            <span>info@scoreaba.com</span>
          </div>
        </div>
        
        <div className="topbar-right">
          <div className="topbar-item">
            <ClockIcon className="topbar-icon" />
            <span>Mon-Fri: 8AM-6PM</span>
          </div>
          <div className="topbar-item">
            <MapPinIcon className="topbar-icon" />
            <span>Atlanta, Georgia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
