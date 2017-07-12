import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdButtonToggleModule,
  MdGridListModule, MdIconModule, MdListModule, MdRadioModule, MdSidenavModule,
  MdToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdListModule,
    MdRadioModule,
    MdButtonModule,
    MdButtonToggleModule
  ],
  declarations: [],
  exports: [
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdListModule,
    MdRadioModule,
    MdButtonModule,
    MdButtonToggleModule
  ]
})
export class AngularMaterialModule { }
