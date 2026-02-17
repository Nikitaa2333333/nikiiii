import { Category, Subcategory, Product } from '../types';

export const CATEGORIES: Category[] = [
  { "id": "general-lab", "name": "Общелабораторное оборудование", "span": "1x1" },
  { "id": "consumables", "name": "Расходные материалы", "span": "1x1" },
  { "id": "analytical", "name": "Аналитическое оборудование", "span": "1x1" },
  { "id": "thermo", "name": "Термостатирующее оборудование", "span": "1x1" },
  { "id": "measuring", "name": "Измерительные приборы", "span": "1x1" },
  { "id": "centrifuge", "name": "Центрифугирование", "span": "1x1" },
  { "id": "distillation", "name": "Дистилляция и фильтрация", "span": "1x1" },
  { "id": "pharmaceutical", "name": "Фармацевтическое оборудование", "span": "2x1" },
  { "id": "microscopes", "name": "Микроскопы и оптика", "span": "1x1" },
  { "id": "laminar", "name": "Ламинарные шкафы и вытяжки", "span": "1x1" },
  { "id": "cleaning", "name": "Очистка и стерилизация", "span": "1x1" },
  { "id": "furniture", "name": "Лабораторная мебель", "span": "1x1" }
];

export const SUBCATEGORIES: Subcategory[] = [
  { "id": "refrigerated-centrifuges", "categoryId": "centrifuge", "name": "Центрифуги с\u00A0охлаждением" },
  { "id": "non-refrigerated-centrifuges", "categoryId": "centrifuge", "name": "Центрифуги без\u00A0охлаждения" },
  { "id": "cytology-centrifuges", "categoryId": "centrifuge", "name": "Цитологические центрифуги" },
  { "id": "oil-test-centrifuges", "categoryId": "centrifuge", "name": "Центрифуги для\u00A0анализа нефтепродуктов" },
  { "id": "gel-card-centrifuges", "categoryId": "centrifuge", "name": "Центрифуги для\u00A0гелевых карт" },
  { "id": "prp-centrifuges", "categoryId": "centrifuge", "name": "Центрифуги для\u00A0косметологии (PRP-плазмалифтинг)" },
  { "id": "hematocrit-centrifuges", "categoryId": "centrifuge", "name": "Гематокритные центрифуги" },
  { "id": "cell-washer-centrifuges", "categoryId": "centrifuge", "name": "Центрифуги для\u00A0промывки клеток" },
  { "id": "ultracentrifuges", "categoryId": "centrifuge", "name": "Ультрацентрифуги" }
];
