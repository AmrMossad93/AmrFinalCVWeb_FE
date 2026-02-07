import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {Portfolio} from '../../Services/Portfolio/portfolio';

export const technologiesResolver: ResolveFn<string[]> = () => {
  return inject(Portfolio).getTechnologies();
};
