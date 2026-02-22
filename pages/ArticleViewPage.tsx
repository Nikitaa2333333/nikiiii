import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ARTICLES } from '../lib/articlesData';
import { ROUTES } from '../lib/routes';
import Breadcrumbs from '../components/Breadcrumbs';
import { ChevronLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const ArticleViewPage: React.FC = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const navigate = useNavigate();

    const article = ARTICLES.find(a => a.id === articleId);

    if (!article) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Статья не найдена</h2>
                <button
                    onClick={() => navigate(ROUTES.ARTICLES)}
                    className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Ко всем статьям
                </button>
            </div>
        );
    }

    const breadcrumbItems = [
        { label: 'Статьи и публикации', path: ROUTES.ARTICLES },
        { label: article.title }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white pb-24">
            {/* Breadcrumbs */}
            <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8 w-full">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <main className="flex-1 max-w-4xl mx-auto px-4 md:px-8 pb-10 w-full">

                {/* Article Header */}
                <header className="mb-10 mt-2 md:mt-4">
                    <div className="flex items-center justify-between mb-8">
                        <span className="bg-cyan-50 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm inline-block">
                            {article.category}
                        </span>
                        <div className="flex gap-2 text-gray-400">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Поделиться">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8 tracking-tight">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium border-t border-b border-gray-100 py-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            {article.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            {article.readTime} чтения
                        </div>
                    </div>
                </header>

                {/* Hero Image */}
                <div className="mb-12 rounded-[24px] overflow-hidden shadow-lg">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-auto object-cover max-h-[500px]"
                    />
                </div>

                {/* Article Content */}
                <article
                    className="prose prose-lg md:prose-xl prose-slate max-w-none 
                        prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight 
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-cyan-600 hover:prose-a:text-cyan-700 
                        prose-strong:text-gray-900 prose-strong:font-bold
                        prose-li:text-gray-600 prose-li:my-2
                        prose-img:rounded-2xl"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Footer Navigation */}
                <div className="mt-20 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <Link
                        to={ROUTES.ARTICLES}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-600 font-semibold transition-colors group px-6 py-3 rounded-xl hover:bg-cyan-50"
                    >
                        <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                        Вернуться к списку статей
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default ArticleViewPage;
