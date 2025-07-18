import React, { useEffect, useState } from 'react';
import { getPartners } from 'src/services/partners';

const Partners = () => {
  const [logos, setLogos] = useState<{ id: number; image: string; name: string }[]>([]);
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
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center relative h-[120px]">
        {loading ? (
          <p>Loading partners...</p>
        ) : (
          <div className="logo-track flex gap-16 absolute animate-scroll">
            {[...logos, ...logos].map((partner, index) => (
              <img
                key={`${partner.id}-${index}`}
                src={partner.image}
                alt={partner.name}
                onError={(e) => {
                  e.currentTarget.src = '/fallback-logo.png'; // fallback image
                }}
                className="h-12 w-70 sm:h-20 object-contain transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
