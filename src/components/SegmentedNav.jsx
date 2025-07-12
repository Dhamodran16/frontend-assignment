import React, { useState } from 'react';
import jobIcon from '../assets/job.svg';
import messageIcon from '../assets/message.svg';
import paymentIcon from '../assets/payment.svg';

const segments = [
  { label: 'Jobs', icon: jobIcon },
  { label: 'Messages', icon: messageIcon },
  { label: 'Payments', icon: paymentIcon },
];

export default function SegmentedNav() {
  const [selected, setSelected] = useState('Jobs');
  return (
    <div className="segmented-nav">
      {segments.map(seg => (
        <button
          key={seg.label}
          className={`segmented-btn${selected === seg.label ? ' selected' : ''}`}
          onClick={() => setSelected(seg.label)}
        >
          <img src={seg.icon} alt="" className="segmented-icon" /> {seg.label}
        </button>
      ))}
    </div>
  );
} 