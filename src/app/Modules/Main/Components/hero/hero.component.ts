import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  standalone: false
})
export class HeroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
