import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductsList from '../product-card/ProductsList';

const testimonials = [
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://5.imimg.com/data5/ECOM/Default/2023/2/TX/WH/MO/18764362/super-healthy-mix-food-nuts-seeds-dry-fruits-543-500x500.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://shop.tulsidas.com/cdn/shop/collections/nuts-dried-fruits-194404.jpg?v=1685168547',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKyll4lZC0pWBcKxpxu_nugDuXLDZeEP4LQ&s',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/types-of-nuts-almonds.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/3542/n1214d16207251417404.jpg',
  },
];

const Nuts = () => {

  return (
   <ProductsList data={testimonials}/>
  );
};

export default Nuts;
