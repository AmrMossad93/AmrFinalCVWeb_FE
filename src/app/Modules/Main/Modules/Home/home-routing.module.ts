import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {AboutMeBriefResolver} from "./Resolvers/AboutMe/AboutMeBrief/about-me-brief.resolver";
import {BasicInfoResolver} from "./Resolvers/AboutMe/BasicInfo/basic-info.resolver";
import {ProgrammingSkillsResolver} from "./Resolvers/Skills/ProgrammingSkills/programming-skills.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      aboutMeBriefData: AboutMeBriefResolver,
      basicInfoData: BasicInfoResolver,
      programmingSkillsData: ProgrammingSkillsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
