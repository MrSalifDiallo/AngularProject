import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../model/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private httpclient:HttpClient){

  }

  
  getAllOffres(){
    return this.httpclient.get<Offre[]>("http://127.0.0.1:8000/api/offres");
  }

}
