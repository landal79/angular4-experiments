import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BoldHoverDirective} from "./bold-hover.directive";
import {HighlightDirective} from "./highlight.directive";
import {CapitalizePipe} from "./capitalize.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BoldHoverDirective,
    HighlightDirective,
    CapitalizePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    BoldHoverDirective,
    HighlightDirective,
    CapitalizePipe
  ]
})
export class SharedModule { }
