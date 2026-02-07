export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl?: string;
  gallery: string[];
  featured?: boolean;
  completionDate: string;
  features: string[];
  client?: string;
  type?: string;
  iosLink?: string | null;
  androidLink?: string | null;
}

export type ProjectCategory = string;
