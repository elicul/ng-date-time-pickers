import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDateTimePickersComponent } from './ng-date-time-pickers.component';

describe('NgDateTimePickersComponent', () => {
  let component: NgDateTimePickersComponent;
  let fixture: ComponentFixture<NgDateTimePickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDateTimePickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDateTimePickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
