import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../../service/button-model.interface';

@Component({
  selector: 'app-hero-button',
  templateUrl: './hero-button.component.html',
  styleUrls: ['./hero-button.component.scss'],
})
export class HeroButtonComponent implements OnInit {
  @Input() content: Button;

  constructor() {}

  ngOnInit(): void {}
}
