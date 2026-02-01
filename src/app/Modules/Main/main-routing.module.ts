import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./Modules/Home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./Modules/About/about.module').then(m => m.AboutModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./Modules/Portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      {
        path: 'resume',
        loadChildren: () => import('./Modules/Resume/resume.module').then(m => m.ResumeModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./Modules/Contact/contact.module').then(m => m.ContactModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
