import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {EducationService} from "../../Services/Education/education.service";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IEducation} from "../../Models/Interfaces/Education/education";

@Injectable({
  providedIn: 'root'
})
export class EducationResolver implements Resolve<IBaseData<IEducation[]>> {
  constructor(private educationService:EducationService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBaseData<IEducation[]>> {
    return this.educationService.getEducationList()
  }
}
