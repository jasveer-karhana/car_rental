import React, { useEffect, useState } from 'react';

const GallerySection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/gallery.json')
      .then((res) => res.json())
      .then(setImages);
  }, []);

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        marginTop: 32,
      }}>
        {images.map((img, idx) => (
          <a
            key={idx}
            href={`/${img}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
          >
            <img
              src={`/${img}`}
              alt={`Gallery ${idx + 1}`}
              style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block', transition: 'transform 0.18s', background: '#18191A' }}
              loading="lazy"
              onError={e => { e.target.src = 'https://via.placeholder.com/220x160?text=No+Image'; }}
              onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = ''; }}
            />
          </a>
        ))}
      </div>
      <p style={{ color: '#aaa', fontSize: 14, marginTop: 16 }}>
        Click an image to view larger.
      </p>
    </section>
  );
};

export default GallerySection; 