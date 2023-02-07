import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AboutMeService} from "../../../Services/AboutMe/about-me.service";
import {IBaseData} from "../../../../../../../Core/Model/Interface/Base/base-data";
import {IBasicInfo} from "../../../Models/Interfaces/AboutMe/basic-info";

@Injectable({
  providedIn: 'root'
})
export class BasicInfoResolver implements Resolve<IBaseData<IBasicInfo>> {
  constructor(private aboutMeService: AboutMeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBaseData<IBasicInfo>> {
    return this.aboutMeService.getBasicInfo();
  }
}
