export interface ILoginProps {
  email: string;
  password: string;
}

export interface IAuthState {
  user: IUserState | null;
  status: string;
  errorMessage?: string;
}

export interface IUserState {
  email?: string;
  password?: string;
}

export enum ECategories {
  beutification = "beutification",
  houses = "houses",
  heritage = "heritage",
  culture = "culture",
  business = "business",
  medicine = "medicine",
  education = "education",
  sport = "sport",
  services = "services",
  transport = "transport",
  nature = "nature",
  other = "other",
}

export enum EAges {
  veryYoung = "veryYoung",
  young = "young",
  youngMiddle = "youngMiddle",
  middle = "middle",
  lateMiddle = "lateMiddle",
  senior = "senior",
}

export enum ERelation {
  live = "live",
  work = "work",
  born = "born",
  other = "other",
}

export interface IIdeaState {
  _id: string;
  category: ECategories;
  coordinates: { lat: number; lng: number; _id: string };
  ideaName: string;
  idea: string;
  name: string;
  age: EAges;
  relation: ERelation;
  contacts: string;
  confirmed: boolean;
}
