import {Component, Input} from '@angular/core';
import {IHeader} from "../../../../Modules/Main/Models/Interface/header";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() headerData = {} as IHeader;

  downloadURI(uri: string, name: string) {
    var link = document.createElement("a");
    link.setAttribute('download', name);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
