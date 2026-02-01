import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  standalone: false
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  roles: string[] = [
    'Software Engineer',
    'AI Integrator',
    'Full Stack Developer',
    'Problem Solver'
  ];
  currentRole: string = '';
  private roleIndex: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;
  private typingSpeed: number = 100;
  private timeoutId: any;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  type() {
    const currentFullRole = this.roles[this.roleIndex];
    
    if (this.isDeleting) {
      this.currentRole = currentFullRole.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.typingSpeed = 50;
    } else {
      this.currentRole = currentFullRole.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.typingSpeed = 100;
    }

    if (!this.isDeleting && this.charIndex === currentFullRole.length) {
      this.isDeleting = true;
      this.typingSpeed = 2000; // Pause at the end
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.typingSpeed = 500;
    }

    this.timeoutId = setTimeout(() => this.type(), this.typingSpeed);
  }
}
