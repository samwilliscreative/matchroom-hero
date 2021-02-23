import { Component, Input, OnInit } from '@angular/core';
import { HeroButton } from './hero-button-model.interface';

@Component({
  selector: 'app-hero-button',
  templateUrl: './hero-button.component.html',
  styleUrls: ['./hero-button.component.scss']
})
export class HeroButtonComponent implements OnInit {
  @Input() content: HeroButton;

  constructor() { }

  ngOnInit(): void {
  }

}
