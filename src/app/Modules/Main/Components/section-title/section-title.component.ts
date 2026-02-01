import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
  standalone: false
})
export class SectionTitleComponent {
  @Input() title: string = '';
  @Input() centered: boolean = false;
}
