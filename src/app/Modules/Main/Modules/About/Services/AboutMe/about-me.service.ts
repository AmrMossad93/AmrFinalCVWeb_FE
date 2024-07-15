import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {DataService} from "../../../../../../Core/Services/Data/data.service";
import {ABOUT_ME} from "../../Model/Constants/ABOUT_ME_API_NAME";
import {IBasicInfo} from "../../Model/Interface/AboutMe/basic-info";

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private dataService: DataService) {
  }

  getAboutMeBrief(): Observable<IBaseData<string[]>> {
    return this.dataService.get(ABOUT_ME.BRIEF)
  }

  getBasicInfo(): Observable<IBaseData<IBasicInfo>> {
    return this.dataService.get(ABOUT_ME.BASIC_INFO)
  }
}
