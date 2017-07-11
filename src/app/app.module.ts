import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { MaterialModule } from "@angular/material";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { ExamplesModule } from "./examples/examples.module";
import {CoreModule} from "./core/core.module";
import {AngularMaterialModule} from "./angular-material/angular-material.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AngularMaterialModule,
    ExamplesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
