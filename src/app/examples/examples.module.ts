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
import { ExamplesAsyncpipeComponent } from './examples-asyncpipe/examples-asyncpipe.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    ExamplesRoutingModule
  ],
  declarations: [
    ExampleTemplateComponent,
    ExamplesListComponent,
    BoldHoverExampleComponent,
    ExamplesHighlightComponent,
    ExamplesAsyncpipeComponent
  ]
})
export class ExamplesModule { }
