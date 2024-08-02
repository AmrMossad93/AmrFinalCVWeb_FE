import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ExperienceService} from "../../Services/Experience/experience.service";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IExperience} from "../../Model/Interface/Experience/experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceResolver implements Resolve<IExperience[]> {
  constructor(private experienceService: ExperienceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IExperience[]> {
    return this.experienceService.getExperience();
  }
}
