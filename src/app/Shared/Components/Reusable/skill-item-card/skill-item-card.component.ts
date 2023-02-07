import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill-item-card',
  templateUrl: './skill-item-card.component.html',
  styleUrls: ['./skill-item-card.component.scss']
})
export class SkillItemCardComponent {
  @Input() skillName: string = '';
  @Input() percentage: number = 0;
}
