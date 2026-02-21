import React from 'react';
import { ChevronLeft, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';

const ArticlesPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="px-4 py-12 md:py-20 max-w-4xl mx-auto">
                {/* Back Button */}
                <Link to={ROUTES.HOME} className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-700 transition-colors mb-8 group">
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>На главную</span>
                </Link>

                <div className="mb-12 border-b border-gray-100 pb-8">
                    <div className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 font-bold text-xs rounded-full uppercase tracking-wider mb-6">
                        Статья эксперта
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-[1.2] mb-6 tracking-tight">
                        IQ, OQ, PQ: Основы квалификации лабораторного оборудования (GMP)
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>21 Октября 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span>Редакция Grafit.lab</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-none text-gray-600 text-lg leading-relaxed space-y-6">
                    <p className="text-xl text-gray-700 font-medium mb-8">
                        Квалификация лабораторного оборудования (IQ/OQ/PQ) — это не просто формальность или бумажная работа, а критически важный процесс,
                        гарантирующий точность и надежность результатов ваших исследований. Разбираем по шагам, что означает каждый этап и почему он важен.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Что такое квалификация и валидация?</h2>
                    <p className="mb-6">
                        В контексте надлежащей производственной практики (GMP и GLP), любое оборудование, влияющее на качество измерений и безопасность продукции,
                        должно пройти процедуру подтверждения его пригодности.
                        Валидация — это комплексное доказательство того, что весь процесс работает как надо, а <strong>квалификация</strong> — часть этого процесса, сфокусированная именно на "железе" и ПО.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3 Кита квалификации: IQ, OQ, PQ</h2>

                    <div className="space-y-8 my-8">
                        {/* IQ Block */}
                        <div className="surface-card p-8 rounded-2xl border-l-4 border-l-cyan-500">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-4">
                                <span className="bg-cyan-100 text-cyan-700 w-10 h-10 rounded-lg flex items-center justify-center font-black">1</span>
                                IQ (Installation Qualification) — Монтажная квалификация
                            </h3>
                            <p className="text-gray-600">
                                Отвечает на вопрос: <strong>"Правильно ли мы это собрали и подключили?"</strong><br /><br />
                                На этапе IQ инженеры проверяют, что оборудование доставлено в целости, установлено в подходящих условиях (температура, влажность, отсутствие вибраций),
                                и подключено к правильным источникам питания и газов. Строго сверяются серийные номера, комплектация и наличие заводских паспортов.
                            </p>
                        </div>

                        {/* OQ Block */}
                        <div className="surface-card p-8 rounded-2xl border-l-4 border-l-purple-500">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-4">
                                <span className="bg-purple-100 text-purple-700 w-10 h-10 rounded-lg flex items-center justify-center font-black">2</span>
                                OQ (Operational Qualification) — Операционная квалификация
                            </h3>
                            <p className="text-gray-600">
                                Отвечает на вопрос: <strong>"Работает ли оно так, как обещал производитель?"</strong><br /><br />
                                Это тестовые "полеты" оборудования на пустом ходу или со стандартными образцами. Здесь калибровочными приборами замеряют, действительно ли
                                центрифуга выдает 15 000 об/мин, а термостат держит 37°C без отклонений. Проверяется работа кнопок, датчиков, дисплея и аварийных сигнализаций.
                            </p>
                        </div>

                        {/* PQ Block */}
                        <div className="surface-card p-8 rounded-2xl border-l-4 border-l-emerald-500">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-4">
                                <span className="bg-emerald-100 text-emerald-700 w-10 h-10 rounded-lg flex items-center justify-center font-black">3</span>
                                PQ (Performance Qualification) — Эксплуатационная квалификация
                            </h3>
                            <p className="text-gray-600">
                                Отвечает на вопрос: <strong>"Выполняет ли оно НАШИ задачи стабильно изо дня в день?"</strong><br /><br />
                                Самый важный этап для лаборатории. Оборудование тестируется на реальных продуктах, с типичной и экстремальной загрузкой.
                                Если это инкубатор, то проверяют, насколько равномерно прогреваются чашки Петри на всех полках, когда инкубатор полностью загружен.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Нужно ли проводить все три этапа?</h2>
                    <p className="mb-6">
                        Простые приборы (например, pH-метры или шейкеры), работа которых зависит от одного контролируемого параметра, зачастую требуют только <strong>IQ/OQ</strong>.
                        Но для сложных систем (ВЭЖХ-хроматографы, масс-спектрометры, автоклавы) полноценная трехступенчатая валидация строго обязательна.
                    </p>

                    <div className="bg-gray-50 border border-gray-100 rounded-[20px] p-8 mt-12 text-center">
                        <h4 className="font-bold text-gray-900 text-xl mb-4">Требуется помощь с валидацией оборудования?</h4>
                        <p className="text-gray-500 mb-6">
                            Инженерная служба Grafit.lab проводит полный цикл пусконаладочных работ с выдачей протоколов IQ/OQ/PQ по международным стандартам.
                        </p>
                        <button className="bg-cyan-600 hover:bg-cyan-700 transition-colors text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2">
                            Оставить заявку на сервис <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ArticlesPage;
