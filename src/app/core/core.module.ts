import {NgModule, Optional, SkipSelf} from "@angular/core";
import {MaterialModule, MdSidenavModule} from "@angular/material";
import {throwIfAlreadyLoaded} from "./module-import-guard";
import {SideMenuComponent} from './side-menu/side-menu.component';
import {SharedModule} from "../shared/shared.module";
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    MaterialModule,
    MdSidenavModule,
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
