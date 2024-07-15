import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {HeaderResolver} from "./Resolvers/Header/header.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      headerData: HeaderResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
