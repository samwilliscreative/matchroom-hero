import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HeroContent } from './hero-content-model.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

    // Backup code for if the API stops working, not sure what the time limit is for it
    backupContent: HeroContent = {
      button: {
        text: "Purchase your pass"
      },
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
    }

  constructor(private httpClient: HttpClient) { }

  getContent(): Observable<HeroContent> {
    return this.httpClient.get<HeroContent>('https://api.mocki.io/v1/ade74986').pipe(
      catchError(err => {
        // Should really throw an error but returning my own data incase API stops working
        // return throwError(err);
        console.error(err)
        return of(this.backupContent);
      })
    )

  }
}
