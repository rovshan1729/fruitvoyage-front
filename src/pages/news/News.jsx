import NewsCards from "@components/landing/news/news-cards/NewsCards";
import Navbar from "@components/ui/Navbar";
import React from "react";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <Navbar />
            <div className="text-lg text-gray-500 mt-8">
                <Link className="text-green-600 hover:underline" to="/">Home</Link>
                <span className="mx-2">/</span>
                <Link className="text-green-600 hover:underline" to="/news">News</Link>
            </div>
            <NewsCards ismore={false} />
        </div>
    )
}

export default News;