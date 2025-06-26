import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../product-card/ProductsList';

const testimonials = [
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://s8.stc.all.kpcdn.net/family/wp-content/uploads/2022/02/ogurzi_polza_i_vred_oblogka_960-560x420.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://karpaty-ua.org.ua/images/kuhnja/polza-ovoschey_1.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://gorpol39.spb.ru/wp-content/uploads/2023/02/%D0%B7%D0%B5%D0%BB-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://www.agroinvestor.ru/upload/iblock/48c/48c90d647e61ac498bcc3ab04432d162.jpg',
  },
  {
    name: 'Изюм голден',
    srok: 'Срок: 7-10 дней',
    sort: 'Сорт: Голден',
    sezon: 'Сезон: Август',
    adres: 'Происхождение: Самарканд',
    kalibr: 'Калибр: 130-240гр в 100шт',
    img: 'https://www.advantour.com/img/uzbekistan/cuisine/fruits-vegetables3.jpg',
  },
];

const SvejieFrukti = () => {

  return (
    <ProductCard data={testimonials}/>
  );
};

export default SvejieFrukti;
