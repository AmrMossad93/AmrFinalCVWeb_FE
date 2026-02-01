import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../../../../Shared/shared.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ResumeComponent }])
  ]
})
export class ResumeModule { }
