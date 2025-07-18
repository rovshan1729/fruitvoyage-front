import React, { useEffect, useState } from 'react';
import { getCertificates } from 'src/services/certificate';

const Certificates = () => {
  const [certificates, setCertificates] = useState<{ id: number; image: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await getCertificates();
        setCertificates(data);
      } catch (error) {
        console.error('Error loading certificates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center relative h-[120px]">
        {loading ? (
          <p>Loading certificates...</p>
        ) : (
          <div className="logo-track flex gap-16 absolute animate-scroll">
            {[...certificates, ...certificates].map((cert, index) => (
              <img
                key={`${cert.id}-${index}`}
                src={cert.image}
                alt={cert.name}
                onError={(e) => {
                  e.currentTarget.src = '/fallback-certificate.png'; // fallback image
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

export default Certificates;
