import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Offre } from '../model/offre';
import { OffreService } from '../services/offre.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent implements OnInit{

  
  offres:Offre[]=[];
  constructor(private offreService:OffreService,
     private router: Router,
      private route: ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.getAllOffres();
  }

   //Pour supprimer une offre
    destroy(id:number){
      return this.offreService.destroy(id).subscribe({
      next: () => {
        //Filtrer pour éviter un nouvel appel API
        this.offres = this.offres.filter(o => o.id !== id);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Flux terminé');
      }
    });

    }

  getAllOffres(){
    /*
      Explication des propriétés de subscribe :
      - next : appelé à chaque nouvelle valeur émise par l'observable.
      - error : appelé si une erreur survient dans l'observable.
      - complete : appelé lorsque l'observable a terminé d'émettre toutes ses valeurs.

      Autres méthodes importantes avec les observables :
      - unsubscribe() : permet d'arrêter de recevoir les notifications de l'observable (utile pour éviter les fuites de mémoire).
      - pipe() : permet de chaîner des opérateurs RxJS (map, filter, etc.) pour transformer ou filtrer les données avant de les consommer.
    */
    // L'utilisation de plusieurs callbacks dans subscribe est dépréciée depuis RxJS 7.
    // Il faut utiliser un objet avec next, error, complete.
    this.offreService.getAllOffres().subscribe({
      next: (data: Offre[]) => {
        this.offres = data;
        console.log(this.offres);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Flux terminé');
      }
    });
  }
}
