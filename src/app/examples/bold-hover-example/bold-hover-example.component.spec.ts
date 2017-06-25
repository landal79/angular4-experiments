import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoldHoverExampleComponent } from './bold-hover-example.component';

describe('BoldHoverExampleComponent', () => {
  let component: BoldHoverExampleComponent;
  let fixture: ComponentFixture<BoldHoverExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoldHoverExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoldHoverExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
