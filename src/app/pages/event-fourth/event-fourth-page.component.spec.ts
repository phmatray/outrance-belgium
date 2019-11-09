import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFourthPageComponent } from './event-fourth-page.component';

describe('EventFourthPageComponent', () => {
  let component: EventFourthPageComponent;
  let fixture: ComponentFixture<EventFourthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFourthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFourthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
