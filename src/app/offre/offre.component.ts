import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Offre } from '../model/offre';
import { OffreService } from '../services/offre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddingOffreComponent } from './adding-offre/adding-offre.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { MessageService } from 'primeng/api';
import { ModalOffreComponent } from './modal-offre/modal-offre.component';
@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent implements OnInit{

  // Contrôle la visibilité du dialog
  dialogVisible = false;

  // Ouvre le dialog quand on clique sur le bouton "Add"
  openDialog() {
    console.log('Bouton Add cliqué !');
    this.dialogVisible = true;
  }

  onAjoutOffreReussi() {
    this.dialogVisible = false;
    this.getAllOffres();
    // Affiche un message de succès
    // Utilise le service de messages de PrimeNG pour afficher une notification
    // Vous pouvez personnaliser le message, le résumé et la sévérité selon vos besoins
    // severity peut être 'success', 'info', 'warn', 'error'
    // summary est le titre de la notification
    // detail est le contenu de la notification
    // Ici, on affiche un message de succès après l'ajout d'une offre
    // Vous pouvez également utiliser des traductions ou des constantes pour les messages
    // Si vous utilisez un service de traduction, vous pouvez remplacer les chaînes de caractères par des clés de traduction
    // Exemple : this.messageService.add({severity:'success', summary: 'Offre ajoutée', detail:'L\'offre a été ajoutée avec succès !'});
    this.messageService.add({severity:'success', summary:'Succès', detail:'Offre ajoutée avec succès !'});
  }

  offres:Offre[]=[];
  constructor(private offreService:OffreService,
     private router: Router,
      private route: ActivatedRoute,
      private messageService: MessageService
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
