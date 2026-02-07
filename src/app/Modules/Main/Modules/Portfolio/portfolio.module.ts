import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio.component';
import { ProjectDetailsComponent } from './Components/project-details/project-details.component';
import { SharedModule } from '../../../../Shared/shared.module';
import { projectsResolver } from './Resolvers/Projects/projects-resolver';
import { categoriesResolver } from './Resolvers/Categories/categories-resolver';
import { technologiesResolver } from './Resolvers/Technologies/technologies-resolver';
import { projectDetailsResolver } from './Resolvers/ProjectDetails/project-details-resolver';

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
      {
        path: '',
        component: PortfolioComponent,
        resolve: {
          projectsData: projectsResolver,
          categories: categoriesResolver,
          technologies: technologiesResolver
        }
      },
      {
        path: ':id',
        component: ProjectDetailsComponent,
        resolve: {
          project: projectDetailsResolver
        }
      }
    ])
  ]
})
export class PortfolioModule { }
