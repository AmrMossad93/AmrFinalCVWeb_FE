import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {DataService} from "../../../../../../Core/Services/Data/data.service";
import {IProject} from "../../Model/Interface/Projects/project";
import {PROJECT} from "../../Model/Constants/PORTIFOLIO_API_NAME";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private dataService: DataService) {
  }

  getProjectList(): Observable<IBaseData<IProject[]>> {
    return this.dataService.get(PROJECT.LIST)
  }

  getProjectById(projectId: number): Observable<IProject> {
    return this.dataService.get(PROJECT.LIST).pipe(map((data) => data.data.find((c: IProject) => c.id === projectId)))
  }
}
