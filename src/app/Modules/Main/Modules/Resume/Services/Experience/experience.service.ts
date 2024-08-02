import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {DataService} from "../../../../../../Core/Services/Data/data.service";
import {IExperience} from "../../Model/Interface/Experience/experience";
import {EXPERIENCE} from "../../Model/Constants/RESUME_API_NAME";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private dataService: DataService) {
  }

  getExperience(): Observable<IExperience[]> {
    return this.dataService.getAPI(EXPERIENCE.LIST)
  }
}
