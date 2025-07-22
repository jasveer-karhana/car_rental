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
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap" rel="stylesheet" />
    <div style={aboutContainer}>
      <img
        src="/images/innova.jpg"
        alt="Our Fleet"
        style={aboutImage}
      />
      <div style={aboutText}>
        <h2 style={{ fontWeight: 800, fontSize: 36, marginBottom: 12, letterSpacing: 1 }}>About KD Car Rentals</h2>
        <p style={{ fontSize: 18, color: '#D1D5DB', marginBottom: 18, fontWeight: 500 }}>
          <strong>Driven by Passion, Trusted by Thousands.</strong>
        </p>
        <p style={{ fontSize: 16, color: '#F5F6FA', marginBottom: 12 }}>
          Founded in 2012, KD Car Rentals has become the go-to choice for travelers and locals seeking comfort, safety, and style on the road. Our diverse fleet is handpicked to suit every journey—be it a family vacation, a business trip, or a weekend adventure.
        </p>
        <p style={{ fontSize: 16, color: '#F5F6FA', marginBottom: 12 }}>
          <strong>Our Mission:</strong> To make every ride memorable by offering top-notch vehicles, transparent pricing, and exceptional customer service. We believe in going the extra mile—literally and figuratively.
        </p>
        <p style={{ fontSize: 16, color: '#F5F6FA', marginBottom: 0 }}>
          <em>"Your journey, our wheels. Let’s drive new memories together!"</em>
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection; 