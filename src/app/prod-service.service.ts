import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProdModel } from './prod-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdServiceService {
  url = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}

  productInsert(prod: ProdModel) {
    return this.http.post<any>(this.url + 'productInsert', prod);
  }

  productFind() {
    return this.http.get<ProdModel[]>(this.url + 'productFind');
  }

  productUpdate(prod: ProdModel) {
    return this.http.put(this.url + 'productUpdate', prod);
  }

  productDelete(prodID: any) {
    return this.http.post(this.url + 'productDelete', prodID);
  }
}
