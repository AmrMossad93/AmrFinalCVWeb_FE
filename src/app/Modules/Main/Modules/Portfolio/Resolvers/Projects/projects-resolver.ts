import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {Portfolio} from '../../Services/Portfolio/portfolio';
import {IProject} from '../../DTO/Interface/Project/project';

export const projectsResolver: ResolveFn<IProject[]> = () => {
  return inject(Portfolio).getProjects();
};
