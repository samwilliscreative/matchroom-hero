import { Component, Input, OnInit } from '@angular/core';
import { HeroBody } from './hero-body-model.interface';

@Component({
  selector: 'app-hero-body',
  templateUrl: './hero-body.component.html',
  styleUrls: ['./hero-body.component.scss']
})
export class HeroBodyComponent implements OnInit {
  @Input() content: HeroBody;

  constructor() { }

  ngOnInit(): void {
  }

}
