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
}

export type ProjectCategory = 'Web Development' | 'Mobile Apps' | 'AI & Machine Learning' | 'Cloud Solutions' | 'Cybersecurity' | 'Blockchain';
