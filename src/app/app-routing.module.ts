import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./Modules/Main/main.module').then(m => m.MainModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
