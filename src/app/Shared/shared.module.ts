import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/Fixed/header/header.component';
import { FooterComponent } from './Components/Fixed/footer/footer.component';
import { CardComponent } from './Components/Reusable/card/card.component';
import {AngularMaterialModule} from "../Core/DesignModules/AngularMaterial/angular-material.module";



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        CardComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class SharedModule { }
