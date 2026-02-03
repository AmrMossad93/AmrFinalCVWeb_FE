import {Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import Typed from 'typed.js';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {IHeader} from '../../DTO/Interface/Header/header';

@Component({
  selector: 'app-home-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  standalone: false
})
export class HeroSectionComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('typedElement') typedElement!: ElementRef;
  @Input() header: IBase<IHeader> = {} as IBase<IHeader>;

  private typed: Typed | undefined;

  get splitName() {
    if (!this.header?.data?.name) return { first: '', rest: '' };
    const parts = this.header.data.name.split(' ');
    return {
      first: parts[0],
      rest: parts.slice(1).join(' ')
    };
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const options = {
      strings: this.header.data.positions,
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
