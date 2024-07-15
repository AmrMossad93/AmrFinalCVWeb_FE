import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./Component/about/about.component";
import {AboutMeBriefResolver} from "./Resolver/AboutMe/AboutMeBrief/about-me-brief.resolver";
import {BasicInfoResolver} from "./Resolver/AboutMe/BasicInfo/basic-info.resolver";
import {ProgrammingSkillsResolver} from "./Resolver/Skills/ProgrammingSkills/programming-skills.resolver";
import {CertificateResolver} from "./Resolver/Certificate/certificate.resolver";

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    resolve: {
      aboutMeBriefData: AboutMeBriefResolver,
      basicInfoData: BasicInfoResolver,
      programmingSkillsData: ProgrammingSkillsResolver,
      certificateData: CertificateResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
