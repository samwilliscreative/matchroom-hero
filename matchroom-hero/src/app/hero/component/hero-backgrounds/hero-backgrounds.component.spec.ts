import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBackgroundsComponent } from './hero-backgrounds.component';

describe('HeroBackgroundsComponent', () => {
  let component: HeroBackgroundsComponent;
  let fixture: ComponentFixture<HeroBackgroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBackgroundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBackgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
