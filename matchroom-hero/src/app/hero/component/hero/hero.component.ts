import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Button } from '../../service/button-model.interface';
import { HeroContent } from '../../service/hero-content-model.interface';
import { HeroService } from '../../service/hero.service';
import { HeroBody } from '../hero-body/hero-body-model.interface';

interface HeroContentVM {
  button: Button;
  body: {
    eventBelt: string;
    eventDate: string;
    eventFighters: {
      home: string;
      away: string;
    };
    eventLocation: string;
    eventTagline: {
      left: string;
      middle: string;
      right: string;
    };
  };
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  heroContent$: Observable<HeroContentVM>;
  heroBody: HeroBody;
  watchButton: Button = {
    text: 'Watch live now',
    url: 'https://google.com',
  };

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroContent$ = this.getHeroContent();
    this.addHeroScrollListener();
  }

  addHeroScrollListener(): void {
    window.addEventListener(
      'scroll',
      () => {
        const heroHeight: number = (document.getElementsByTagName(
          'app-hero'
        )[0] as HTMLElement).offsetHeight;
        document.body.style.setProperty(
          '--hero-scroll',
          window.pageYOffset / heroHeight + ''
        );
      },
      false
    );
  }

  getHeroContent(): Observable<HeroContentVM> {
    return this.heroService.getContent().pipe(
      map((content) => {
        const heroContentVM: HeroContentVM = {
          button: content.button,
          body: this.buildHeroBody(content),
        };
        return heroContentVM;
      })
    );
  }

  buildHeroBody(content: HeroContent): HeroBody {
    const heroBody: HeroBody = {
      eventBelt: content.eventBelt,
      eventDate: content.eventDate,
      eventFighters: {
        home: content.eventFighters.home,
        away: content.eventFighters.away,
      },
      eventLocation: content.eventLocation,
      eventTagline: content.eventTagline,
    };

    return heroBody;
  }
}
