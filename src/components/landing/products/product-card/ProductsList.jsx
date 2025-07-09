// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';

// const ProductsList = ({ data }) => {
//   const { t } = useTranslation();
//   const [hasMoved, setHasMoved] = useState(false);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="max-w-7xl relative mx-auto w-full px-4 sm:px-6">
//       <button
//         ref={prevRef}
//         className={`custom-prev absolute top-1/2 left-2 sm:-left-12 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow transition-opacity duration-300 hover:bg-gray-100 ${hasMoved ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
//       >
//         <FaArrowLeft className="text-lg text-gray-600" />
//       </button>
//       <button
//         ref={nextRef}
//         className="custom-next absolute top-1/2 right-2 sm:-right-4 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100"
//       >
//         <FaArrowRight className="text-lg text-gray-600" />
//       </button>

//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={16}
//         slidesPerView={1.2}
//         centeredSlides={false}
//         onSlideChange={() => setHasMoved(true)}
//         onInit={(swiper) => {
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;
//           swiper.navigation.init();
//           swiper.navigation.update();
//         }}
//         loop={false}
//         breakpoints={{
//           0: {
//             slidesPerView: 1.2,
//             spaceBetween: 16,
//           },
//           480: {
//             slidesPerView: 1.5,
//             spaceBetween: 16,
//           },
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 18,
//           },
//           768: {
//             slidesPerView: 2.5,
//             spaceBetween: 18,
//           },
//           900: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//           },
//           1280: {
//             slidesPerView: 3,
//             spaceBetween: 24,
//           },
//         }}
//       >
//         {data.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="
//               group relative 
//               my-4
//               w-full h-[220px]
//               sm:w-56 sm:h-[260px]
//               md:w-72 md:h-[320px]
//               lg:w-80 lg:h-[360px]
//               xl:w-84 xl:h-[400px]
//               overflow-hidden 
//               rounded-xl sm:rounded-2xl 
//               bg-white shadow-lg sm:shadow-xl
//               transition-transform hover:shadow-xl sm:hover:shadow-2xl
//               mx-auto
//             ">

//               <img
//                 src={item.cover_image}
//                 alt={item.name}
//                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//               <div className="absolute bottom-0 left-0 w-full bg-black/30 p-2 sm:p-3 text-white 
//                 transition-transform duration-300
//                 group-hover:translate-y-0
//                 translate-y-0 
//                 md:translate-y-full 
//                 md:group-hover:translate-y-0
//                 text-[11px] sm:text-xs md:text-sm"
//               >
//                 <h4 className="mb-1 text-sm sm:text-base md:text-lg font-bold line-clamp-1">
//                   {item.name}
//                 </h4>
//                 <div className="grid grid-cols-2 gap-1 sm:gap-2">
//                   {item.procurement_period != '-' && (
//                     <div className="line-clamp-2">
//                       <p className="font-medium">{t('procurementPeriod')}</p>
//                       <p>{item.procurement_period}</p>
//                     </div>
//                   )}
//                   {item.sort_of != '-' && (
//                     <div className="line-clamp-2">
//                       <p className="font-medium">{t('grade')}</p>
//                       <p>{item.sort_of}</p>
//                     </div>
//                   )}
//                   {item.type != '-' && (
//                     <div className="line-clamp-2">
//                       <p className="font-medium">{t('type')}</p>
//                       <p>{item.type}</p>
//                     </div>
//                   )}
//                   {item.quantity_based != '-' && (
//                     <div className="line-clamp-2">
//                       <p className="font-medium">{t('quantityBased')}</p>
//                       <p>{item.quantity_based}</p>
//                     </div>
//                   )}
//                   {item.harvest_season != '-' && (
//                     <div className="line-clamp-2">
//                       <p className="font-medium">{t('harvestSeason')}</p>
//                       <p>{item.harvest_season}</p>
//                     </div>
//                   )}
//                   {item.made != '-' && (
//                     <div className="line-clamp-2">
//                       <p className="font-medium">{t('madeIn')}</p>
//                       <p>{item.made}</p>
//                     </div>
//                   )}
//                   {item.caliber != '-' && (
//                     <div className="line-clamp-2">
//                       <p className="font-medium">{t('caliber')}</p>
//                       <p>{item.caliber}</p>
//                     </div>
//                   )}
//                 </div>
//                 {item.job != '-' && (
//                   <p className="mt-1 text-[10px] sm:text-xs text-gray-200 line-clamp-2">
//                     {item.job}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ProductsList;



// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// const ProductsList = ({ data }) => {
//   const { t } = useTranslation();
//   const [showAll, setShowAll] = useState(false);

//   const visibleCards = showAll ? data : data.slice(0, 3);

//   return (
//     <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {visibleCards.map((item, index) => (
//           <div
//             key={index}
//             className="
//               group relative
//               w-full h-[220px]
//               sm:h-[260px]
//               md:h-[320px]
//               lg:h-[360px]
//               xl:h-[400px]
//               overflow-hidden
//               rounded-xl sm:rounded-2xl
//               bg-white shadow-lg sm:shadow-xl
//               transition-transform hover:shadow-xl sm:hover:shadow-2xl
//               mx-auto
//             "
//           >
//             <img
//               src={item.cover_image}
//               alt={item.name}
//               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//             <div
//               className="absolute bottom-0 left-0 w-full bg-black/30 p-2 sm:p-3 text-white
//                 transition-transform duration-300
//                 group-hover:translate-y-0
//                 translate-y-0
//                 md:translate-y-full
//                 md:group-hover:translate-y-0
//                 text-[11px] sm:text-xs md:text-sm"
//             >
//               <h4 className="mb-1 text-sm sm:text-base md:text-lg font-bold line-clamp-1">
//                 {item.name}
//               </h4>
//               <div className="grid grid-cols-2 gap-1 sm:gap-2">
//                 {item.procurement_period !== '-' && (
//                   <div className="line-clamp-2">
//                     <p className="font-medium">{t('procurementPeriod')}</p>
//                     <p>{item.procurement_period}</p>
//                   </div>
//                 )}
//                 {item.sort_of !== '-' && (
//                   <div className="line-clamp-2">
//                     <p className="font-medium">{t('grade')}</p>
//                     <p>{item.sort_of}</p>
//                   </div>
//                 )}
//                 {item.type !== '-' && (
//                   <div className="line-clamp-2">
//                     <p className="font-medium">{t('type')}</p>
//                     <p>{item.type}</p>
//                   </div>
//                 )}
//                 {item.quantity_based !== '-' && (
//                   <div className="line-clamp-2">
//                     <p className="font-medium">{t('quantityBased')}</p>
//                     <p>{item.quantity_based}</p>
//                   </div>
//                 )}
//                 {item.harvest_season !== '-' && (
//                   <div className="line-clamp-2">
//                     <p className="font-medium">{t('harvestSeason')}</p>
//                     <p>{item.harvest_season}</p>
//                   </div>
//                 )}
//                 {item.made !== '-' && (
//                   <div className="line-clamp-2">
//                     <p className="font-medium">{t('madeIn')}</p>
//                     <p>{item.made}</p>
//                   </div>
//                 )}
//                 {item.caliber !== '-' && (
//                   <div className="line-clamp-2">
//                     <p className="font-medium">{t('caliber')}</p>
//                     <p>{item.caliber}</p>
//                   </div>
//                 )}
//               </div>
//               {item.job !== '-' && (
//                 <p className="mt-1 text-[10px] sm:text-xs text-gray-200 line-clamp-2">
//                   {item.job}
//                 </p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {!showAll && data.length > 3 && (
//         <div className="mt-6 text-center">
//           <button
//             onClick={() => setShowAll(true)}
//             className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
//           >
//             {t('more')}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductsList;


import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

const ProductsList = ({ data }) => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(3); 
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
            className="group relative my-4 w-full sm:w-[calc(33.333%-1rem)] h-[360px] overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:shadow-2xl"
          >
            <img
              src={item.cover_image}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
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
