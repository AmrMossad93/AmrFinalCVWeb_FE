import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectListComponent} from "./Components/project-list/project-list.component";
import {ProjectDetailComponent} from "./Components/project-detail/project-detail.component";
import {ProjectsResolver} from "../Home/Resolvers/Projects/projects.resolver";
import {ProjectDetailsResolver} from "./Resolvers/Project/project-details.resolver";

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
    resolve: {
      projectListData: ProjectsResolver
    }
  },
  {
    path: ':projectId',
    component: ProjectDetailComponent,
    resolve: {
      projectDetailsData: ProjectDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
