import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile'

@Component({
  selector: 'app-examples-asyncpipe',
  templateUrl: './examples-asyncpipe.component.html',
  styleUrls: ['./examples-asyncpipe.component.css']
})
export class ExamplesAsyncpipeComponent implements OnInit {

  message: string;
  countCompleted: boolean;
  countDown: number;
  count$: Observable<number>;

  constructor() {
    this.countDown = 5;
    this.message = "Happy birthday!"
    this.countCompleted = false;

    this.count$ = Observable
      .interval(1000)
      .map(i => this.countDown - i)
      .takeWhile(i => i > 0)
      .finally(() => this.countCompleted = true);
   }

  ngOnInit() {
  }



}
