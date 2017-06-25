import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExamplesListComponent} from "./examples-list/examples-list.component";
import {BoldHoverExampleComponent} from "./bold-hover-example/bold-hover-example.component";
import {ExamplesHighlightComponent} from "./examples-highlight/examples-highlight.component";

const routes: Routes = [
  { path: '', redirectTo: 'examples-list', pathMatch: 'full'},
  { path: 'examples-bold-hover', component: BoldHoverExampleComponent},
  { path: 'examples-highlight', component: ExamplesHighlightComponent},
  { path: 'examples-list', component: ExamplesListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
