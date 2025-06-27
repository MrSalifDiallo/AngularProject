import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Offre } from '../../model/offre';
import { OffreService } from '../../services/offre.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrl: './add-offre.component.css',
})


export class AddOffreComponent {
  offres:Offre[]=[];
  @Output() ajoutReussi = new EventEmitter<void>();
    constructor(
      private offreService:OffreService,
      private router: Router,
      private route: ActivatedRoute
    ){}
    submitted = false;
    textButton = "Valider";
  
    offreForm = new FormGroup({
    id: new FormControl<number | null>(null),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lieu: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });


  get f2() {
    return this.offreForm.controls;
  }
  
    ngOnInit(): void {
      //this.getAllOffres();
    }

    //Soumettre formulaire ajout
    onSubmit() {
      this.submitted = true;
      if (this.offreForm.invalid) {
        return;
      }
       
      else {
        if (this.textButton == "Valider") {
          const offre = this.offreForm.value as Offre;
          this.offreService.store(offre).subscribe({
            next: (data: Offre[]) => {
            this.offres = data;
            this.ajoutReussi.emit();
            this.offreForm.reset();
            this.submitted = false;
            },
            error: (error) => {
              console.log(error);
            },
            complete: () => {
              //console.log('Flux terminé');
            }
          })
        } 
        /*else {
          const offre = this.offreForm.value as Offre;
          this.offreService.updateOffre(offre).subscribe(
            (data) => {
              this.router.navigateByUrl('/offre');
            },
            (error) => {
              console.log(error);
            }
          )
        }*/
      }
    }
   
}
