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
    img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2024-08/freeze-dried-strawberries-mc-240815-f7165f.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://www.marthastewart.com/thmb/zuVPWBs9t_88rMQRiaW9FjxRAMI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freeze-dried-fruit-on-hand-getty-0123-2000-67a13f9b0b3d4b9b954b953532e3dc71.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://www.veramiklas.com/wp-content/uploads/2020/04/freeze-dried-mixed-fruit4-scaled.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://chaucerfoods.com/wp-content/uploads/2024/09/Peach_Raspberry_Group-1-scaled-e1725574602443-1024x683.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://www.thedailymeal.com/img/gallery/the-proper-way-to-store-freeze-dried-fruit/does-freeze-dried-fruit-stay-nutritious-1702914516.jpg',
  },
];

const Fd = () => {
  return (
    <ProductsList data={testimonials}/>
  );
};

export default Fd;
