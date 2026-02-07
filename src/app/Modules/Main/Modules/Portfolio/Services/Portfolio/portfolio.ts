import {inject, Injectable} from '@angular/core';
import {DataService} from '../../../../../../Core/services/Data/data.service';
import {Observable, map, shareReplay} from 'rxjs';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {PORTFOLIO_API_NAME} from '../../DTO/API/PORTFOLIO_API_NAME';
import {IProject, IProjectDTO} from '../../DTO/Interface/Project/project';

@Injectable({
  providedIn: 'root',
})
export class Portfolio {
  private readonly dataService = inject(DataService);
  private projects$: Observable<IProject[]> | null = null;

  private loadProjectsData(): Observable<IProject[]> {
    if (this.projects$) {
      return this.projects$;
    }

    this.projects$ = this.dataService.getJson<IBase<IProjectDTO[]>>(PORTFOLIO_API_NAME.PROJECTS).pipe(
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

  private mapToProject(pj: IProjectDTO): IProject {
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

  getProjects(): Observable<IProject[]> {
    return this.loadProjectsData();
  }

  getProjectById(id: string): Observable<IProject | undefined> {
    return this.loadProjectsData().pipe(
      map(allProjects => allProjects.find(p => p.id === id))
    );
  }

  getCategories(): Observable<string[]> {
    return this.loadProjectsData().pipe(
      map(allProjects => {
        const categories = new Set<string>();
        allProjects.forEach(p => categories.add(p.category));
        return Array.from(categories).sort();
      })
    );
  }

  getTechnologies(): Observable<string[]> {
    return this.loadProjectsData().pipe(
      map(allProjects => {
        const techs = new Set<string>();
        allProjects.forEach(p => p.technologies.forEach(t => techs.add(t)));
        return Array.from(techs).sort();
      })
    );
  }
}
