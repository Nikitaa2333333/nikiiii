import React from 'react';
import { Link } from 'react-router-dom';
import { MANUFACTURERS } from '../lib/data';
import { ROUTES } from '../lib/routes';
import { CatalogToggle } from '../components/CatalogToggle';
import { ChevronRight } from 'lucide-react';

const ManufacturersPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen pb-24">

            {/* Manufacturers Grid */}
            <section className="px-4 md:px-8 lg:px-12 pt-4 pb-8">
                <CatalogToggle />
                <div className="max-w-[1920px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {MANUFACTURERS.map((brand) => (
                            <Link
                                key={brand.id}
                                to={ROUTES.MANUFACTURER(brand.id)}
                                className="surface-card group relative rounded-[24px] h-56 flex flex-col items-center justify-end p-4 overflow-hidden border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-cyan-300 hover:shadow-[0_10px_40px_rgba(14,165,233,0.1)] transition-all duration-500 bg-white"
                            >
                                {/* Огромный логотип во всю плашку */}
                                <div className="absolute inset-4 sm:inset-6 flex items-center justify-center transition-all duration-500 transform group-hover:scale-[1.15]">
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="w-full h-full object-contain mix-blend-multiply"
                                    />
                                </div>

                                {/* Название поверх логотипа (как "парящая" таблетка) */}
                                <div className="relative z-10 w-full flex justify-center transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                    <span className="text-xs sm:text-sm font-extrabold text-gray-900 group-hover:text-cyan-700 transition-colors text-center bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-50 max-w-full truncate">
                                        {brand.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManufacturersPage;
