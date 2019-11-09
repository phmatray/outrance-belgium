import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFourthComponent } from './event-fourth.component';

describe('EventFourthComponent', () => {
  let component: EventFourthComponent;
  let fixture: ComponentFixture<EventFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
