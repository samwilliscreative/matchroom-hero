import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBodyComponent } from './hero-body.component';

describe('HeroBodyComponent', () => {
  let component: HeroBodyComponent;
  let fixture: ComponentFixture<HeroBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBodyComponent);
    component = fixture.componentInstance;
    component.content = {
      eventBelt: "Heavyweight championship of the world",
      eventDate: "2019-12-07T22:00:00+0000",
      eventFighters: {
        home: "Ruiz",
        away: "Joshua"
      },
      eventLocation: "Diriyah, Saudi Arabia",
      eventTagline: {
        left: "Clash",
        middle: "on the",
        right: "dunes"
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
