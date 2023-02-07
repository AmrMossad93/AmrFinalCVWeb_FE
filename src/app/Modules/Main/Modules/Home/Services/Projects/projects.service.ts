import {Injectable} from '@angular/core';
import {DataService} from "../../../../../../Core/Service/Data/data.service";
import {Observable} from "rxjs";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IProject} from "../../Models/Interfaces/Projects/project";
import {PROJECT} from "../../Models/Constants/API_NAME";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private dataService: DataService) {
  }

  getProjectList(): Observable<IBaseData<IProject[]>> {
    return this.dataService.get(PROJECT.LIST)
  }
}
