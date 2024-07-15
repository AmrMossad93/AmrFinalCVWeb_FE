import {Component, OnInit} from '@angular/core';
import {LoaderService} from "./Core/Services/Loader/loader.service";
import {Event, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {register} from "swiper/element";
import {ResponsiveService} from "./Core/Services/Responsive/responsive.service";

register();
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'AmrMossadResume';

  constructor(
    public router: Router,
    private loaderService: LoaderService,
    private responsive: ResponsiveService,
  ) {
  }

  ngOnInit() {
    $.getScript('../assets/js/main.js');
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loaderService.show();
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loaderService.hide();
      }
      window.scrollTo(0, 0);
    });
  }

  onResize(event: any) {
    const target = event.target;
    this.responsive.onResize(target.innerWidth);
  }
}
