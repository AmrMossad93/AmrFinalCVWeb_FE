import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProjectsService} from "../../Services/Projects/projects.service";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IProject} from "../../Models/Interfaces/Projects/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolver implements Resolve<IBaseData<IProject[]>> {
  constructor(private projectsService: ProjectsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBaseData<IProject[]>> {
    return this.projectsService.getProjectList()
  }
}
