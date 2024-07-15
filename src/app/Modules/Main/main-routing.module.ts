import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./Components/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./Modules/Home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about-me',
        loadChildren: () => import('./Modules/About/about.module').then(m => m.AboutModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./Modules/Contact/contact.module').then(m => m.ContactModule)
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
        path: 'services',
        loadChildren: () => import('./Modules/Services/services.module').then(m => m.ServicesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
