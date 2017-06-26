import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-example-template',
  templateUrl: './example-template.component.html',
  styleUrls: ['./example-template.component.css']
})
export class ExampleTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title: string;

}

export interface ExampleComponent {

  readonly title : string;

}
