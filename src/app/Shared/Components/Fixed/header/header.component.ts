import {Component, Input} from '@angular/core';
import {IHeader} from "../../../../Modules/Main/Models/Interface/header";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() headerData = {} as IHeader;
}
