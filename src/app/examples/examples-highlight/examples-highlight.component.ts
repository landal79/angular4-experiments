import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples-highlight',
  templateUrl: './examples-highlight.component.html',
  styleUrls: ['./examples-highlight.component.css']
})
export class ExamplesHighlightComponent implements OnInit {

  title = 'Highlight Attribute Directive';

  color: string;

  colors = ['lightgreen', 'yellow', 'cyan'];

  constructor() { }

  ngOnInit() {
  }

}
