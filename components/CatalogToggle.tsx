import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../lib/routes';

export const CatalogToggle: React.FC = () => {
    const location = useLocation();
    const isCatalog = location.pathname === ROUTES.CATALOG || (location.pathname.startsWith('/catalog') && !location.pathname.split('/')[2]);
    const isManufacturers = location.pathname === ROUTES.MANUFACTURERS;

    return (
        <div className="flex justify-center w-full py-6">
            <div className="inline-flex items-center bg-gray-100 p-1 rounded-xl shadow-sm">
                <Link
                    to={ROUTES.CATALOG}
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${isCatalog
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-transparent text-gray-500 hover:text-blue-600'
                        }`}
                >
                    По категориям
                </Link>
                <Link
                    to={ROUTES.MANUFACTURERS}
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${isManufacturers
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-transparent text-gray-500 hover:text-blue-600'
                        }`}
                >
                    По производителям
                </Link>
            </div>
        </div>
    );
};
