import React from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NewCard = ({ id, image, created_at, title, content}) => {
    const { t } = useTranslation();
    
    const formattedDate = dayjs(created_at).format('YYYY-MM-DD');

    return (
        <div className="max-w-[350px] text-left shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded">
            <img
                src={image}
                alt="News"
                className="w-full h-[220px] object-cover rounded-tl rounded-tr"
            />
            <div className='p-3'>
                <p className="mt-2 text-gray-500 text-sm">{formattedDate}</p>
                <h3 className="text-lg mt-2 font-semibold line-clamp-2">{title}</h3>
                <Link
                    to={`/news/${id}`}
                    className="text-green-600 mt-2 inline-block font-medium hover:underline"
                >
                    {t('moreDetails')}
                </Link>
            </div>
        </div>
    );
};

export default NewCard;
