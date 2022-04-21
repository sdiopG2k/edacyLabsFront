import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../models/metadata';
@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllItems(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(
      `${environment.apiUrl}item/getAllItems`
    );
  }
  getItemById(id:number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(
      `${environment.apiUrl}item/getById/${id}`
    );
  }

  updateItem(value:any){
    let url = `${environment.apiUrl}item/updateItem`
      return this.http.put<ResponseApi>(url, JSON.stringify(value) , this.httpHeader);
  }
  
  
}
