import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

const ProductsList = ({ data }) => {
  const { t } = useTranslation();
  const [visibleCount] = useState(9); 
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data.length > 0) {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [data]);

  const visibleData = isExpanded ? data : data.slice(0, visibleCount);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
      <div className="flex flex-wrap justify-center gap-6">
        {visibleData.map((item, index) => (
          <div
            key={index}
            className="group relative my-4 w-full sm:w-[calc(33.333%-1rem)] overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:shadow-2xl"
          >
            <div className="w-full h-[340px] md:h-[440px]">
              <img
                src={item.cover_image}
                alt={item.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-t-xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t  to-transparent rounded-xl" />
            <div className="absolute bottom-0 left-0 w-full bg-black/30 p-2 sm:p-3 text-white transition-transform duration-300 group-hover:translate-y-0 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 text-[11px] sm:text-xs md:text-sm">
              <h4 className="mb-1 text-sm sm:text-base md:text-lg font-bold line-clamp-1">
                {item.name}
              </h4>
              <div className="grid grid-cols-2 gap-1 sm:gap-2">
                {item.procurement_period !== '-' && (
                  <div className="line-clamp-2">
                    <p className="font-medium">{t('procurementPeriod')}</p>
                    <p>{item.procurement_period}</p>
                  </div>
                )}
                {item.sort_of !== '-' && (
                  <div className="line-clamp-2">
                    <p className="font-medium">{t('grade')}</p>
                    <p>{item.sort_of}</p>
                  </div>
                )}
                {item.type !== '-' && (
                  <div className="line-clamp-2">
                    <p className="font-medium">{t('type')}</p>
                    <p>{item.type}</p>
                  </div>
                )}
                {item.quantity_based !== '-' && (
                  <div className="line-clamp-2">
                    <p className="font-medium">{t('quantityBased')}</p>
                    <p>{item.quantity_based}</p>
                  </div>
                )}
                {item.harvest_season !== '-' && (
                  <div className="line-clamp-2">
                    <p className="font-medium">{t('harvestSeason')}</p>
                    <p>{item.harvest_season}</p>
                  </div>
                )}
                {item.made !== '-' && (
                  <div className="line-clamp-2">
                    <p className="font-medium">{t('madeIn')}</p>
                    <p>{item.made}</p>
                  </div>
                )}
                {item.caliber !== '-' && (
                  <div className="line-clamp-2">
                    <p className="font-medium">{t('caliber')}</p>
                    <p>{item.caliber}</p>
                  </div>
                )}
              </div>
              {item.job !== '-' && (
                <p className="mt-1 text-[10px] sm:text-xs text-gray-200 line-clamp-2">
                  {item.job}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {!isExpanded && data.length > visibleCount && (
        <div className="text-center mt-6">
          <button
            onClick={() => setIsExpanded(true)}
            className="px-5 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition"
          >
            {t('more')}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
