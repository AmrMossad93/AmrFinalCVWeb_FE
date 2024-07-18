import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
    $.getScript('../assets/js/main.js');
  }
}
