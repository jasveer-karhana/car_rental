import React from 'react';

const aboutContainer = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#23272F',
  borderRadius: 20,
  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
  padding: '2.5rem 2rem',
  maxWidth: 950,
  margin: '0 auto',
  gap: 40,
};

const aboutText = {
  flex: 1,
  textAlign: 'left',
  fontFamily: 'Montserrat, Inter, Arial, sans-serif',
};

const aboutImage = {
  width: 260,
  height: 200,
  objectFit: 'cover',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(79,142,247,0.10)',
};

const AboutSection = () => (
  <section id="about">
    <div style={{
      background: '#23272F',
      borderRadius: 20,
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      padding: '2rem 1.5rem',
      maxWidth: 700,
      margin: '0 auto',
      color: '#F5F6FA',
      fontFamily: 'Montserrat, Inter, Arial, sans-serif',
      textAlign: 'left',
    }}>
      <h2 style={{ fontWeight: 800, fontSize: 32, marginBottom: 16, letterSpacing: 1 }}>About Us</h2>
      <p style={{ fontSize: 18, marginBottom: 18 }}>
        Welcome to KD CAR RENTALS, your trusted partner in reliable, comfortable, and on-time taxi services. Whether you’re heading to the airport, attending a business meeting, or planning a weekend getaway, we ensure a smooth and safe ride every time.
      </p>
      <ul style={{ fontSize: 17, marginBottom: 18, paddingLeft: 18 }}>
        <li>🚗 Clean & Air-Conditioned Vehicles</li>
        <li>🔌 Mobile Charging Ports (USB)</li>
        <li>💧 Bottled Water & Tissue Box</li>
        <li>🧑‍🤝‍🧑 Spacious Seating for Families or Groups</li>
        <li>🎵 Music & Radio System (Bluetooth/USB)</li>
      </ul>
      <ul style={{ fontSize: 17, marginBottom: 0, paddingLeft: 18 }}>
        <li>🧑‍✈️ Verified, Trained Drivers</li>
        <li>📡 Real-Time GPS Tracking</li>
        <li>🚨 Panic Button & SOS Alert System</li>
        <li>🛡️ Airbags, ABS & First Aid Kit</li>
        <li>🧯 Fire Extinguisher Onboard</li>
      </ul>
    </div>
  </section>
);

export default AboutSection; 