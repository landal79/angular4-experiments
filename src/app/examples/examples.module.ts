import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";

import { CoreModule } from "../core/core.module";
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesListComponent } from './examples-list/examples-list.component';
import { BoldHoverExampleComponent } from "./bold-hover-example/bold-hover-example.component";
import { ExamplesHighlightComponent } from './examples-highlight/examples-highlight.component';
import { ExampleTemplateComponent } from './example-template/example-template.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CoreModule,
    ExamplesRoutingModule
  ],
  declarations: [
    ExampleTemplateComponent,
    ExamplesListComponent,
    BoldHoverExampleComponent,
    ExamplesHighlightComponent
  ]
})
export class ExamplesModule { }
