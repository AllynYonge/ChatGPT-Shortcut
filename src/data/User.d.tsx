export type User = {
  title: string;
  description: string;
  desc_cn: string;
  remark: string;
  title_en: string;
  desc_en: string;
  remark_en: string;
  website: string | null;
  tags: TagType[];
  id: number;
};

export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | "favorite"
  | "write"
  | "article"
  | "code"
  | "ai"
  | "living"
  | "interesting"
  | "life"
  | "social"
  | "philosophy"
  | "mind"
  | "pedagogy"
  | "academic"
  | "games"
  | "tool"
  | "interpreter"
  | "language"
  | "speech"
  | "comments"
  | "text"
  | "company"
  | "seo"
  | "doctor"
  | "finance"
  | "music"
  | "professional"
  | "contribute"
  | "pm"
  | "ui/ux"
  | "personal"
  | "latest";

export type Tag = {
  label: string;
  description: string;
  color: string;
};
