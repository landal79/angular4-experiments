import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Output() onLinkClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  linkClick() {
    this.onLinkClick.emit(true);
  }

}
