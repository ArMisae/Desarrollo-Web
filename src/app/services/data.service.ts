import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpPeticion: HttpClient) { }

  apiUrl = 'https://libraryappasda.herokuapp.com/api/';


  obtenerData(url: string, params: any): Observable<Data>{
    return this.httpPeticion.get<Data>(this.apiUrl + url, {params});
  }


}
