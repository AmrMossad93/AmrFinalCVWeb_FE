import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
  standalone: false
})
export class TechStackComponent {
  techStack = [
    { name: 'Angular', icon: '🔥' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🚀' },
    { name: 'RxJS', icon: '⚡' },
    { name: 'Git', icon: '🌿' },
    { name: 'SCSS', icon: '💅' }
  ];
}
