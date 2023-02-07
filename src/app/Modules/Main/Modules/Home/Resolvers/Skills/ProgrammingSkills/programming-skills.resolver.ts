import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {SkillsService} from "../../../Services/Skills/skills.service";
import {IBaseData} from "../../../../../../../Core/Model/Interface/Base/base-data";
import {IProgrammingSkills} from "../../../Models/Interfaces/Skills/programming-skills";

@Injectable({
  providedIn: 'root'
})
export class ProgrammingSkillsResolver implements Resolve<IBaseData<IProgrammingSkills[]>> {
  constructor(private skillsService: SkillsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBaseData<IProgrammingSkills[]>> {
    return this.skillsService.getProgrammingSkills();
  }
}
