import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../model/offre';
import axios from 'axios';
import { from } from 'rxjs';
import { environment } from '../../environment';
// Crée l'instance Axios une seule fois avec la bonne baseURL
const axiosClient = axios.create({
  baseURL: `${environment.API_BASE_URL}/api`
});

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private httpclient:HttpClient){

  }

  
  getAllOffres(){
    console.log('URL complète Axios:', axiosClient.defaults.baseURL + '/offres');
    return from(
      axiosClient.get('/offres').then(res => res.data)
    );
  }

  store(Offre:Offre){
    return from(
      axiosClient.post('/offres', Offre).then(res => res.data)
    );
  }

  destroy(id:number){
    return from(
      axiosClient.delete('/offres/'+`${id}`).then(res => res.data)
    );
  }

}
