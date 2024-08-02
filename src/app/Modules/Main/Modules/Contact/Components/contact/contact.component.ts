import {Component, OnInit} from '@angular/core';
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IBasicInfo} from "../../../About/Model/Interface/AboutMe/basic-info";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InputPattern} from "../../../../../../Core/Model/Class/InputPattern/InputPattern";
import {ToastrService} from "ngx-toastr";
import {ContactService} from "../../Service/contact/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  basicInfoData = {} as IBasicInfo;
  contactForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private toastr: ToastrService, private contactService: ContactService) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.basicInfoData = res['basicInfoData'];
    });
    this.onCreateForm();
  }

  onCreateForm(): void {
    this.contactForm = this.fb.group({
      fullName: [null, [Validators.required]],
      email: [
        null,
        [Validators.required, Validators.pattern(InputPattern.EMAIL)],
      ],
      subject: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (!this.contactForm.valid) {
      for (const i in this.contactForm.controls) {
        this.contactForm.controls[i].markAsDirty();
        this.contactForm.controls[i].markAsPristine();
        this.contactForm.controls[i].markAllAsTouched();
        this.contactForm.controls[i].updateValueAndValidity();
      }
      this.toastr.error('Kindly enter the required fields!', 'Ops!');
      return;
    }
    this.contactService.sendInquiry(this.contactForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.toastr.success('Your Message is sent successfully to Amr! ', 'Thanks!');
      }
    );

  }
}
