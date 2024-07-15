import {Injectable} from '@angular/core';
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {Observable} from "rxjs";
import {IProgrammingSkills} from "../../Model/Interface/Skills/programming-skills";
import {DataService} from "../../../../../../Core/Services/Data/data.service";
import {SKILLS} from "../../Model/Constants/ABOUT_ME_API_NAME";

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
