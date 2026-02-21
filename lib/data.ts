import { Category, Subcategory } from '../types';

export const CATEGORIES: Category[] = [
    { id: 'general-lab', name: 'Общелабораторное оборудование', span: '1x1' },
    { id: 'consumables', name: 'Расходные материалы', span: '1x1' },
    { id: 'analytical', name: 'Аналитическое оборудование', span: '1x1' },
    { id: 'thermo', name: 'Термостатическое оборудование', span: '1x1' },
    { id: 'measuring', name: 'Измерительные приборы', span: '1x1' },
    { id: 'centrifuge', name: 'Центрифугирование', span: '1x1' },
    { id: 'distillation', name: 'Дистилляция и фильтрация', span: '1x1' },
    { id: 'pharmaceutical', name: 'Фармацевтическое оборудование', span: '1x1' },
    { id: 'microscopes', name: 'Микроскопия', span: '1x1' },
    { id: 'laminar', name: 'Ламинарные шкафы и боксы', span: '1x1' },
    { id: 'cleaning', name: 'Очистка и стерилизация', span: '1x1' },
    { id: 'furniture', name: 'Лабораторная мебель', span: '1x1' },
    { id: 'chemicals', name: 'Химические реактивы и стандартные образцы', span: '1x1' },
    { id: 'microbiology', name: 'Микробиология', span: '1x1' },
    { id: 'domestic', name: 'Отечественные производители', span: '1x1' },
    { id: 'in-stock', name: 'В наличии на складе', span: '1x1' }
];

export const SUBCATEGORIES: Subcategory[] = [
    { id: 'low-speed', categoryId: 'centrifuge', name: 'Центрифуги низкоскоростные' },
    { id: 'high-speed', categoryId: 'centrifuge', name: 'Центрифуги высокоскоростные' },
    { id: 'micro-mini', categoryId: 'centrifuge', name: 'Микро-центрифуги и мини-центрифуги' },
    { id: 'floor-large-capacity', categoryId: 'centrifuge', name: 'Напольные центрифуги большого объема' },
    { id: 'cytology', categoryId: 'centrifuge', name: 'Цитологические центрифуги' },
    { id: 'petroleum', categoryId: 'centrifuge', name: 'Центрифуги для анализа нефтепродуктов' },
    { id: 'gel-cards', categoryId: 'centrifuge', name: 'Центрифуги для гелевых карт' },
    { id: 'cosmetology-prp', categoryId: 'centrifuge', name: 'Центрифуги для косметологии (PRP -плазмалифтинг)' },
    { id: 'hematocrit', categoryId: 'centrifuge', name: 'Гематокритные центрифуги' },
    { id: 'cell-washing', categoryId: 'centrifuge', name: 'Центрифуги для промывки клеток' },
    { id: 'ultracentrifuge', categoryId: 'centrifuge', name: 'Ультрацентрифуги' }
];

export const MANUFACTURERS = [
    { id: 'yingtai', name: 'Yingtai Instrument', logo: 'https://cdn.brandfetch.io/yingtai.com/w/400/h/400' },
    { id: 'eppendorf', name: 'Eppendorf', logo: 'https://cdn.brandfetch.io/eppendorf.com/w/400/h/400' },
    { id: 'biobase', name: 'Biobase', logo: 'https://cdn.brandfetch.io/biobase.cc/w/400/h/400' },
    { id: 'thermo-fisher', name: 'Thermo Fisher Scientific', logo: 'https://cdn.brandfetch.io/thermofisher.com/w/400/h/400' },
    { id: 'ika', name: 'IKA', logo: 'https://cdn.brandfetch.io/ika.com/w/400/h/400' },
    { id: 'memmert', name: 'Memmert', logo: 'https://cdn.brandfetch.io/memmert.com/w/400/h/400' },
];
