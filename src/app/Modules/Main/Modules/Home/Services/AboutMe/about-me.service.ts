import {Injectable} from '@angular/core';
import {DataService} from "../../../../../../Core/Service/Data/data.service";
import {Observable} from "rxjs";
import {ABOUT_ME} from "../../Models/Constants/API_NAME";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IBasicInfo} from "../../Models/Interfaces/AboutMe/basic-info";

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
