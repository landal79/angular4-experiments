import {NgModule, Optional, SkipSelf} from "@angular/core";
import {throwIfAlreadyLoaded} from "./module-import-guard";
import {SideMenuComponent} from './side-menu/side-menu.component';
import {SharedModule} from "../shared/shared.module";
import { ToolbarComponent } from './toolbar/toolbar.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    SideMenuComponent,
    ToolbarComponent
  ],
  exports: [
    SideMenuComponent,
    ToolbarComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
