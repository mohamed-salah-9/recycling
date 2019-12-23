import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleServiceDataComponent } from './single-service-data.component';

describe('SingleServiceDataComponent', () => {
  let component: SingleServiceDataComponent;
  let fixture: ComponentFixture<SingleServiceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleServiceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
