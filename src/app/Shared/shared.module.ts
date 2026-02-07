import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../Modules/Main/Components/hero/hero.component';
import { SectionTitleComponent } from '../Modules/Main/Components/section-title/section-title.component';
import { SkillBadgeComponent } from '../Modules/Main/Components/skill-badge/skill-badge.component';
import { MatrixBackgroundComponent } from './Components/Fixed/matrix-background/matrix-background.component';

@NgModule({
  declarations: [
    HeroComponent,
    SectionTitleComponent,
    SkillBadgeComponent,
    MatrixBackgroundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    SectionTitleComponent,
    SkillBadgeComponent,
    MatrixBackgroundComponent
  ]
})
export class SharedModule { }
