export type ProjectCategory = string;

export interface IProject {
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

export interface IProjectDTO {
  id: number;
  projectName: string;
  projectDetail: string;
  type: string;
  coreDevelopment: string;
  client: string;
  category: string;
  webSiteURL: string | null;
  images: string[];
  vedioUrl?: string | null;
  videoUrl?: string | null;
  iosLink?: string | null;
  androidLink?: string | null;
}
