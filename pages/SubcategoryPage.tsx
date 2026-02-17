import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SUBCATEGORIES } from '../lib/data';
import { useProducts } from '../context/ProductContext';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowRight, LayoutGrid, Check, ChevronRight, FileText, MessageSquare } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { ROUTES } from '../lib/routes';
import clsx from 'clsx';

const SubcategoryPage: React.FC = () => {
  const { categoryId, subcategoryId } = useParams<{ categoryId: string; subcategoryId: string }>();
  const navigate = useNavigate();
  const { getProductsBySubcategory, loading } = useProducts();
  const { openModal, openPDFModal } = useModal();
  const [sortBy, setSortBy] = useState<'name' | 'stock'>('name');
  const [displayCount, setDisplayCount] = useState(24);

  // Получаем текущую подкатегорию
  const currentSubcategory = SUBCATEGORIES.find(s => s.id === subcategoryId);

  // Логика фильтрации и сортировки товаров
  const allProducts = useMemo(() => {
    if (!subcategoryId) return [];
    const list = getProductsBySubcategory(subcategoryId);
    return sortBy === 'name'
      ? [...list].sort((a, b) => a.name.localeCompare(b.name))
      : [...list].sort((a, b) => (a.inStock === b.inStock ? 0 : a.inStock ? -1 : 1));
  }, [subcategoryId, sortBy, getProductsBySubcategory]);

  const displayedProducts = allProducts.slice(0, displayCount);

  // Сбрасываем пагинацию при смене категории
  React.useEffect(() => {
    setDisplayCount(24);
    window.scrollTo(0, 0);
  }, [subcategoryId]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-400 font-bold tracking-widest animate-pulse">Загрузка...</div>;
  if (!currentSubcategory) return <div className="p-20 text-center">Категория не найдена</div>;

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs />

      <div className="flex flex-col lg:flex-row gap-8 mt-4 md:mt-8 relative items-start">
        {/* CATEGORY SELECTOR */}
        <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-20 z-10 transition-all">
          <div className="bg-white/50 backdrop-blur-md rounded-2xl border border-blue-50/50 p-2 shadow-sm lg:max-h-[85vh] lg:overflow-y-auto custom-scrollbar">

            {/* Mobile: Horizontal Title */}
            <h3 className="lg:hidden text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-2 pt-1">
              Категории
            </h3>

            {/* Container for scrollable list */}
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar -mx-2 px-2 lg:mx-0 lg:px-0 scroll-smooth snap-x">
              {SUBCATEGORIES.map((cat) => {
                const isActive = cat.id === subcategoryId;
                return (
                  <Link
                    key={cat.id}
                    to={ROUTES.SUBCATEGORY(categoryId!, cat.id)}
                    className={clsx(
                      "flex-shrink-0 snap-start whitespace-normal px-4 py-2.5 rounded-xl text-xs font-bold transition-colors duration-200 border w-auto lg:w-full text-left flex items-center justify-between group leading-tight",
                      isActive
                        ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                        : "bg-white text-gray-500 border-transparent hover:bg-blue-50 hover:text-blue-700"
                    )}
                  >
                    <span>{cat.name}</span>
                    <ChevronRight className={clsx("hidden lg:block w-3 h-3 transition-opacity", isActive ? "text-gray-400" : "opacity-0 group-hover:opacity-100 text-blue-400")} />
                  </Link>
                );
              })}
            </div>

            {/* Desktop Title */}
            <h3 className="hidden lg:block text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2 px-4 mt-2 border-t border-gray-100 pt-3">
              Все категории
            </h3>
          </div>
        </aside>

        {/* MAIN CONTENT (Сетка товаров) */}
        <main className="flex-1 min-w-0 pb-20">
          {/* Header категории */}
          <div className="bg-white rounded-3xl p-6 md:p-8 mb-6 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 relative overflow-hidden">

            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-full -mr-16 -mt-16 opacity-50 pointer-events-none" />

            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-2 leading-tight">
                {currentSubcategory.name}
              </h1>

            </div>


          </div>

          {/* Grid товаров */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-400 transition-colors duration-200 flex flex-col h-full group"
                >
                  <div className="aspect-[1.1] bg-white relative p-6 flex items-center justify-center border-b border-gray-50">
                    <img
                      src={(product.images && product.images.length > 0 ? product.images[0] : `https://placehold.co/600x600/f1f5f9/94a3b8?text=${encodeURIComponent(product.name)}`)}
                      alt={product.name}
                      className="max-width-full max-height-full object-contain mix-blend-multiply"
                      loading="lazy"
                    />

                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <div className="flex flex-col gap-2 mb-6">
                      {product.description.split(',').map((part, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 leading-tight">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-1.5" />
                          <span>{part.trim()}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-3 flex items-center gap-2 justify-start">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openPDFModal('/brochure.pdf');
                        }}
                        className="bg-gray-900 text-white px-4 py-2.5 rounded-xl text-[11px] font-semibold hover:bg-black transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Открыть PDF</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openModal(product.name);
                        }}
                        className="bg-white text-gray-700 border border-gray-200 px-4 py-2.5 rounded-xl text-[11px] font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex items-center gap-2 shadow-sm active:scale-95 whitespace-nowrap"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
                        <span>Запросить предложение</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-300 text-6xl mb-4 font-black opacity-20">¯\_(ツ)_/¯</p>
                <p className="text-gray-900 font-bold mb-1">В этой категории пока пусто</p>
                <p className="text-gray-400 text-sm">Попробуйте выбрать другую категорию</p>
              </div>
            )}
          </div>

          {displayCount < allProducts.length && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={() => setDisplayCount(prev => prev + 24)}
                className="group relative bg-gray-900 text-white font-bold text-sm px-10 py-4 rounded-xl hover:shadow-lg transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Показать еще ({allProducts.length - displayCount})
                </span>
                <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SubcategoryPage;
