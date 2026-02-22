import { Category, Subcategory, Manufacturer } from '../types';

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

export const MANUFACTURERS: Manufacturer[] = [
    { id: 'yingtai', name: 'Yingtai Instrument', logo: '/manufacturers/yingtai.png' },
    { id: 'eppendorf', name: 'Eppendorf', logo: '/manufacturers/eppendorf.png' },
    { id: 'biobase', name: 'Biobase', logo: '/manufacturers/biobase.png' },
    { id: 'thermo-fisher', name: 'Thermo Fisher Scientific', logo: '/manufacturers/thermofisher.png' },
    { id: 'ika', name: 'IKA', logo: '/manufacturers/ika.png' },
    {
        id: 'memmert',
        name: 'Memmert GmbH + Co.KG',
        logo: '/manufacturers/memmert.png',
        brandColor: '#D30F24',
        description: 'С момента основания в 1933 году Memmert всегда был и остается надежным партнером для своих клиентов, что является одной из основополагающих причин успеха бренда. Сейчас компания Memmert занимет почетное место среди ведущих производителей термостатирующего оборудования для различных применений.',
        highlights: [
            'биологические, химические и пищевые исследования',
            'испытания промышленных материалов и компонентов',
            'широкий спектр тестов качества в сложных производственных процессах',
            'медицина и ветеринария'
        ],
        subcategories: [
            'Климатические камеры',
            'Инкубаторы',
            'Сушильные шкафы',
            'Испытательные камеры',
            'Водяные бани',
            'СО2-Инкубаторы'
        ]
    },
];
