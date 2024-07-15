import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {DataService} from "../../../../../../Core/Services/Data/data.service";
import {IEducation} from "../../Model/Interface/Education/education";
import {EDUCATION} from "../../Model/Constants/RESUME_API_NAME";

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
