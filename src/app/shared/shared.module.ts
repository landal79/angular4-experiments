import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BoldHoverDirective} from "./bold-hover.directive";
import {HighlightDirective} from "./highlight.directive";
import {CapitalizePipe} from "./capitalize.pipe";
import {AngularMaterialModule} from "../angular-material/angular-material.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  declarations: [
    BoldHoverDirective,
    HighlightDirective,
    CapitalizePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    BoldHoverDirective,
    HighlightDirective,
    CapitalizePipe
  ]
})
export class SharedModule { }
