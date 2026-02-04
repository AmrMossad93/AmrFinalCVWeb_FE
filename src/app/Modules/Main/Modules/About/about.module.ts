import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';
import {SharedModule} from '../../../../Shared/shared.module';
import {basicInfoResolver} from './Resolvers/BasicInfo/basic-info-resolver';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
        resolve: {
          basicInfo: basicInfoResolver
        }
      }
    ])
  ]
})
export class AboutModule {
}
