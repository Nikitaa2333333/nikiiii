import React from 'react';
import { Link } from 'react-router-dom';
import {
  Package,
  ChevronRight,
  Zap,
  ShieldCheck,
  Truck,
  Users,
  FileText,
  Wrench,
  Award,
  Newspaper,
  BookOpen,
  Book,
  ClipboardCheck,
  Microscope,
  Briefcase
} from 'lucide-react';
import { ROUTES } from '../lib/routes';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 lg:px-12 z-40 overflow-hidden w-full">
        {/* Simple gradient background */}
        <div className="absolute inset-0 overflow-hidden -z-10 bg-slate-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(241,245,249,1)_0%,rgba(248,250,252,1)_100%)]"></div>
        </div>

        <div className="max-w-[1920px] mx-auto text-center relative z-20">
          <div className="-mx-4 sm:mx-0">
            <h1 className="text-[12.5vw] sm:text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] mb-10 tracking-tighter w-full px-1">
              Современное <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                лабораторное
              </span>
              <br className="sm:hidden" /> оборудование
            </h1>
          </div>
          <p className="max-w-xl mx-auto px-4 text-lg md:text-2xl text-gray-500 font-medium leading-relaxed mb-12 opacity-80">
            Профессиональные решения для лабораторий. Точность, надежность и передовые технологии.
          </p>

          <Link
            to={ROUTES.CATALOG}
            className="inline-flex items-center gap-4 bg-gray-900 text-white px-10 py-6 rounded-full text-xl font-bold shadow-lg hover:bg-cyan-600 transition-colors group"
          >
            <span>Перейти в каталог</span>
            <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 md:px-8 lg:px-12 pb-24 relative z-10">
        <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: <Zap className="w-6 h-6" />, label: "Быстрая доставка", sub: "По всей России" },
            { icon: <ShieldCheck className="w-6 h-6" />, label: "Контроль качества", sub: "Сертификаты ISO" },
            { icon: <Truck className="w-6 h-6" />, label: "Бесплатный расчёт", sub: "КП за 15 минут" },
            { icon: <Package className="w-6 h-6" />, label: "Надёжная упаковка", sub: "По стандартам" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/80 shadow-md p-6 md:p-8 rounded-[24px] flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-cyan-600 text-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1">{item.label}</h4>
              <p className="text-sm text-gray-400 font-medium">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Information Sections Grid */}
      <section className="px-4 md:px-8 lg:px-12 pb-40 relative z-10">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Полезная информация</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { id: 'team', name: 'Наша команда', icon: <Users className="w-6 h-6" /> },
              { id: 'policy', name: 'Политика компании', icon: <FileText className="w-6 h-6" /> },
              { id: 'service', name: 'Сервис', icon: <Wrench className="w-6 h-6" /> },
              { id: 'cert', name: 'Сертификаты и лицензии', icon: <Award className="w-6 h-6" /> },
              { id: 'news', name: 'Новости и мероприятия', icon: <Newspaper className="w-6 h-6" /> },
              { id: 'articles', name: 'Статьи и публикации', icon: <BookOpen className="w-6 h-6" /> },
              { id: 'manuals', name: 'Инструкции и сервисные мануалы', icon: <Book className="w-6 h-6" /> },
              { id: 'protocols', name: 'IQ/OQ и т.д протоколы', icon: <ClipboardCheck className="w-6 h-6" /> },
              { id: 'methods', name: 'Методики', icon: <Microscope className="w-6 h-6" /> },
              { id: 'portfolio', name: 'Портфолио', icon: <Briefcase className="w-6 h-6" /> },
            ].map((section) => (
              <Link
                key={section.id}
                to={`/${section.id}`}
                className="surface-card flex flex-col items-center justify-center p-6 rounded-[20px] text-center group hover:border-cyan-500/50"
              >
                <div className="text-cyan-600 mb-4 group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  {section.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;