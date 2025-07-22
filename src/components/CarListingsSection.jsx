import React, { useEffect, useState } from 'react';

const featureIcons = {
  seatingCapacity: '🧑‍🤝‍🧑',
  luggageCapacity: '🧳',
  fuelType: '⛽',
  transmission: '⚙️',
};

const CarListingsSection = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/cars.json')
      .then((res) => res.json())
      .then(setCars);
  }, []);

  return (
    <section id="car-listings">
      <h2>Available Cars</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: 32 }}>
        {cars.map((car) => {
          // Ensure image path starts with '/'
          const imgSrc = car.image.startsWith('/') ? car.image : `/${car.image}`;
          return (
            <div key={car.id} style={{
              background: '#23272F',
              borderRadius: 16,
              boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
              padding: 20,
              width: 300,
              transition: 'transform 0.18s, box-shadow 0.18s',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(79,142,247,0.18)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.10)';
            }}
            >
              <img
                src={imgSrc}
                alt={car.name}
                style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8, marginBottom: 16, background: '#18191A' }}
                loading="lazy"
                onError={e => { e.target.src = 'https://via.placeholder.com/300x160?text=No+Image'; }}
              />
              <h3 style={{ margin: '8px 0 8px 0', fontWeight: 700 }}>{car.name}</h3>
              <p style={{ fontWeight: 600, color: '#4F8EF7', fontSize: 18, margin: 0 }}>₹{car.pricePerDay} <span style={{ fontWeight: 400, fontSize: 14 }}>/day</span></p>
              <div style={{ display: 'flex', gap: 16, margin: '12px 0 0 0', justifyContent: 'center' }}>
                <span title="Seating"><span style={{ fontSize: 18 }}>{featureIcons.seatingCapacity}</span> {car.seatingCapacity}</span>
                <span title="Luggage"><span style={{ fontSize: 18 }}>{featureIcons.luggageCapacity}</span> {car.luggageCapacity}</span>
              </div>
              <div style={{ display: 'flex', gap: 16, margin: '8px 0 0 0', justifyContent: 'center' }}>
                <span title="Fuel"><span style={{ fontSize: 18 }}>{featureIcons.fuelType}</span> {car.fuelType}</span>
                <span title="Transmission"><span style={{ fontSize: 18 }}>{featureIcons.transmission}</span> {car.transmission}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CarListingsSection; 