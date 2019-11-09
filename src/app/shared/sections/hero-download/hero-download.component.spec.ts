import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDownloadComponent } from './hero-download.component';

describe('HeroDownloadComponent', () => {
  let component: HeroDownloadComponent;
  let fixture: ComponentFixture<HeroDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
