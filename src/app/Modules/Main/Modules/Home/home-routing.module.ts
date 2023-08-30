import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {AboutMeBriefResolver} from "./Resolvers/AboutMe/AboutMeBrief/about-me-brief.resolver";
import {BasicInfoResolver} from "./Resolvers/AboutMe/BasicInfo/basic-info.resolver";
import {ProgrammingSkillsResolver} from "./Resolvers/Skills/ProgrammingSkills/programming-skills.resolver";
import {EducationResolver} from "./Resolvers/Education/education.resolver";
import {ExperienceResolver} from "./Resolvers/Experience/experience.resolver";
import {ProjectsResolver} from "./Resolvers/Projects/projects.resolver";
import {CertificateResolver} from "./Resolvers/Certificate/certificate.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      aboutMeBriefData: AboutMeBriefResolver,
      basicInfoData: BasicInfoResolver,
      programmingSkillsData: ProgrammingSkillsResolver,
      educationData: EducationResolver,
      experienceData: ExperienceResolver,
      projectListData: ProjectsResolver,
      certificateData:CertificateResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
