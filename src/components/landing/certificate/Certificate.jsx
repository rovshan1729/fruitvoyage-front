import React, { useEffect, useState } from 'react';
import { getCertificates } from 'src/services/certificate';
import { useTranslation } from 'react-i18next';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

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
    <section className='w-full overflow-hidden bg-white py-12'>
      <div className='mx-auto max-w-7xl px-4 text-center'>
        <h2 className='mb-8 text-2xl font-bold md:text-3xl'>{t('certificates')}</h2>

        <div className='relative h-[250px]'>
          {loading ? (
            <p>{t('loading')}...</p>
          ) : (
            <div className='logo-track animate-scroll absolute flex gap-16'>
              {[...certificates, ...certificates].map((cert, index) => (
                <img
                  key={`${cert.id}-${index}`}
                  src={cert.image}
                  alt={cert.name || 'Certificate'}
                  onError={(e) => {
                    e.currentTarget.src = '/fallback-certificate.png';
                  }}
                  className='h-40 max-w-none object-contain transition-transform duration-300 hover:scale-115 sm:h-90'
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
