import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroButtonComponent } from './hero-button.component';

describe('HeroButtonComponent', () => {
  let component: HeroButtonComponent;
  let fixture: ComponentFixture<HeroButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroButtonComponent);
    component = fixture.componentInstance;

    component.content = {
      text: "Purchase your pass",
      url: "https://facebook.com"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
