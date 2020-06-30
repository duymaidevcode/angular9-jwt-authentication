import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentViewComponent } from './tent-view.component';

describe('TentViewComponent', () => {
  let component: TentViewComponent;
  let fixture: ComponentFixture<TentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
