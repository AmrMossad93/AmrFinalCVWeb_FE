export interface IBase<T> {
  success: boolean;
  errorMessage: string;
  data: T;
}
