import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProjectsService} from "../../Services/Projects/projects.service";
import {IProject} from "../../Model/Interface/Projects/project";


@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsResolver implements Resolve<IProject> {
  constructor(private projectService: ProjectsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProject> {
    let projectId = Number(route.paramMap.get('id'));
    return this.projectService.getProjectById(projectId)
  }
}
