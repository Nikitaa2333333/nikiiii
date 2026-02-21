import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../lib/routes';

export const CatalogToggle: React.FC = () => {
    const location = useLocation();
    const isCatalog = location.pathname === ROUTES.CATALOG || (location.pathname.startsWith('/catalog') && !location.pathname.split('/')[2]);
    const isManufacturers = location.pathname === ROUTES.MANUFACTURERS;

    return (
        <div className="flex justify-center w-full pt-2 pb-6">
            <div className="inline-flex items-center bg-white border border-slate-200/60 p-1.5 rounded-full shadow-soft-sm">
                <Link
                    to={ROUTES.CATALOG}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isCatalog
                        ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                        : 'bg-transparent text-slate-500 hover:text-cyan-600 hover:bg-slate-50'
                        }`}
                >
                    По категориям
                </Link>
                <Link
                    to={ROUTES.MANUFACTURERS}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isManufacturers
                        ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                        : 'bg-transparent text-slate-500 hover:text-cyan-600 hover:bg-slate-50'
                        }`}
                >
                    По производителям
                </Link>
            </div>
        </div>
    );
};
