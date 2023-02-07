import {Injectable} from '@angular/core';
import {DataService} from "../../../../../../Core/Service/Data/data.service";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IProgrammingSkills} from "../../Models/Interfaces/Skills/programming-skills";
import {SKILLS} from "../../Models/Constants/API_NAME";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private dataService: DataService) {
  }

  getProgrammingSkills(): Observable<IBaseData<IProgrammingSkills[]>> {
    return this.dataService.get(SKILLS.PROGRAMMING_SKILLS)
  }
}
