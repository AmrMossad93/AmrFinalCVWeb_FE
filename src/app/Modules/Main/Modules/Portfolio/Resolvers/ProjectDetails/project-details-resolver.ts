import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {Portfolio} from '../../Services/Portfolio/portfolio';
import {IProject} from '../../DTO/Interface/Project/project';

export const projectDetailsResolver: ResolveFn<IProject | undefined> = (route) => {
  const id = route.paramMap.get('id');
  if (!id) return undefined;
  return inject(Portfolio).getProjectById(id);
};
