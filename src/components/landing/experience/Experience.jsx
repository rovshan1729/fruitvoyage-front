import React from 'react';
import Card from './card/Card';

const Experience = () => {
  return (
    <div className='w-full bg-gray-100'>
      <div className='mx-auto max-w-7xl px-4 py-16 flex flex-col items-center justify-center gap-8 sm:flex-row sm:justify-center sm:items-center md:justify-between md:items-center'>
        <Card number='5+' text='лет опыта в сфере поставок сельхоз продукции во всему миру' />
        <Card number='80+' text='партнеров фермерский-хозяйств по всему Узбекистану' />
        <Card number='$14 млн' text='общая стоимость заключенных контрактов в 2021 году' />
      </div>
    </div>
  );
};

export default Experience;
