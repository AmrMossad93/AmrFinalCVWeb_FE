import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ResumeComponent} from './resume.component';
import {SharedModule} from '../../../../Shared/shared.module';
import {experienceResolver} from './Resolvers/Experience/experience-resolver';
import {educationResolver} from './Resolvers/Education/education-resolver';
import {servicesResolver} from './Resolvers/Services/services-resolver';
import {skillsResolver} from './Resolvers/Skills/skills-resolver';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ResumeComponent,
        resolve: {
          experience: experienceResolver,
          education: educationResolver,
          services: servicesResolver,
          skillsProgress: skillsResolver
        }
      }
    ])
  ]
})
export class ResumeModule {
}
