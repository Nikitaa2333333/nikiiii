import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MANUFACTURERS, SUBCATEGORIES } from '../lib/data';
import { ROUTES } from '../lib/routes';
import { useModal } from '../context/ModalContext';
import Breadcrumbs from '../components/Breadcrumbs';
import { ChevronLeft, CheckCircle2, MessageSquare, ArrowRight, LayoutGrid, ChevronRight } from 'lucide-react';

const ManufacturerPage: React.FC = () => {
    const { manufacturerId } = useParams<{ manufacturerId: string }>();
    const navigate = useNavigate();
    const { openModal } = useModal();

    const manufacturer = MANUFACTURERS.find(m => m.id === manufacturerId);

    if (!manufacturer) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Производитель не найден</h2>
                <button
                    onClick={() => navigate(ROUTES.MANUFACTURERS)}
                    className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
                >
                    <ChevronLeft className="w-4 h-4" />
                    К списку производителей
                </button>
            </div>
        );
    }

    const breadcrumbItems = [
        { label: 'Производители', path: ROUTES.MANUFACTURERS },
        { label: manufacturer.name }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pb-24">
            {/* Breadcrumbs */}
            <div className="max-w-5xl mx-auto px-4 md:px-8 pt-8 w-full">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <main className="flex-1 max-w-5xl mx-auto px-4 md:px-8 pb-10 w-full">
                {/* Header (Article style) */}
                <header className="mb-16 mt-2 md:mt-4">
                    <div className="mb-8 block">
                        <img
                            src={manufacturer.logo}
                            alt={`Логотип ${manufacturer.name}`}
                            className="h-16 md:h-20 w-auto object-contain transition-all duration-500 transform-gpu"
                        />
                    </div>

                    <h1
                        className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight"
                        style={{ color: manufacturer.brandColor || '#020617' }}
                    >
                        {manufacturer.name}
                    </h1>

                    {manufacturer.description && (
                        <p className="text-lg md:text-xl text-gray-500 max-w-4xl leading-relaxed">
                            {manufacturer.description}
                        </p>
                    )}
                </header>
                {/* Categories Grid */}
                {manufacturer.subcategories && manufacturer.subcategories.length > 0 && (
                    <div className="flex flex-col mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                                <LayoutGrid className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                                Оборудование {manufacturer.name}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {manufacturer.subcategories.map((sub, idx) => {
                                // Ищем реальную подкатегорию по имени, чтобы получить её ID
                                const matchedSub = SUBCATEGORIES.find(s =>
                                    s.name.toLowerCase().includes(sub.toLowerCase()) ||
                                    sub.toLowerCase().includes(s.name.toLowerCase())
                                );

                                if (matchedSub) {
                                    return (
                                        <Link
                                            key={idx}
                                            to={ROUTES.SUBCATEGORY(matchedSub.categoryId, matchedSub.id)}
                                            className="surface-card group relative rounded-[20px] p-6 h-32 flex flex-col justify-start overflow-hidden hover:border-cyan-500/50 cursor-pointer"
                                        >
                                            <span className="text-base font-bold text-gray-900 leading-tight group-hover:text-cyan-600 transition-colors pr-8 z-10">
                                                {sub}
                                            </span>
                                            <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-cyan-600">
                                                <ChevronRight className="w-5 h-5" />
                                            </div>
                                        </Link>
                                    );
                                }

                                return (
                                    <div
                                        key={idx}
                                        className="surface-card group relative rounded-[20px] p-6 h-32 flex flex-col justify-start overflow-hidden opacity-50 cursor-not-allowed"
                                    >
                                        <span className="text-base font-bold text-gray-900 leading-tight pr-8 z-10">
                                            {sub}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Catalogs Section */}
                {manufacturer.catalogs && manufacturer.catalogs.length > 0 && (
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                                Каталоги {manufacturer.name}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {manufacturer.catalogs.map((catalog, idx) => (
                                <a
                                    key={idx}
                                    href={catalog.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="surface-card group relative rounded-[24px] p-8 flex items-center gap-6 hover:border-orange-500/50 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-down"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M12 18v-6" /><path d="M9 15l3 3 3-3" /></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                                            {catalog.name}
                                        </span>
                                        <span className="text-sm text-gray-500 font-medium">
                                            Открыть PDF • 37.4 MB
                                        </span>
                                    </div>
                                    <div className="absolute right-8 text-gray-300 group-hover:text-orange-500 transition-colors">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ManufacturerPage;
