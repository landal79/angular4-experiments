import { Component, OnInit } from '@angular/core';
import {ExampleComponent} from "../example-template/example-template.component";

@Component({
  selector: 'app-examples-highlight',
  templateUrl: './examples-highlight.component.html',
  styleUrls: ['./examples-highlight.component.css']
})
export class ExamplesHighlightComponent implements OnInit, ExampleComponent {

  title: string = 'Highlight Attribute Directive';

  color: string;

  colors = ['lightgreen', 'yellow', 'cyan'];

  constructor() { }

  ngOnInit() {
  }

}
