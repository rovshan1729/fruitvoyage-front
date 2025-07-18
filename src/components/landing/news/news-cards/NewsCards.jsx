import React, { useEffect, useState } from 'react';
import NewCard from './new-card/NewCard';
import { useTranslation } from 'react-i18next';
import { getNews } from 'src/services/news';
import { Link } from 'react-router-dom';

const NewsCards = ({ ismore }) => {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const news = await getNews(i18n.language);
    setNews(news);
  };

  useEffect(() => {
    fetchNews();
  }, [i18n.language]);

  return (
    <div className='mx-auto my-12 max-w-[1200px] px-4 text-center'>
      <h2 className='mb-8 text-2xl font-bold md:text-3xl'>{t('news')}</h2>
      <div className='flex flex-wrap justify-start gap-8 pt-6'>
        {(ismore ? news.slice(0, 3) : news).map((item) => (
          <NewCard
            id={item.id}
            key={item.id}
            image={item.image}
            created_at={item.created_at}
            title={item.title}
            content={item.link}
          />
        ))}
      </div>
      {ismore && (
        <Link
          to='/news'
          className='mt-12 inline-block rounded bg-green-500 px-6 py-2 text-white transition hover:bg-green-700'
        >
          {t('allNews')}
        </Link>
      )}
    </div>
  );
};

export default NewsCards;
