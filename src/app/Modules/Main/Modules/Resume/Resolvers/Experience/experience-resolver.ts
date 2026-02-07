import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {Resume} from '../../Services/Resume/resume';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {IExperience} from '../../DTO/Interface/Experience/experience';

export const experienceResolver: ResolveFn<IBase<IExperience[]>> = () => {
  return inject(Resume).getExperience();
};
