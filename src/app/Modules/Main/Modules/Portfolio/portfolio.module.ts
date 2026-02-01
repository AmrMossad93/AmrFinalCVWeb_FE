import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SharedModule } from '../../../../Shared/shared.module';

@NgModule({
  declarations: [
    PortfolioComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: PortfolioComponent },
      { path: ':id', component: ProjectDetailsComponent }
    ])
  ]
})
export class PortfolioModule { }
