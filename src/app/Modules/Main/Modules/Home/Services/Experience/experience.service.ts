import {Injectable} from '@angular/core';
import {DataService} from "../../../../../../Core/Service/Data/data.service";
import {EXPERIENCE} from "../../Models/Constants/API_NAME";
import {Observable} from "rxjs";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IExperience} from "../../Models/Interfaces/Experience/experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private dataService: DataService) {
  }

  getExperience(): Observable<IBaseData<IExperience[]>> {
    return this.dataService.get(EXPERIENCE.LIST)
  }
}
