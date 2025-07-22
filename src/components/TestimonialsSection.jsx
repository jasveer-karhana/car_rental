import React, { useEffect, useState } from 'react';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/testimonials.json')
      .then((res) => res.json())
      .then(setTestimonials);
  }, []);

  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 32,
      }}>
        {testimonials.map((t) => (
          <div key={t.id} style={{
            background: '#23272F',
            borderRadius: 16,
            boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
            padding: 24,
            width: 340,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: '#4F8EF7',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 12,
            }}>{t.name[0]}</div>
            <p style={{ fontStyle: 'italic', color: '#D1D5DB', marginBottom: 8 }}>&ldquo;{t.text}&rdquo;</p>
            <p style={{ fontWeight: 600, margin: 0, color: '#fff' }}>- {t.name}</p>
            <p style={{ color: '#FFD700', margin: 0 }}>{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection; 