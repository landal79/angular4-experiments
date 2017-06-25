import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BoldHoverDirective} from "./bold-hover.directive";
import { HighlightDirective } from './highlight.directive';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoldHoverDirective,
    HighlightDirective,
    CapitalizePipe
  ],
  exports: [
    BoldHoverDirective,
    HighlightDirective,
    CapitalizePipe
  ]
})
export class CoreModule { }
