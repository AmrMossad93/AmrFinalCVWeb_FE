import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IBase} from '../../../../Core/models/Interface/Base/base';
import {IHeader} from './DTO/Interface/Header/header';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  public header: IBase<IHeader> = {} as IBase<IHeader>;

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.header = data['header'];
    })
  }
}
