import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  standalone: false
})
export class HeroSectionComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('typedElement') typedElement!: ElementRef;
  
  roles: string[] = [
    'Software Engineer',
    'AI Integrator',
    'Full Stack Developer',
    'Problem Solver'
  ];
  
  private typed: Typed | undefined;

  ngOnInit() {
  }

  ngAfterViewInit() {
    const options = {
      strings: this.roles,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '_',
    };

    this.typed = new Typed(this.typedElement.nativeElement, options);
  }

  ngOnDestroy() {
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
