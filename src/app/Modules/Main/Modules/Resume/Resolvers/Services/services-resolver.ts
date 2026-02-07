import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {Resume} from '../../Services/Resume/resume';
import {IService} from '../../DTO/Interface/Services/services';

export const servicesResolver: ResolveFn<IService[]> = () => {
  return inject(Resume).getServices();
};
