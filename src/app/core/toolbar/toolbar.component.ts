import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() title : string;

  @Output() onButtonClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.onButtonClick.emit(true);
  }

}
