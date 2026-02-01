import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  standalone: false
})
export class PortfolioComponent {
  projects = [
    {
      name: 'E-Commerce Platform',
      description: 'A full-featured online shopping experience with real-time inventory and secure checkout.',
      technologies: ['Angular', 'RxJS', 'Tailwind', 'Node.js'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      name: 'Task Management System',
      description: 'Collaborative task tracking with drag-and-drop boards and team analytics.',
      technologies: ['TypeScript', 'Angular Material', 'Firebase'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      name: 'Weather Dashboard',
      description: 'Interactive weather visualization with geographical mapping and historical data.',
      technologies: ['Angular', 'D3.js', 'OpenWeather API'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      name: 'Portfolio Website',
      description: 'A high-performance portfolio site built with Angular and Tailwind CSS.',
      technologies: ['Angular', 'Tailwind', 'SSR'],
      githubUrl: '#',
      demoUrl: '#'
    }
  ];
}
