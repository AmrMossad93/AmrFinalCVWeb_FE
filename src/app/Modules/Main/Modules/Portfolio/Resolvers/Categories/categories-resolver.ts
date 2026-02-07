import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {Portfolio} from '../../Services/Portfolio/portfolio';

export const categoriesResolver: ResolveFn<string[]> = () => {
  return inject(Portfolio).getCategories();
};
