export interface ProjectType {
  id?: number;
  name: string;
  stack: 'frontend' | 'backend' | 'fullstack';
  description?: string;
  frontend?: string;
  backend?: string;
  features: string[];
  projectSrc: string;
  gallery: string[];
  viewUrl?: string;
  githubUrl?: string;
}
