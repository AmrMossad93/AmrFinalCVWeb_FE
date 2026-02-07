import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {Resume} from '../../Services/Resume/resume';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {ISkill} from '../../DTO/Interface/Skills/skills';

export const skillsResolver: ResolveFn<IBase<ISkill[]>> = () => {
  return inject(Resume).getSkillsProgress();
};
