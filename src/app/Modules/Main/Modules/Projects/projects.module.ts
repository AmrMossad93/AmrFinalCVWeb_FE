import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './Components/project-list/project-list.component';
import { ProjectDetailComponent } from './Components/project-detail/project-detail.component';
import {SharedModule} from "../../../../Shared/shared.module";
import {AngularMaterialModule} from "../../../../Core/DesignModules/AngularMaterial/angular-material.module";
import {SwiperModule} from "swiper/angular";


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    AngularMaterialModule,
    SwiperModule
  ]
})
export class ProjectsModule { }
