import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GlobalSearch } from './GlobalSearch';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { ROUTES } from '../lib/routes';

const Header: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';



    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between gap-8">

                {/* Logo */}
                <Link to={ROUTES.HOME} className="flex items-center shrink-0 group">
                    <img
                        src="/logo.svg"
                        alt="Grafit"
                        className="h-9 w-auto object-contain"
                    />
                </Link>

                {/* Search (Centered) */}
                {!isHomePage && (
                    <div className="flex-1 max-w-2xl transition-all duration-300">
                        <GlobalSearch />
                    </div>
                )}

                {/* Contacts (Right) */}
                <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-500 shrink-0">
                    <a href="tel:+79990000000" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                        <Phone className="w-4 h-4 text-cyan-500" />
                        <span>+7 (999) 000-00-00</span>
                    </a>
                    <a href="mailto:info@graphic-lab.ru" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                        <Mail className="w-4 h-4 text-cyan-500" />
                        <span>info@graphic-lab.ru</span>
                    </a>
                    <div className="flex items-center gap-2 cursor-default">
                        <Clock className="w-4 h-4 text-cyan-500" />
                        <span>Пн-Пт 9:00-18:00</span>
                    </div>
                </div>

                {/* Mobile Menu Icon (Placeholder for future) */}
                <div className="lg:hidden">
                    <Menu className="w-6 h-6 text-gray-600" />
                </div>
            </div>
        </header>
    );
};

export default Header;
