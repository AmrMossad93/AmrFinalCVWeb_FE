import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {headerResolver} from './Resolver/Header/header-resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      header: headerResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
