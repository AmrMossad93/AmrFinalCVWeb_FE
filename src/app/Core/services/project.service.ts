import { Injectable } from '@angular/core';
import { Observable, of, map, tap, shareReplay } from 'rxjs';
import { Project, ProjectCategory } from '../models/project.model';
import { DataService } from './Data/data.service';

interface ProjectsJsonResponse {
  success: boolean;
  errorMessage: string | null;
  data: ProjectJson[];
}

interface ProjectJson {
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

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects$: Observable<Project[]> | null = null;

  constructor(private dataService: DataService) {}

  private loadProjectsData(): Observable<Project[]> {
    if (this.projects$) {
      return this.projects$;
    }

    this.projects$ = this.dataService.getJson<ProjectsJsonResponse>('projects.json').pipe(
      map(response => {
        if (response && response.success && response.data) {
          return response.data.map(pj => this.mapToProject(pj));
        }
        return [];
      }),
      shareReplay(1)
    );

    return this.projects$;
  }

  private mapToProject(pj: ProjectJson): Project {
    const technologies = pj.coreDevelopment
      ? pj.coreDevelopment.split(',').map(t => t.trim()).filter(t => t.length > 0)
      : [];

    // Fix image paths: replace 'assets/Me/Images/' with 'Images/'
    const fixPath = (path: string) => path.replace('assets/Me/Images/', 'Images/');
    const gallery = (pj.images || []).map(fixPath);

    return {
      id: pj.id.toString(),
      name: pj.projectName,
      description: pj.projectDetail,
      fullDescription: pj.projectDetail,
      category: pj.category,
      technologies: technologies,
      githubUrl: pj.webSiteURL || '#',
      demoUrl: pj.webSiteURL || '#',
      imageUrl: gallery.length > 0 ? gallery[0] : undefined,
      gallery: gallery,
      featured: false,
      completionDate: '',
      features: [],
      client: pj.client,
      type: pj.type,
      iosLink: pj.iosLink,
      androidLink: pj.androidLink
    };
  }

  getProjects(
    page: number = 1,
    pageSize: number = 12,
    category?: string,
    tech?: string,
    search?: string
  ): Observable<{ projects: Project[], total: number }> {
    return this.loadProjectsData().pipe(
      map(allProjects => {
        let filtered = [...allProjects];

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
            p.category.toLowerCase().includes(s) ||
            (p.client && p.client.toLowerCase().includes(s)) ||
            p.technologies.some(t => t.toLowerCase().includes(s))
          );
        }

        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginated = filtered.slice(start, end);

        return {
          projects: paginated,
          total: filtered.length
        };
      })
    );
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.loadProjectsData().pipe(
      map(allProjects => allProjects.find(p => p.id === id))
    );
  }

  getAllCategories(): Observable<string[]> {
    return this.loadProjectsData().pipe(
      map(allProjects => {
        const categories = new Set<string>();
        allProjects.forEach(p => categories.add(p.category));
        return Array.from(categories).sort();
      })
    );
  }

  getAllTechnologies(): Observable<string[]> {
    return this.loadProjectsData().pipe(
      map(allProjects => {
        const techs = new Set<string>();
        allProjects.forEach(p => p.technologies.forEach(t => techs.add(t)));
        return Array.from(techs).sort();
      })
    );
  }
}
