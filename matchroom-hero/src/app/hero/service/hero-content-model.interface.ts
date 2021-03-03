import { Button } from './button-model.interface';

export interface HeroContent {
  button: Button;
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
}
