import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', tab: 'hero' },
  { label: 'About', tab: 'about' },
  { label: 'Services', tab: 'services' },
  { label: 'Cars', tab: 'car-listings' },
  { label: 'Gallery', tab: 'gallery' },
  { label: 'Testimonials', tab: 'testimonials' },
  { label: 'Contact', tab: 'contact' },
];

const Navbar = ({ activeTab, setActiveTab }) => (
  <nav style={{
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(24, 24, 24, 0.95)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    padding: '0.5rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
  }}>
    <span style={{ fontWeight: 700, fontSize: 24, marginRight: 32, letterSpacing: 1, color: '#4F8EF7' }}>
      CarRentalPro
    </span>
    {navLinks.map(link => (
      <button
        key={link.tab}
        onClick={() => setActiveTab(link.tab)}
        style={{
          color: activeTab === link.tab ? '#4F8EF7' : '#fff',
          background: 'none',
          border: 'none',
          fontWeight: 600,
          fontSize: 16,
          padding: '0.5rem 1rem',
          borderRadius: 6,
          cursor: 'pointer',
          transition: 'background 0.2s',
          outline: 'none',
          borderBottom: activeTab === link.tab ? '3px solid #4F8EF7' : '3px solid transparent',
        }}
      >
        {link.label}
      </button>
    ))}
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginLeft: 32 }}>
      <a
        href="tel:+919876543210"
        title="Call us"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 38, height: 38, borderRadius: '50%', background: '#2563eb', color: '#fff',
          marginRight: 8, textDecoration: 'none', border: '2px solid #2563eb', transition: 'filter 0.18s',
        }}
        target="_blank"
        rel="noopener noreferrer"
        onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.15)'}
        onMouseOut={e => e.currentTarget.style.filter = ''}
      >
        <BsFillTelephoneFill size={20} />
      </a>
      <a
        href="https://wa.me/919876543210"
        title="Chat on WhatsApp"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 38, height: 38, borderRadius: '50%', background: '#25d366', color: '#fff',
          textDecoration: 'none', border: '2px solid #25d366', transition: 'filter 0.18s',
        }}
        target="_blank"
        rel="noopener noreferrer"
        onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.15)'}
        onMouseOut={e => e.currentTarget.style.filter = ''}
      >
        <FaWhatsapp size={22} />
      </a>
    </div>
  </nav>
);

export default Navbar; 