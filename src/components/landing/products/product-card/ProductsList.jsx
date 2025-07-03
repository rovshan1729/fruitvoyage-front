import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ProductsList = ({ data }) => {
  const { t } = useTranslation();
  const [hasMoved, setHasMoved] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  console.log(data);
  

  return (
    <div className="max-w-7xl relative mx-auto w-full">
      <button
        ref={prevRef}
        className={`custom-prev absolute top-1/2 -left-12 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow transition-opacity duration-300 hover:bg-gray-100 ${hasMoved ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <FaArrowLeft className="text-lg text-gray-600" />
      </button>
      <button
        ref={nextRef}
        className="custom-next absolute top-1/2 -right-4 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100"
      >
        <FaArrowRight className="text-lg text-gray-600" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => setHasMoved(true)}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop={false}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
      >
        {data.map((item, index) => (          
          <SwiperSlide key={index}>
            <div className="
              group relative 
              mx-2 my-4 
              w-44 h-[220px] 
              sm:w-56 sm:h-[260px] 
              md:w-76 md:h-[360px] 
              lg:w-84 lg:h-[400px] 
              overflow-hidden 
              rounded-2xl bg-white shadow-xl 
              transition-transform hover:shadow-2xl
              ml-4
            ">
              <div className="absolute top-3 left-3 z-10 bg-red-400 text-white px-2 py-1 rounded-md text-xs sm:text-sm font-medium">
                {item.name}
              </div>
              
              <img
                src={item.cover_image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full bg-black/20 p-3 text-white 
                transition-transform duration-500 
                group-hover:translate-y-0
                translate-y-0 
                md:translate-y-full 
                md:group-hover:translate-y-0
                text-[10px] sm:text-xs md:text-sm"
              >
                <h4 className="mb-1 text-base sm:text-lg font-bold">{item.name}</h4>
                <div className="grid grid-cols-2 gap-1 sm:gap-2">
                  {item.procurement_period != '-' && (
                    <div>
                      <p className="font-medium">{t('procurementPeriod')}</p>
                      <p>{item.procurement_period}</p>
                    </div>
                  )}
                  {item.sort_of != '-' && (
                    <div>
                      <p className="font-medium">{t('grade')}</p>
                      <p>{item.sort_of}</p>
                    </div>
                  )}
                  {item.type != '-' && (
                    <div>
                      <p className="font-medium">{t('type')}</p>
                      <p>{item.type}</p>
                    </div>
                  )}
                  {item.quantity_based != '-' && (
                    <div>
                      <p className="font-medium">{t('quantityBased')}</p>
                      <p>{item.quantity_based}</p>
                    </div>
                  )}
                  {item.harvest_season != '-' && (
                    <div>
                      <p className="font-medium">{t('harvestSeason')}</p>
                      <p>{item.harvest_season}</p>
                    </div>
                  )}
                  {item.made != '-' && (
                    <div>
                      <p className="font-medium">{t('madeIn')}</p>
                      <p>{item.made}</p>
                    </div>
                  )}
                  {item.caliber != '-' && (
                    <div>
                      <p className="font-medium">{t('caliber')}</p>
                      <p>{item.caliber}</p>
                    </div>
                  )}
                </div>
                {item.job != '-' && (
                  <p className="mt-1 text-[9px] sm:text-xs text-gray-300">{item.job}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsList;