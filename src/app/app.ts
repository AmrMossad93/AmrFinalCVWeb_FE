import { Component, OnInit, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoaderService } from './Core/services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('AmrWebsite');

  constructor(
    private router: Router,
    private loader: LoaderService
  ) {}

  ngOnInit() {
    // Test: show loader for 4 seconds on app load (remove in production)
    // this.loader.show();
    // setTimeout(() => this.loader.hide(), 4000);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
