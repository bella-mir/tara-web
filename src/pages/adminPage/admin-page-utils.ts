import { AGES, CATEGORIES, RELATION } from "../../utils/app-constants";

const categoryLabels: Record<string, string> = CATEGORIES.reduce(
  (acc, { value, label }) => {
    //@ts-ignore
    acc[value] = label;
    return acc;
  },
  {} as Record<string, string>
);

export const getCategoryLabel = (value: string): string =>
  categoryLabels[value] || value;

export const getFormMode = (value: string): string =>
  value == "problem" ? "Проблема" : "Идея";

// Age Mapping
const ageLabels: Record<string, string> = AGES.reduce(
  (acc, { value, label }) => {
    //@ts-ignore
    acc[value] = label;
    return acc;
  },
  {} as Record<string, string>
);

export const getAgeLabel = (value: string): string => ageLabels[value] || value;

// Relation Mapping
const relationLabels: Record<string, string> = RELATION.reduce(
  (acc, { value, label }) => {
    //@ts-ignore
    acc[value] = label;
    return acc;
  },
  {} as Record<string, string>
);

export const getRelationLabel = (value: string): string =>
  relationLabels[value] || value;
