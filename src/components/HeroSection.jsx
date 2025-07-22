import React from 'react';

const heroBg = {
  background: `linear-gradient(rgba(24,25,26,0.7),rgba(24,25,26,0.7)), url('/images/scorpio.jpg') center/cover no-repeat`,
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  borderRadius: '0 0 32px 32px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
  marginBottom: 32,
  padding: '64px 16px 48px 16px',
};

const headlineStyle = {
  fontFamily: 'Montserrat, Inter, Arial, sans-serif',
  fontSize: '4.5rem',
  fontWeight: 900,
  marginBottom: 24,
  letterSpacing: 2,
  textShadow: '0 4px 24px rgba(0,0,0,0.45)',
  lineHeight: 1.1,
};

const taglineStyle = {
  fontFamily: 'Montserrat, Inter, Arial, sans-serif',
  fontSize: '2rem',
  marginBottom: 40,
  color: '#F5F6FA',
  textShadow: '0 2px 12px rgba(0,0,0,0.35)',
  fontWeight: 500,
};

const HeroSection = () => (
  <section id="hero" style={heroBg}>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap" rel="stylesheet" />
    <h1 style={headlineStyle}>KD CAR RENTALS</h1>
    <p style={taglineStyle}>
      Fuel your next adventure - Rent, Ride, Repeat
    </p>
    <a href="#car-listings" className="btn" style={{ fontSize: '1.3rem', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: 12 }}>
      View Cars
    </a>
  </section>
);

export default HeroSection; 