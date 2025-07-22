import React from 'react';

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
  </nav>
);

export default Navbar; 