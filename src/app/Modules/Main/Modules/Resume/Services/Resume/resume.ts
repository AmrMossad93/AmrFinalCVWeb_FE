import {inject, Injectable} from '@angular/core';
import {DataService} from '../../../../../../Core/services/Data/data.service';
import {Observable} from 'rxjs';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {RESUME_API_NAME} from '../../DTO/API/RESUME_API_NAME';
import {IExperience} from '../../DTO/Interface/Experience/experience';
import {IEducation} from '../../DTO/Interface/Education/education';
import {IService} from '../../DTO/Interface/Services/services';
import {ISkill} from '../../DTO/Interface/Skills/skills';

@Injectable({
  providedIn: 'root',
})
export class Resume {
  private readonly dataService = inject(DataService);

  getExperience(): Observable<IBase<IExperience[]>> {
    return this.dataService.getJson<IBase<IExperience[]>>(RESUME_API_NAME.EXPERIENCE);
  }

  getEducation(): Observable<IBase<IEducation[]>> {
    return this.dataService.getJson<IBase<IEducation[]>>(RESUME_API_NAME.EDUCATION);
  }

  getServices(): Observable<IService[]> {
    return this.dataService.getJson<IService[]>(RESUME_API_NAME.SERVICES);
  }

  getSkillsProgress(): Observable<IBase<ISkill[]>> {
    return this.dataService.getJson<IBase<ISkill[]>>(RESUME_API_NAME.SKILLS_PROGRESS);
  }
}
