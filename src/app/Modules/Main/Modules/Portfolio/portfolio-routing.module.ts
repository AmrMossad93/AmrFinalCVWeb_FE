import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from "./Components/portfolio/portfolio.component";
import {ProjectsResolver} from "./Resolver/Projects/projects.resolver";
import {PortfolioDetailsComponent} from "./Components/portfolio-details/portfolio-details.component";
import {ProjectDetailsResolver} from "./Resolver/ProjectDetails/project-details.resolver";

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    resolve: {
      projectListData: ProjectsResolver,
    }
  },
  {
    path: ':id',
    component: PortfolioDetailsComponent,
    resolve: {
      projectDetailsData: ProjectDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
