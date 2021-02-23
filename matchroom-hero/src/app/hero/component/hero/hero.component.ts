import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HeroContent } from '../../service/hero-content-model.interface';
import { HeroService } from '../../service/hero.service';
import { HeroBody } from '../hero-body/hero-body-model.interface';
import { HeroButton } from '../hero-button/hero-button-model.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroContent$: Observable<HeroContent>;
  heroBody: HeroBody;
  heroButton: HeroButton;

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.heroContent$ = this.getHeroContent();
  }

  getHeroContent(): Observable<HeroContent> {
    return this.heroService.getContent().pipe(
      tap(content => {
        this.heroBody = this.buildHeroBody(content);
        this.heroButton = this.buildHeroButton(content);
      })
    )
  }

  buildHeroBody(content: HeroContent): HeroBody {
    const heroBody: HeroBody = {
      eventBelt: content.eventBelt,
      eventDate: content.eventDate,
      eventFighters: {
        home: content.eventFighters.home,
        away: content.eventFighters.away
      },
      eventLocation: content.eventLocation,
      eventTagline: content.eventTagline
    }

    return heroBody;
  }

  buildHeroButton(content: HeroContent): HeroButton {
    const heroButton: HeroButton = {
      text: content.button.text
    }

    return heroButton;
  }

}
