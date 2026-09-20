export type Locale = 'pt' | 'en';

export type Localized<T = string> = {
  pt: T;
  en: T;
};

export type ProjectStatus =
  | 'Functional / Near-Complete'
  | 'In Development'
  | 'Planning / Data Modeling Stage'
  | 'Completed as Study Exercise';

export type StatusBadgeVariant =
  | 'functional'
  | 'inDevelopment'
  | 'planning'
  | 'study';

export interface StatusBadge {
  label: Localized<string>;
  variant: StatusBadgeVariant;
}

export interface ProjectLinks {
  repo?: string;
  demo?: string;
  hasLiveDemo: boolean;
  noDemoReason?: Localized<string>;
}

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  statusPt: string;
  statusBadge: StatusBadge;
  pitch: Localized<string>;
  description: Localized<string>;
  architecture: Localized<string>;
  stack: string[];
  links: ProjectLinks;
  isFlagship?: boolean;
  isComplementary?: boolean;
}

export interface Principle {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
}

export interface JournalPost {
  slug: string;
  title: Localized<string>;
  date: string;
  readingTime: string;
  summary: Localized<string>;
  content: Localized<string>;
  tags: string[];
}

export interface ProfileInfo {
  name: string;
  headline: Localized<string>;
  subheadline?: Localized<string>;
  availability: Localized<string>;
  location: Localized<string>;
  email: string;
  github: string;
  linkedin: string;
  resumePdf: string;
}

export interface LearningTopic {
  id: string;
  topic: Localized<string>;
  category: Localized<string>;
  status: Localized<string>;
  description: Localized<string>;
  focusAreas: Localized<string[]>;
}

export interface AboutSection {
  title: Localized<string>;
  paragraphs: Localized<string[]>;
  quickFacts: Array<{
    label: Localized<string>;
    value: Localized<string>;
  }>;
}

