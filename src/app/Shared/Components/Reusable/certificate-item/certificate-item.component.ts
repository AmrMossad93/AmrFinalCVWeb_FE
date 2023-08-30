import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICertificate} from "../../../../Modules/Main/Modules/Home/Models/Interfaces/Certificate/certificate";

@Component({
  selector: 'app-certificate-item',
  templateUrl: './certificate-item.component.html',
  styleUrls: ['./certificate-item.component.scss']
})
export class CertificateItemComponent {
  @Input() certificate = {} as ICertificate;
  @Output() certificateData: EventEmitter<ICertificate> = new EventEmitter<ICertificate>();

  onEmitCertificate(): void {
    this.certificateData.emit(this.certificate)
  }
}
