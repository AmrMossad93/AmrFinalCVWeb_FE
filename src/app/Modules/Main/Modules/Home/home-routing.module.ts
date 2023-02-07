import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {AboutMeBriefResolver} from "./Resolvers/AboutMe/AboutMeBrief/about-me-brief.resolver";
import {BasicInfoResolver} from "./Resolvers/AboutMe/BasicInfo/basic-info.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      aboutMeBriefData: AboutMeBriefResolver,
      basicInfoData: BasicInfoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
