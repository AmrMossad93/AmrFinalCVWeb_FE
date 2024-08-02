import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProjectsService} from "../../Services/Projects/projects.service";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IProject} from "../../Model/Interface/Projects/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolver implements Resolve<IProject[]> {
  constructor(private projectsService: ProjectsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProject[]> {
    return this.projectsService.getProjectList()
  }
}
