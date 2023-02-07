import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./Components/main/main.component";
import {HeaderResolver} from "./Resolvers/Header/header.resolver";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
      headerData: HeaderResolver
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./Modules/Home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./Modules/Projects/projects.module').then(m => m.ProjectsModule)
      }
    ],
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
