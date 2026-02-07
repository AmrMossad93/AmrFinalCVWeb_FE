import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBase } from '../../../../Core/models/Interface/Base/base';
import { IBasicInfo } from '../About/DTO/Interface/BasicInfo/basic-info';
import { IHeader } from '../Home/DTO/Interface/Header/header';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: false
})
export class ContactComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);

  public basicInfo = {} as IBase<IBasicInfo>;
  public header = {} as IBase<IHeader>;

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.basicInfo = res['basicInfo'];
      this.header = res['header'];
    });
  }
}
