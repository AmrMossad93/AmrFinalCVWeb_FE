import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
  standalone: false
})
export class TechStackComponent {
  techStack = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Three.js', icon: '📦' },
    { name: 'RxJS', icon: '⚡' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Python', icon: '🐍' },
    { name: 'Git', icon: '🌿' },
    { name: 'OpenAI', icon: '🤖' },
    { name: 'PostgreSQL', icon: '🐘' }
  ];
}
