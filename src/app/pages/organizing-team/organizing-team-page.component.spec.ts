import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingTeamPageComponent } from './organizing-team-page.component';

describe('OrganizingTeamComponent', () => {
  let component: OrganizingTeamPageComponent;
  let fixture: ComponentFixture<OrganizingTeamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizingTeamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizingTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
