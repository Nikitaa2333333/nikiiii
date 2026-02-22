import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../lib/articlesData';
import { ROUTES } from '../lib/routes';
import Breadcrumbs from '../components/Breadcrumbs';
import { BookOpen, Calendar, Clock, ChevronRight } from 'lucide-react';

const ArticlesPage: React.FC = () => {
    const breadcrumbItems = [
        { label: 'Статьи и публикации' }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pb-24">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-4 w-full">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 pb-12 w-full">
                <div className="mb-12 mt-2 md:mt-4">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                        Статьи и публикации
                    </h1>
                    <p className="text-lg text-gray-500 max-w-3xl leading-relaxed">
                        Полезные материалы, обзоры технологий и научные статьи о применении лабораторного оборудования от экспертов компании Grafit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ARTICLES.map((article) => (
                        <Link
                            key={article.id}
                            to={ROUTES.ARTICLE(article.id)}
                            className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-cyan-500/30 transition-all duration-300 flex flex-col group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-cyan-700 shadow-sm">
                                    {article.category}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                                    {article.title}
                                </h3>

                                <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-1 leading-relaxed">
                                    {article.summary}
                                </p>

                                <div className="mt-auto flex items-center text-cyan-600 font-semibold text-sm group-hover:text-cyan-700">
                                    Читать статью
                                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ArticlesPage;
