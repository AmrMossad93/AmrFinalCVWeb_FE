import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';
import { TechStackComponent } from './Components/tech-stack/tech-stack.component';
import { SharedModule } from '../../../../Shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    TechStackComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
