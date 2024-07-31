import {Injectable} from '@angular/core';
import {
  Resolve
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {SkillsService} from "../../../Services/Skills/skills.service";
import {IProgrammingSkills} from "../../../Model/Interface/Skills/programming-skills";

@Injectable({
  providedIn: 'root'
})
export class ProgrammingSkillsResolver implements Resolve<IProgrammingSkills[]> {
  constructor(private skillsService: SkillsService) {
  }

  resolve(): Observable<IProgrammingSkills[]> {
    return this.skillsService.getProgrammingSkills();
  }
}
