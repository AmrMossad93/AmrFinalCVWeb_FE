import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './Components/Fixed/header/header.component';
import {FooterComponent} from './Components/Fixed/footer/footer.component';
import {CardComponent} from './Components/Reusable/card/card.component';
import {AngularMaterialModule} from "../Core/DesignModules/AngularMaterial/angular-material.module";
import {AsideComponent} from './Components/Reusable/aside/aside.component';
import {SkillItemCardComponent} from './Components/Reusable/skill-item-card/skill-item-card.component';
import {EducationItemComponent} from './Components/Reusable/education-item/education-item.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    AsideComponent,
    SkillItemCardComponent,
    EducationItemComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    AsideComponent,
    SkillItemCardComponent,
    EducationItemComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class SharedModule {
}
