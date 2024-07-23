import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Money } from '../core/model/money';
import { ConfigAPI } from './config';
import { HttpClient, HttpParams } from '@angular/common/http';
import moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

constructor(private http: HttpClient,) { }
getQuote(): Observable<Money>{
  const options = 
   { params: new HttpParams().set('@dataCotacao', '\''+ moment().format('MM-DD-YYYY') +'\'' ) };


   

   return this.http.get<Money>(ConfigAPI.EXCHANGE, options);

  
}
}

