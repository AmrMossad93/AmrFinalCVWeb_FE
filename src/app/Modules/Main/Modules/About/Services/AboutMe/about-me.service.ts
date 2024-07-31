import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {DataService} from "../../../../../../Core/Services/Data/data.service";
import {ABOUT_ME} from "../../Model/Constants/ABOUT_ME_API_NAME";
import {IBasicInfo} from "../../Model/Interface/AboutMe/basic-info";
import {IAboutMe} from "../../Model/Interface/AboutMe/about-me";

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private dataService: DataService) {
  }

  getAboutMeBrief(): Observable<IAboutMe> {
    return this.dataService.getAPI(ABOUT_ME.BRIEF)
  }

  getBasicInfo(): Observable<IBasicInfo> {
    return this.dataService.getAPI(ABOUT_ME.BASIC_INFO)
  }
}
