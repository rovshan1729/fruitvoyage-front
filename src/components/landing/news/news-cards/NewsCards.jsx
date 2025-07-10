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
        <div className="max-w-[1200px] mx-auto px-4 text-center my-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{t('news')}</h2>
            <div className="flex flex-wrap justify-start gap-8 pt-6">
                {(ismore ? news.slice(0, 3) : news).map(item => (
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
                    to="/news"
                    className="inline-block mt-12 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
                >
                    {t('allNews')}
                </Link>
            )}
        </div>
    );
};

export default NewsCards;
