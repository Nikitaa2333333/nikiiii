import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import {
    Book, AlertOctagon, Clock, Thermometer, Droplet, Activity,
    Microscope, BarChart3, ShieldCheck, Beaker, Zap, Info, ArrowDownRight, Check
} from 'lucide-react';

const MethodsPage: React.FC = () => {
    const breadcrumbItems = [{ label: 'Методики' }];

    return (
        <div className="flex flex-col min-h-screen bg-[#FDFEFF] pb-24 font-sans">
            {/* Header / Hero Section */}
            <div className="relative pt-12 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="mt-12 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-cyan-100 text-cyan-600 text-xs font-black uppercase tracking-widest mb-8">
                            <Activity className="w-4 h-4 animate-pulse" /> Scientific Protocol
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6 break-words">
                            Тайная жизнь <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 italic">вашей пробирки</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                            Почему 75% точности диагноза зависит не от врача, а от 15 минут вращения в роторе? Разбираем физику и биологию преаналитики.
                        </p>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Statistics Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <BarChart3 className="w-24 h-24" />
                        </div>
                        <div className="text-5xl font-black mb-4 text-cyan-400">68%</div>
                        <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">Laboratory Risk</div>
                        <p className="text-slate-300">Ошибок происходит именно на этапе подготовки пробы (Preanalytical phase).</p>
                    </div>

                    <div className="bg-cyan-600 rounded-[32px] p-8 text-white relative overflow-hidden group">
                        <div className="text-5xl font-black mb-4">3.3%</div>
                        <div className="text-cyan-100 text-sm font-bold uppercase tracking-widest mb-4">Hemolysis Rate</div>
                        <p className="text-cyan-50">Средний показатель брака из-за гемолиза при неправильном вращении.</p>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
                        <div className="text-5xl font-black text-slate-900 mb-4">2.0</div>
                        <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">RCF Multiplier</div>
                        <p className="text-slate-600">Разница в точности между использованием ротора с углом и бакетного ротора.</p>
                    </div>
                </section>

                {/* Infographic: Blood Layers */}
                <section className="mb-24">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight break-words">
                                Архитектура <br className="hidden sm:block" />разделения фракций
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 hover:border-cyan-200 transition-all cursor-default group">
                                    <div className="w-2 rounded-full bg-yellow-400 h-auto"></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Плазма / Сыворотка (верхний слой)</h4>
                                        <p className="text-slate-500 text-sm">Здесь живут белки, глюкоза и электролиты. Идеальная прозрачность — залог успеха.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 hover:border-cyan-200 transition-all cursor-default group">
                                    <div className="w-2 rounded-full bg-slate-200 h-auto"></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 italic">Buffy Coat (тонкая белая полоска)</h4>
                                        <p className="text-slate-500 text-sm">Тромбоциты и лейкоциты. Самый ценный слой для ПРП-терапии и генетики.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 hover:border-cyan-200 transition-all cursor-default group">
                                    <div className="w-2 rounded-full bg-red-600 h-auto"></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Эритроцитарная масса (дно)</h4>
                                        <p className="text-slate-500 text-sm">Самые тяжелые клетки. Если они разрушатся (гемолиз) — анализ испорчен.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative w-48 h-96 bg-slate-200 rounded-full border-8 border-white shadow-2xl overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-[45%] bg-yellow-400/80 animate-pulse"></div>
                                <div className="absolute top-[45%] left-0 w-full h-[3%] bg-white/95 shadow-[0_0_20px_rgba(255,255,255,1)] z-10"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[52%] bg-red-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/10"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scientific Deep Dive */}
                <section className="mb-24 bg-blue-50/50 rounded-[48px] p-8 md:p-16 border border-blue-100">
                    <div className="flex items-center gap-4 mb-12">
                        <Beaker className="w-10 h-10 text-cyan-600" />
                        <h2 className="text-3xl font-black text-slate-900">Научное подтверждение</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-cyan-500" /> Исследование LDH
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Научная работа <em>(Lippi G, 2013)</em> доказала: при повышении скорости центрифугирования с 2000g до 3500g, уровень Лактатдегидрогеназы (LDH) ложно возрастает на <strong>14%</strong> уже через 5 минут. Это ведет к ложной диагностике повреждения тканей.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-amber-500" /> Феномен «Гелевого барьера»
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Стандарт <strong>CLSI GP44-A4</strong> рекомендует бакет-роторы. В угловых роторах гель ложится по диагонали. При охлаждении он сжимается, открывая «окно» для диффузии клеток обратно в плазму, что искажает калий (K+) на <strong>0.5 ммоль/л</strong> за 24 часа.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="space-y-2">
                                <h4 className="text-sm font-black text-cyan-700 uppercase tracking-widest mb-6">Comparative Matrix</h4>
                                {[
                                    { label: "Точность разделения", correct: "Высокая", bad: "Риск контаминации" },
                                    { label: "Выход тромбоцитов", correct: "До 98%", bad: "Потеря до 35%" },
                                    { label: "Температурная стабильность", correct: "20-22°C", bad: "Нагрев до 45°C" },
                                ].map((row, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 border-b border-slate-200 group gap-4 sm:gap-0">
                                        <span className="text-slate-600 font-bold group-hover:text-slate-900 transition-colors">{row.label}</span>
                                        <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                                            <span className="px-3 md:px-4 py-1.5 bg-emerald-100 text-emerald-700 text-[10px] md:text-xs font-black rounded-full uppercase tracking-tighter whitespace-nowrap">{row.correct}</span>
                                            <span className="px-3 md:px-4 py-1.5 bg-rose-100 text-rose-700 text-[10px] md:text-xs font-black rounded-full uppercase tracking-tighter whitespace-nowrap">{row.bad}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA / Contact */}
                <section className="bg-slate-900 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-blue-900/20 to-transparent"></div>
                    <div className="relative z-10 w-full">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-tight break-words">
                            Доверьте точность <br className="hidden sm:block" /> профессионалам
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
                            Мы подберем центрифугу, которая сделает вашу преаналитику безупречной. Соответствие стандартам CLSI гарантировано.
                        </p>
                        <button className="bg-white text-slate-900 px-12 py-6 rounded-full text-xl font-black hover:bg-cyan-400 hover:text-white transition-all shadow-2xl active:scale-95">
                            Получить консультацию
                        </button>
                    </div>
                </section>

                {/* Scientific Sources Footer */}
                <div className="mt-20 border-t border-slate-100 pt-10 pb-20 opacity-50">
                    <h5 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-4">Literature Sources</h5>
                    <ul className="text-[10px] text-slate-400 space-y-2 max-w-xl italic">
                        <li>1. Lippi G, et al. Preanalytical variability: the dark side of the moon in laboratory testing. Clin Chem Lab Med 2006.</li>
                        <li>2. Clinical and Laboratory Standards Institute (CLSI). Procedures for the Handling and Processing of Blood Specimens for Common Laboratory Tests; GP44-A4.</li>
                        <li>3. WHO Guidelines on Drawing Blood: Best Practices in Phlebotomy.</li>
                    </ul>
                </div>

            </main>
        </div>
    );
};

export default MethodsPage;
