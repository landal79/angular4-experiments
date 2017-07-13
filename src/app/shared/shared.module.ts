import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BoldHoverDirective} from "./bold-hover.directive";
import {HighlightDirective} from "./highlight.directive";
import {CapitalizePipe} from "./capitalize.pipe";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {HttpModule, JsonpModule} from "@angular/http";
import {WikipediaService} from "./wikipedia.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
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
    HttpModule,
    JsonpModule,
    AngularMaterialModule,
    BoldHoverDirective,
    HighlightDirective,
    CapitalizePipe
  ]
})
export class SharedModule { }
