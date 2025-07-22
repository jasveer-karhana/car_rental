import React, { useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', tab: 'hero' },
  { label: 'About', tab: 'about' },
  { label: 'Services', tab: 'services' },
  { label: 'Cars', tab: 'car-listings' },
  { label: 'Gallery', tab: 'gallery' },
  { label: 'Testimonials', tab: 'testimonials' },
  { label: 'Contact', tab: 'contact' },
];

const Navbar = ({ activeTab, setActiveTab }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
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
        <div className="navbar-links" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
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
        </div>
        <div className="navbar-contacts" style={{ display: 'flex', alignItems: 'center', gap: 16, marginLeft: 32 }}>
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
        <button className="navbar-hamburger" style={{ display: 'none', background: 'none', border: 'none', color: '#fff', fontSize: 28, marginLeft: 16, cursor: 'pointer' }} onClick={() => setSidebarOpen(true)}>
          <FiMenu />
        </button>
      </nav>
      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <div className="navbar-sidebar-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.45)', zIndex: 9999 }} onClick={() => setSidebarOpen(false)} />
      )}
      <div className={`navbar-sidebar${sidebarOpen ? ' open' : ''}`} style={{
        position: 'fixed',
        top: 0,
        left: sidebarOpen ? 0 : '-260px',
        width: 260,
        height: '100vh',
        background: '#23272F',
        boxShadow: '2px 0 16px rgba(0,0,0,0.18)',
        zIndex: 10000,
        transition: 'left 0.25s',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 18px 18px 18px',
      }}>
        <button style={{ alignSelf: 'flex-end', background: 'none', border: 'none', color: '#fff', fontSize: 28, marginBottom: 24, cursor: 'pointer' }} onClick={() => setSidebarOpen(false)}>
          <FiX />
        </button>
        {navLinks.map(link => (
          <button
            key={link.tab}
            onClick={() => { setActiveTab(link.tab); setSidebarOpen(false); }}
            style={{
              color: activeTab === link.tab ? '#4F8EF7' : '#fff',
              background: 'none',
              border: 'none',
              fontWeight: 600,
              fontSize: 18,
              padding: '0.75rem 0',
              borderRadius: 6,
              cursor: 'pointer',
              textAlign: 'left',
              marginBottom: 6,
              borderBottom: activeTab === link.tab ? '2px solid #4F8EF7' : '2px solid transparent',
            }}
          >
            {link.label}
          </button>
        ))}
        <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
          <a
            href="tel:+919876543210"
            title="Call us"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 38, height: 38, borderRadius: '50%', background: '#2563eb', color: '#fff',
              textDecoration: 'none', border: '2px solid #2563eb', transition: 'filter 0.18s',
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
      </div>
      <style>{`
        @media (max-width: 800px) {
          .navbar-links, .navbar-contacts { display: none !important; }
          .navbar-hamburger { display: block !important; }
        }
        @media (min-width: 801px) {
          .navbar-sidebar, .navbar-sidebar-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar; 