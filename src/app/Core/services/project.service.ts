import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, ProjectCategory } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];

  constructor() {
    this.generateMockProjects();
  }

  private generateMockProjects() {
    const categories: ProjectCategory[] = ['Web Development', 'Mobile Apps', 'AI & Machine Learning', 'Cloud Solutions', 'Cybersecurity', 'Blockchain'];
    const techs = ['Angular', 'React', 'Vue', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes', 'TypeScript', 'RxJS', 'Tailwind CSS', 'Solidity', 'Go'];

    const categoryImageKeywords: Record<ProjectCategory, string[]> = {
      'Web Development': ['website', 'code', 'ui-design', 'laptop', 'developer', 'startup'],
      'Mobile Apps': ['app', 'smartphone', 'mobile-ui', 'touch', 'phone', 'interface'],
      'AI & Machine Learning': ['robot', 'brain', 'data', 'chip', 'cyber', 'neural'],
      'Cloud Solutions': ['server', 'cloud', 'datacenter', 'network', 'storage', 'database'],
      'Cybersecurity': ['security', 'lock', 'hacker', 'privacy', 'shield', 'key'],
      'Blockchain': ['crypto', 'bitcoin', 'chain', 'ledger', 'ether', 'wallet']
    };

    for (let i = 1; i <= 105; i++) {
      const category = categories[i % categories.length];
      const projectTechs = techs.sort(() => 0.5 - Math.random()).slice(0, 3 + (i % 3));
      const keywords = categoryImageKeywords[category];
      
      // gallery size of 24 images per project with mixed orientations
      const gallery = Array.from({ length: 24 }).map((_, idx) => {
        const isVertical = idx % 3 === 0;
        const width = isVertical ? 800 : 1600;
        const height = isVertical ? 1200 : 1000;
        return `https://images.unsplash.com/photo-${1600000000000 + (i * 100) + idx}?auto=format&fit=crop&q=80&w=${width}&h=${height}&q=${keywords[idx % keywords.length]}`;
      });

      this.projects.push({
        id: i.toString(),
        name: `Project ${i}: ${this.getProjectSuffix(i, category)}`,
        description: `An innovative ${category.toLowerCase()} solution focused on ${projectTechs[0]} and ${projectTechs[1]}.`,
        fullDescription: `This project, ${i.toString()}, is a comprehensive exploration of ${category}. It demonstrates high-level architecture using ${projectTechs.join(', ')}. The system is designed for high availability and performance, catering to enterprise needs in the ${category} space. By integrating ${projectTechs[0]} with modern cloud infrastructure, we've created a solution that scales effortlessly while maintaining a top-tier user experience.`,
        category: category,
        technologies: projectTechs,
        githubUrl: '#',
        demoUrl: '#',
        completionDate: '2025-10-15',
        features: [
          'Enterprise-grade security and encryption',
          'Scalable microservices architecture with Docker',
          'Real-time data processing and analytics',
          'Advanced dashboard with custom visualizations',
          'Multi-platform support and synchronization',
          'Comprehensive API documentation and integration'
        ],
        featured: i % 10 === 0,
        gallery: gallery,
        imageUrl: gallery[0]
      });
    }
  }

  private getProjectSuffix(i: number, category: ProjectCategory): string {
    const suffixes: Record<ProjectCategory, string[]> = {
      'Web Development': ['E-commerce Platform', 'CMS System', 'Social Dashboard', 'Real-time Chat'],
      'Mobile Apps': ['Fitness Tracker', 'Recipe App', 'Travel Guide', 'Budget Manager'],
      'AI & Machine Learning': ['Predictive Analytics', 'Image Classifier', 'NLP Bot', 'Recommendation Engine'],
      'Cloud Solutions': ['Infrastructure Auto-scaler', 'Multi-cloud Manager', 'Serverless API', 'Cloud Storage'],
      'Cybersecurity': ['Intrusion Detector', 'VPN Client', 'Auth Gateway', 'Security Scanner'],
      'Blockchain': ['DeFi Protocol', 'NFT Marketplace', 'Smart Contract Auditor', 'Supply Chain Tracker']
    };
    const options = suffixes[category];
    return options[i % options.length];
  }

  getProjects(
    page: number = 1,
    pageSize: number = 12,
    category?: string,
    tech?: string,
    search?: string
  ): Observable<{ projects: Project[], total: number }> {
    let filtered = [...this.projects];

    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }

    if (tech) {
      filtered = filtered.filter(p => p.technologies.includes(tech));
    }

    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(s) || 
        p.description.toLowerCase().includes(s) ||
        p.technologies.some(t => t.toLowerCase().includes(s))
      );
    }

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginated = filtered.slice(start, end);

    return of({
      projects: paginated,
      total: filtered.length
    });
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return of(this.projects.find(p => p.id === id));
  }

  getAllCategories(): string[] {
    return ['Web Development', 'Mobile Apps', 'AI & Machine Learning', 'Cloud Solutions', 'Cybersecurity', 'Blockchain'];
  }

  getAllTechnologies(): string[] {
    const techs = new Set<string>();
    this.projects.forEach(p => p.technologies.forEach(t => techs.add(t)));
    return Array.from(techs).sort();
  }
}
