export interface IInquiry {
  fullName: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

export interface IInquiryResponse {
  next: string;
  ok: boolean;
}
