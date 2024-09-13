import { DefaultOptionType } from "antd/es/select";
import { IMenuElement } from "../components";
import tara from "./../asserts/tara_city_coa.gif";
import { ECategories } from "../app/types";
import sport from "../asserts/iconsNew/sport.svg";
import beauty from "../asserts/iconsNew/beauty.svg";
import houses from "../asserts/iconsNew/houses.svg";
import business from "../asserts/iconsNew/business.svg";
import culture from "../asserts/iconsNew/culture.svg";
import heritage from "../asserts/iconsNew/heritage.svg";
import education from "../asserts/iconsNew/education.svg";
import services from "../asserts/iconsNew/services.svg";
import transport from "../asserts/iconsNew/transport.svg";
import nature from "../asserts/iconsNew/nature.svg";
import medicine from "../asserts/iconsNew/medicine.svg";
import other from "../asserts/iconsNew/other.svg";

// export const API_URL = "https://xn-----8kcnbetcdkli0enad2ac7t.xn--p1ai/api";

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
    name: "УЧАСТИЕ",
    link: "/form",
  },
  {
    name: "КАРТА ИДЕЙ",
    link: "/map",
  },
];

export const CATEGORIES: DefaultOptionType[] = [
  { value: "beutification", label: "Благоустройство" },
  { value: "houses", label: "Жилье" },
  {
    value: "transport",
    label: "Транспорт и дороги",
  },
  {
    value: "medicine",
    label: "Медицина",
  },
  { value: "education", label: "Образование" },
  { value: "sport", label: "Спорт" },

  { value: "heritage", label: "Историческое  наследие" },
  { value: "culture", label: "Культура" },

  { value: "services", label: "Сфера услуг" },

  {
    value: "business",
    label: "Бизнес и производства",
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
    label: "18-25",
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
    value: "youngSenior",
    label: "56-65",
  },
  {
    value: "senior",
    label: "старше 65",
  },
];

export const RELATION: DefaultOptionType[] = [
  {
    value: "tara1",
    label: "Живу в Таре менее года",
  },
  {
    value: "tara3",
    label: "Живу в Таре 1-3 года",
  },
  {
    value: "tara7",
    label: "Живу в Таре 4-7 лет",
  },
  {
    value: "tara10",
    label: "Живу в Таре более 10 лет",
  },
  {
    value: "taraAllLife",
    label: "Живу в Таре всю жизнь",
  },
  {
    value: "taraRegion",
    label: "Живу в Тарском районе",
  },
  {
    value: "omskRegion",
    label: "Живу в другом районе Омской области",
  },
  {
    value: "omsk",
    label: "Живу в Омске",
  },
  {
    value: "otherRegion",
    label: "Живу в другом регионе",
  },
  {
    value: "other",
    label: "Прочее",
  },
];

export const TAG_COLORS: { [key in ECategories]: string } = {
  [ECategories.beutification]: "#81AB2A",
  [ECategories.houses]: "#584E35",
  [ECategories.transport]: "#37576C",
  [ECategories.nature]: "#8C8244",
  [ECategories.medicine]: "#DC7759",
  [ECategories.education]: "#D4A43A",
  [ECategories.services]: "#79B0D7",
  [ECategories.sport]: "#4F6225",
  [ECategories.business]: "#D9D08F",
  [ECategories.culture]: "#805835",
  [ECategories.heritage]: "#A53D31",
  [ECategories.other]: "#807864",
};

export const ICON_COMPONENTS: { [key in ECategories]: string } = {
  [ECategories.beutification]: beauty,
  [ECategories.houses]: houses,
  [ECategories.heritage]: heritage,
  [ECategories.education]: education,
  [ECategories.sport]: sport,
  [ECategories.services]: services,
  [ECategories.transport]: transport,
  [ECategories.nature]: nature,
  [ECategories.medicine]: medicine,
  [ECategories.other]: other,
  [ECategories.culture]: culture,
  [ECategories.business]: business,
};
