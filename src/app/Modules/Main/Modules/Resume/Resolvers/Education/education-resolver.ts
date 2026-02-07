import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {Resume} from '../../Services/Resume/resume';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {IEducation} from '../../DTO/Interface/Education/education';

export const educationResolver: ResolveFn<IBase<IEducation[]>> = () => {
  return inject(Resume).getEducation();
};
