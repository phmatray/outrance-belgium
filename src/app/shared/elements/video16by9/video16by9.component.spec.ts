import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Video16by9Component } from './video16by9.component';

describe('Video16by9Component', () => {
  let component: Video16by9Component;
  let fixture: ComponentFixture<Video16by9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Video16by9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Video16by9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
