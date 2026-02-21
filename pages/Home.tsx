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
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 px-4 z-40 overflow-hidden">
        {/* Hero Background - Animated Chemical Molecules */}
        <div className="absolute inset-0 overflow-hidden -z-10 bg-slate-50 flex items-center justify-center">
          {/* A larger container for the background to ensure it spans the whole screen width and a bit more for spinning, fading out at the edges */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] md:w-[150vw] md:h-[150vw] opacity-[0.20]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 20L94.641 40L94.641 80L60 100L25.359 80L25.359 40L60 20Z' fill='none' stroke='%230891B2' stroke-width='2'/%3E%3Ccircle cx='60' cy='20' r='5' fill='%230891B2'/%3E%3Ccircle cx='94.641' cy='40' r='5' fill='%230891B2'/%3E%3Ccircle cx='94.641' cy='80' r='5' fill='%230891B2'/%3E%3Ccircle cx='60' cy='100' r='5' fill='%230891B2'/%3E%3Ccircle cx='25.359' cy='80' r='5' fill='%230891B2'/%3E%3Ccircle cx='25.359' cy='40' r='5' fill='%2310B981'/%3E%3Cpath d='M60 100L60 120M60 20L60 0M25.359 40L8.038 30M94.641 40L111.962 30M94.641 80L111.962 90M25.359 80L8.038 90' stroke='%2310B981' stroke-width='2'/%3E%3C/svg%3E")`,
              backgroundSize: '160px 160px',
              backgroundPosition: 'center',
            }}></div>
          {/* Radial gradient mask to fade out the SVG towards the edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(248,250,252,1)_70%)]"></div>
          {/* Linear gradient for bottom fade out */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-20">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter">
            Современное <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              лабораторное
            </span>
            <br className="hidden sm:block" /> оборудование
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-500 font-medium leading-relaxed mb-12 opacity-80">
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
      <section className="px-4 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
      <section className="px-4 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Полезная информация</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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