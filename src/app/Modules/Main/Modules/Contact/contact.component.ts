import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBase } from '../../../../Core/models/Interface/Base/base';
import { IBasicInfo } from '../About/DTO/Interface/BasicInfo/basic-info';
import { IHeader } from '../Home/DTO/Interface/Header/header';
import { ContactService } from './Service/contact/contact.service';

const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: false
})
export class ContactComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  public basicInfo = {} as IBase<IBasicInfo>;
  public header = {} as IBase<IHeader>;
  public contactForm!: FormGroup;
  public submitSuccess = false;
  public submitError: string | null = null;

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.basicInfo = res['basicInfo'];
      this.header = res['header'];
    });
    this.createForm();
  }

  createForm(): void {
    this.contactForm = this.fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      subject: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    this.submitSuccess = false;
    this.submitError = null;
    if (!this.contactForm.valid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        const ctrl = this.contactForm.get(key);
        ctrl?.markAsTouched();
        ctrl?.updateValueAndValidity();
      });
      this.submitError = 'Please fill in all required fields.';
      return;
    }
    this.contactService.sendInquiry(this.contactForm.value).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.contactForm.reset();
      },
      error: () => {
        this.submitError = 'Something went wrong. Please try again later.';
      },
    });
  }
}
