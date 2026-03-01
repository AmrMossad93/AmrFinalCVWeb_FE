import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../../../Shared/shared.module';
import { basicInfoResolver } from '../About/Resolvers/BasicInfo/basic-info-resolver';
import { headerResolver } from '../Home/Resolver/Header/header-resolver';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent,
        resolve: {
          basicInfo: basicInfoResolver,
          header: headerResolver
        }
      }
    ])
  ]
})
export class ContactModule { }
