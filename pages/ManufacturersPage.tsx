import React from 'react';
import { Link } from 'react-router-dom';
import { MANUFACTURERS } from '../lib/data';
import { ROUTES } from '../lib/routes';
import { CatalogToggle } from '../components/CatalogToggle';

const ManufacturersPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen pb-24">

            {/* Manufacturers Grid */}
            <section className="px-4 md:px-8 lg:px-12 pt-4 pb-8">
                <CatalogToggle />
                <div className="max-w-[1920px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {MANUFACTURERS.map((brand) => (
                            <div
                                key={brand.id}
                                className="surface-card group h-32 rounded-[20px] flex items-center justify-center p-8 relative overflow-hidden flex-shrink-0"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManufacturersPage;
