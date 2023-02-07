import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ExperienceService} from "../../Services/Experience/experience.service";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IExperience} from "../../Models/Interfaces/Experience/experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceResolver implements Resolve<IBaseData<IExperience[]>> {
  constructor(private experienceService: ExperienceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBaseData<IExperience[]>> {
    return this.experienceService.getExperience();
  }
}
