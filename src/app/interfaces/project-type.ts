export interface ProjectType {
  id?: number;
  name: string;
  stack: 'frontend' | 'backend';
  frontend?: string;
  backend?: string;
  features: string[];
  projectSrc: string;
  gallery: string[];
  viewUrl?: string;
  githubUrl?: string;
}
