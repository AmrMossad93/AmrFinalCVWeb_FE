import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProjectService} from "../../Services/Project/project.service";
import {IProject} from "../../../Home/Models/Interfaces/Projects/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsResolver implements Resolve<IProject> {
  constructor(private projectService:ProjectService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProject> {
    let projectId = Number(route.paramMap.get('projectId'))
    return this.projectService.getProjectById(projectId)
  }
}
