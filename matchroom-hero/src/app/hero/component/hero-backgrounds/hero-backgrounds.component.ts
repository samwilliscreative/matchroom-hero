import { Component, Input, OnInit } from '@angular/core';
import { HeroBody } from '../hero-body/hero-body-model.interface';

@Component({
  selector: 'app-hero-backgrounds',
  templateUrl: './hero-backgrounds.component.html',
  styleUrls: ['./hero-backgrounds.component.scss']
})
export class HeroBackgroundsComponent implements OnInit {
  @Input() content: HeroBody;

  constructor() { }

  ngOnInit(): void {
  }

}
