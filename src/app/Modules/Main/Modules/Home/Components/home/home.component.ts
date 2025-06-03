import {Component, OnInit} from '@angular/core';
import Typed from 'typed.js';
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IHeader} from "../../Models/Interface/header";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  headerData = {} as IBaseData<IHeader>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(res => {
      this.headerData = res['headerData'];
    });
  }


  ngOnInit() {
    const options = {
      strings: this.headerData.data.positions,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      cursorChar: '|',
    };

    new Typed('.typed', options);
  }
}
