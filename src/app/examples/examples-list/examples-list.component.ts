import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples-list',
  templateUrl: './examples-list.component.html',
  styleUrls: ['./examples-list.component.css']
})
export class ExamplesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  examples = [
    {icon: 'cloud',  title : 'bold hover directive', routerLink : '/examples/examples-bold-hover' },
    {icon: 'cloud_queue', title : 'highlight directive', routerLink : '/examples/examples-highlight' },
  ];

}
