import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleriaModule} from "primeng/galleria";


const primeNgModules = [
  GalleriaModule
]

@NgModule({
  exports: [
    primeNgModules
  ]
})
export class PrimeNgModule {
}
