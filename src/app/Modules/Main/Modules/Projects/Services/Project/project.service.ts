import {Injectable} from '@angular/core';
import {DataService} from "../../../../../../Core/Service/Data/data.service";
import {map, Observable} from "rxjs";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IProject} from "../../../Home/Models/Interfaces/Projects/project";
import {PROJECT} from "../../../Home/Models/Constants/API_NAME";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private dataService: DataService) {
  }

  getProjectById(projectId: number): Observable<IProject> {
    return this.dataService.get(PROJECT.LIST).pipe(map((data) => data.data.find((c: IProject) => c.id === projectId)))
  }
}
