export interface IBaseData<DATA_TYPE> {
  success: boolean;
  errorMessage: string;
  data: DATA_TYPE
}
