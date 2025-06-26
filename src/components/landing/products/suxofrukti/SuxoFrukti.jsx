import React from 'react';
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
    img: 'https://st25.stpulscen.ru/images/product/583/795/704_medium2.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://good-product.kh.ua/content/uploads/images/2024/izim-gold.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://kievsad.com.ua/sites/default/files/styles/webp/public/product/type-tree/2024-01/3-480x480.jpg.webp?itok=4137KCgf',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://halal-spb.ru/sites/default/files/products/img-8717_0.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://images.prom.ua/3361802668_w700_h500_izyum-svetlyj-bez.jpg',
  },
];

const SuxoFrukti = () => {
  return (
    <ProductsList data={testimonials}/>
  );
};

export default SuxoFrukti;
