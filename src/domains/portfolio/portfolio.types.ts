export type NavLink = {
  num: string;
  label: string;
  href: string;
};

export type Stat = {
  num: string;
  plus: string;
  label: string;
  desc: string;
};

export type Skill = {
  name: string;
  meta: string;
  /** Proficiency percent (0-100) - drives skill-bar fill width. */
  w: number;
  featured?: boolean;
  span?: "span-4";
  num: string;
};

export type ProjectSize = "large" | "med" | "small";

export type Project = {
  num: string;
  tag: string;
  size: ProjectSize;
  year: string;
  title: string;
  tags: string[];
  glyph: string;
  c1: string;
  c2: string;
};

export type Service = {
  num: string;
  title: string;
  desc: string;
  deliv: string[];
  from: number;
};

export type ProcessStep = {
  num: string;
  title: string;
  desc: string;
  dur: string;
};

export type Testimonial = {
  stars: number;
  quote: string;
  name: string;
  role: string;
  country: string;
  date: string;
  avatar: string;
  platform: string;
  sourceUrl?: string;
  featured?: boolean;
};
