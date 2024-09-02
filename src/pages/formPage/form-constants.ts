import { DefaultOptionType } from "antd/es/select";

export const CATEGORIES: DefaultOptionType[] = [
  { value: "beutification", label: "Благоустройство" },
  { value: "buildings", label: "Городская застройка" },
  { value: "heritage", label: "Историческое и культурное наследие" },

  {
    value: "medicine",
    label: "Медицина",
  },
  { value: "education", label: "Образование" },
  { value: "sport", label: "Спорт" },
  { value: "services", label: "Сфера услуг" },

  {
    value: "transport",
    label: "Транспорт",
  },
  {
    value: "nature",
    label: "Экология",
  },
  {
    value: "other",
    label: "Другое",
  },
];

export const CATEGORIES_AND_ALL: DefaultOptionType[] = CATEGORIES.concat({
  value: "all",
  label: "Все категории",
});

export const AGES: DefaultOptionType[] = [
  {
    value: "veryYoung",
    label: "до 18",
  },
  {
    value: "young",
    label: "19-25",
  },
  {
    value: "youngMiddle",
    label: "26-35",
  },
  {
    value: "middle",
    label: "36-45",
  },
  {
    value: "lateMiddle",
    label: "46-55",
  },
  {
    value: "senior",
    label: "56 и страше",
  },
];

export const RELATION: DefaultOptionType[] = [
  {
    value: "live",
    label: "Живу",
  },
  {
    value: "work",
    label: "Работаю (но не живу)",
  },
  {
    value: "born",
    label: "Родился (но не живу, и не работаю)",
  },
  {
    value: "other",
    label: "Другое",
  },
];
