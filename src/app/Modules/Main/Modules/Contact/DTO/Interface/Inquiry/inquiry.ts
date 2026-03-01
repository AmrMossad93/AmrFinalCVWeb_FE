export interface IInquiry {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface IInquiryResponse {
  next: string;
  ok: boolean;
}
