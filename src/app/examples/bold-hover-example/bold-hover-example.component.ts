import { Component, OnInit } from '@angular/core';
import {ExampleComponent} from "../example-template/example-template.component";

@Component({
  selector: 'bold-hover-example',
  templateUrl: './bold-hover-example.component.html',
  styleUrls: ['./bold-hover-example.component.css']
})
export class BoldHoverExampleComponent implements OnInit, ExampleComponent {

  title = "Attribute directive example";

  constructor() { }

  ngOnInit() {

  }

}
