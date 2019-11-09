import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTicketingComponent } from './hero-ticketing.component';

describe('HeroTicketingComponent', () => {
  let component: HeroTicketingComponent;
  let fixture: ComponentFixture<HeroTicketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTicketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTicketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
