import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSocialComponent } from './level-social.component';

describe('LevelSocialComponent', () => {
  let component: LevelSocialComponent;
  let fixture: ComponentFixture<LevelSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
