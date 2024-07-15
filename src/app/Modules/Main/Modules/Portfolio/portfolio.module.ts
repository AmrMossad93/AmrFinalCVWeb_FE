import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './Components/portfolio-details/portfolio-details.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioDetailsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
