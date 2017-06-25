import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesHighlightComponent } from './examples-highlight.component';

describe('ExamplesHighlightComponent', () => {
  let component: ExamplesHighlightComponent;
  let fixture: ComponentFixture<ExamplesHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
