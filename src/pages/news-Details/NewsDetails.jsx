import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link, useParams } from "react-router-dom";
import { getNewsById } from "src/services/news";
import dayjs from 'dayjs';
import DOMPurify from 'dompurify';
import Navbar from "@components/ui/Navbar";

const NewsDetails = () => {
    const { i18n } = useTranslation();
    const params = useParams();
    const [newData, setNewData] = useState(null);

    const fetchNewData = async () => {
        const newdata = await getNewsById(params.id, i18n.language);
        const { title, content, image, created_at, name } = newdata;
        setNewData({ title, content, image, created_at, name });
    };

    useEffect(() => {
        fetchNewData();
    }, [i18n.language]);

    if (!newData) return <div className="text-center py-10 text-gray-500">Loading...</div>;

    const safeHTML = DOMPurify.sanitize(typeof newData.content === 'string' ? newData.content : '');
    const formattedDate = dayjs(newData.created_at).format('YYYY-MM-DD');

    return (
        <div className="max-w-7xl mx-auto px-4">
            <Navbar />

            <div className="text-lg text-gray-500 mt-8">
                <Link className="text-green-600 hover:underline" to="/">Home</Link>
                <span className="mx-2">/</span>
                <Link className="text-green-600 hover:underline" to="/news">News</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-800 font-medium">{newData.title}</span>
            </div>

            <div>
                <h3 className="text-3xl mt-2 font-semibold">{newData.title}</h3>
                <p className="mt-2 text-gray-500 text-sm">{formattedDate}</p>
            </div>
            {newData.image && (
                <img
                    src={newData.image}
                    alt="News"
                    className="w-full h-[600px] object-cover my-6"
                />
            )}
            <div
                className="prose max-w-none prose-img:rounded-lg prose-p:leading-7"
                dangerouslySetInnerHTML={{ __html: safeHTML }}
            />
        </div>
    );
};

export default NewsDetails;
