import React from 'react';

const services = [
  { icon: '🛫', label: 'Pickup & Drop' },
  { icon: '🛣️', label: 'Road Trip' },
  { icon: '🚗', label: 'Wedding Cars' },
  { icon: '✈️', label: 'Airport Transfers' },
  { icon: '🌄', label: 'Outstation Tours' },
];

const ServicesSection = () => (
  <section id="services">
    <h2>Our Services</h2>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      marginTop: 32,
    }}>
      {services.map((s, i) => (
        <div key={i} style={{
          background: '#23272F',
          borderRadius: 14,
          boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
          padding: '2rem 1.5rem',
          minWidth: 180,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</span>
          <span style={{ fontWeight: 600, fontSize: 18 }}>{s.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection; 