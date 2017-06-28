import {Component, OnInit, ViewChild} from '@angular/core';
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @ViewChild(MdSidenav)
  private _sidenav : MdSidenav;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this._sidenav.toggle();
  }

  set open (open : boolean) {
    this._sidenav.toggle(open);
  }

  get open(): boolean { return this._sidenav._isOpened; }
}
