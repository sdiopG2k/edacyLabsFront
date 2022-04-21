
export interface ResponseApi {
  status: string;
  payload?: any;
  message?: string;
  errors?: string;
  metadata?: ApiPaginator;
}
export interface ApiPaginator{
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}