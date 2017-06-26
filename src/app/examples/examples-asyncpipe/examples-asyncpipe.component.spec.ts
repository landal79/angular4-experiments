import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesAsyncpipeComponent } from './examples-asyncpipe.component';

describe('ExamplesAsyncpipeComponent', () => {
  let component: ExamplesAsyncpipeComponent;
  let fixture: ComponentFixture<ExamplesAsyncpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesAsyncpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesAsyncpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
