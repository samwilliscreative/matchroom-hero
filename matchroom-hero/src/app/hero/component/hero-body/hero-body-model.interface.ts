export interface HeroBody {
  eventBelt: string,
  eventDate: string,
    eventFighters: {
      home: string,
      away: string
    },
    eventLocation: string,
    eventTagline: {
      left: string,
      middle: string,
      right: string
    }
}
