import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/component/hero/hero.component';
import { HeroBodyComponent } from './hero/component/hero-body/hero-body.component';
import { HeroButtonComponent } from './hero/component/hero-button/hero-button.component';
import { HeroBackgroundsComponent } from './hero/component/hero-backgrounds/hero-backgrounds.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroBodyComponent,
    HeroButtonComponent,
    HeroBackgroundsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
