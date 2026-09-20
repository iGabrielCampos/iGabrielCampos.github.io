export type ProjectStatus =
  | 'functional'
  | 'in-development'
  | 'inDevelopment'
  | 'planning'
  | 'exercise'
  | 'study'
  | 'Functional / Near-Complete'
  | 'Functional / Concluded'
  | 'In Development'
  | 'Planning / Data Modeling Stage'
  | 'Completed as Study Exercise';

export type NormalizedStatus = 'functional' | 'development' | 'planning' | 'exercise';

export interface StatusConfig {
  classes: string;
  dotClasses: string;
  pulseClasses: string;
  labelEn: string;
  labelPt: string;
  ariaLabel: string;
}
