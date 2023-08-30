import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './Components/home/home.component';
import {SharedModule} from "../../../../Shared/shared.module";
import {AngularMaterialModule} from "../../../../Core/DesignModules/AngularMaterial/angular-material.module";
import { ProgrammingSkillsComponent } from './Shared/Dialogues/programming-skills/programming-skills.component';
import { ImageGalleryComponent } from './Shared/Dialogues/image-gallery/image-gallery.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProgrammingSkillsComponent,
    ImageGalleryComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        AngularMaterialModule
    ]
})
export class HomeModule { }
