import { NgModule } from '@angular/core';
import {MdGridListModule, MdIconModule, MdRadioModule, MdSidenavModule, MdToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdRadioModule
  ],
  declarations: [],
  exports: [
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdRadioModule
  ]
})
export class AngularMaterialModule { }
