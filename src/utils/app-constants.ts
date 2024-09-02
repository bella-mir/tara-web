import { DefaultOptionType } from "antd/es/select";
import { IMenuElement } from "../components";
import tara from "./../asserts/tara_city_coa.gif";
import { ECategories } from "../app/types";
import sport from "../asserts/icons/sport.svg";
import beauty from "../asserts/icons/beauty.svg";
import build from "../asserts/icons/build.svg";
import heritage from "../asserts/icons/heritage.svg";
import education from "../asserts/icons/education.svg";
import services from "../asserts/icons/services3.svg";
import transport from "../asserts/icons/transport.svg";
import nature from "../asserts/icons/nature.svg";
import medicine from "../asserts/icons/medicine4.svg";
import other from "../asserts/icons/search.svg";

export const API_URL = "https://xn-----8kcnbetcdkli0enad2ac7t.xn--p1ai/api";

export const TITLE = {
  name: "Идеи для Города",
  isTitle: true,
  icon: tara,
  link: "/",
};

export const MENU: IMenuElement[] = [
  {
    name: "О ПРОЕКТЕ",
    link: "/#about",
  },
  {
    name: "СОУЧАСТИЕ",
    link: "/form",
  },
  {
    name: "КАРТА ИДЕЙ",
    link: "/map",
  },
  // {
  //   name: "Ваши идеи",
  //   link: "/ideas",
  // },
  // {
  //   name: "Вопросы и ответы",
  //   link: "/faq",

  // },
  // {
  //   name: "Предложить",
  //   link: "/form",
  //   isButton: true,
  // },
];

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

export const TAG_COLORS: { [key in ECategories]: string } = {
  [ECategories.beutification]: "#F6863C",
  [ECategories.buildings]: "#000000",
  [ECategories.heritage]: "#89398E",
  [ECategories.education]: "#F2DD0C",
  [ECategories.sport]: "#90CAE9",
  [ECategories.services]: "#CD5E63",
  [ECategories.transport]: "#56547D",
  [ECategories.nature]: "#458A42",
  [ECategories.medicine]: "#4A9BD5",
  [ECategories.other]: "#BEB15A",
};

export const ICON_COMPONENTS: { [key in ECategories]: string } = {
  [ECategories.beutification]: beauty,
  [ECategories.buildings]: build,
  [ECategories.heritage]: heritage,
  [ECategories.education]: education,
  [ECategories.sport]: sport,
  [ECategories.services]: services,
  [ECategories.transport]: transport,
  [ECategories.nature]: nature,
  [ECategories.medicine]: medicine,
  [ECategories.other]: other,
};
