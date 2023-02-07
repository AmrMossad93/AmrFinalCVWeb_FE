import {Component, OnInit} from '@angular/core';
import {IBaseData} from "../../../../Core/Model/Interface/Base/base-data";
import {IHeader} from "../../Models/Interface/header";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  headerData = {} as IBaseData<IHeader>;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.headerData = res['headerData']
    })
  }

}
