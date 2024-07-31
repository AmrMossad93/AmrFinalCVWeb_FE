import {Injectable} from '@angular/core';
import {
  Resolve
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AboutMeService} from "../../../Services/AboutMe/about-me.service";
import {IAboutMe} from "../../../Model/Interface/AboutMe/about-me";

@Injectable({
  providedIn: 'root'
})
export class AboutMeBriefResolver implements Resolve<IAboutMe> {
  constructor(private aboutMeService: AboutMeService) {
  }

  resolve(): Observable<IAboutMe> {
    return this.aboutMeService.getAboutMeBrief();
  }
}
