import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from "./Components/contact/contact.component";
import {BasicInfoResolver} from "../About/Resolver/AboutMe/BasicInfo/basic-info.resolver";

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    resolve: {
      basicInfoData: BasicInfoResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
