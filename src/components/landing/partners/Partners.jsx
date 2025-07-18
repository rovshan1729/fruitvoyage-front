import React, { useEffect, useState } from 'react';
import { getPartners } from 'src/services/partners';

const Partners = () => {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const partners = await getPartners();
        setLogos(partners);
      } catch (error) {
        console.error('Error loading partner logos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  return (
    <section className='w-full overflow-hidden bg-white py-12'>
      <div className='relative mx-auto h-[120px] max-w-7xl px-4 text-center'>
        {loading ? (
          <p>Loading partners...</p>
        ) : (
          <div className='logo-track animate-scroll absolute flex gap-16'>
            {[...logos, ...logos].map((partner, index) => (
              <img
                key={`${partner.id}-${index}`}
                src={partner.image}
                alt={partner.name}
                onError={(e) => {
                  e.currentTarget.src = '/fallback-logo.png';
                }}
                className='h-24 w-60 object-contain transition-transform duration-300 hover:scale-105 sm:h-32 sm:w-80'
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
