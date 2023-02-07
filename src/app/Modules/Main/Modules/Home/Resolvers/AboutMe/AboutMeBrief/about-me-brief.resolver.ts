import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AboutMeService} from "../../../Services/AboutMe/about-me.service";
import {IBaseData} from "../../../../../../../Core/Model/Interface/Base/base-data";

@Injectable({
  providedIn: 'root'
})
export class AboutMeBriefResolver implements Resolve<IBaseData<string[]>> {
  constructor(private aboutMeService: AboutMeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBaseData<string[]>> {
    return this.aboutMeService.getAboutMeBrief();
  }
}
