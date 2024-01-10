import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JSON_serverAPIs } from 'src/app/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(JSON_serverAPIs.productUrl);
  }
}
