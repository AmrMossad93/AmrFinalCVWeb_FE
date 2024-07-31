import {Injectable} from '@angular/core';
import {
  Resolve
} from '@angular/router';
import {Observable} from 'rxjs';
import {AboutMeService} from "../../../Services/AboutMe/about-me.service";
import {IBasicInfo} from "../../../Model/Interface/AboutMe/basic-info";

@Injectable({
  providedIn: 'root'
})
export class BasicInfoResolver implements Resolve<IBasicInfo> {
  constructor(private aboutMeService: AboutMeService) {
  }

  resolve(): Observable<IBasicInfo> {
    return this.aboutMeService.getBasicInfo();
  }
}
