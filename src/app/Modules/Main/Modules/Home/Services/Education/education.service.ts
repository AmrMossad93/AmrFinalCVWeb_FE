import {Injectable} from '@angular/core';
import {DataService} from "../../../../../../Core/Service/Data/data.service";
import {Observable} from "rxjs";
import {IEducation} from "../../Models/Interfaces/Education/education";
import {EDUCATION} from "../../Models/Constants/API_NAME";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private dataService: DataService) {
  }

  getEducationList(): Observable<IBaseData<IEducation[]>> {
    return this.dataService.get(EDUCATION.LIST)
  }
}
