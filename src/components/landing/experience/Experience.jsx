import React from 'react';
import Card from './card/Card';
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation();
  
  return (
    <div className='w-full bg-gray-100'>
      <div className='mx-auto max-w-7xl px-4 py-16 flex flex-col items-center justify-center gap-8 sm:flex-row sm:justify-center sm:items-center md:justify-between md:items-center'>
        <Card number='6+' text={t('exports')}/>
        <Card number='60+' text={t('network')} />
        <Card number='13' text={t('geography')} />
      </div>
    </div>
  );
};

export default Experience;
