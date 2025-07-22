import React, { useEffect, useState } from 'react';

const ContactSection = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch('/contact.json')
      .then((res) => res.json())
      .then(setContact);
  }, []);

  if (!contact) return null;

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <div style={{
        background: '#23272F',
        borderRadius: 16,
        boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
        padding: 32,
        maxWidth: 700,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <p style={{ fontSize: 18, margin: 0 }}><strong>Phone:</strong> {contact.phone}</p>
        <p style={{ fontSize: 18, margin: 0 }}><strong>Email:</strong> {contact.email}</p>
        <p style={{ fontSize: 18, margin: 0, marginBottom: 16 }}><strong>Address:</strong> {contact.address}</p>
      </div>
    </section>
  );
};

export default ContactSection; 