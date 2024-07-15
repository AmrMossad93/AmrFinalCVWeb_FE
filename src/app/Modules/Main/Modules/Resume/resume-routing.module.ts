import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from "./Components/resume/resume.component";
import {ExperienceResolver} from "./Resolver/Experience/experience.resolver";
import {EducationResolver} from "./Resolver/Education/education.resolver";

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    resolve: {
      educationData: EducationResolver,
      experienceData: ExperienceResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule {
}
