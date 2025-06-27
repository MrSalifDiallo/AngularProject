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
  @Output() updateReussi = new EventEmitter<void>();
  // Variable pour stocker l'offre à éditer (null = mode ajout)
  private _offreToEdit: Offre | null = null;
  @Input() set offreToEdit(value: Offre | null) {
    this._offreToEdit = value;
    if (value) {
      // Conversion de la date pour l'input type="date"
      const dateStr = value.date ? new Date(value.date).toISOString().substring(0, 10) : '';
      this.offreForm.patchValue({ ...value, date: dateStr });
      this.textButton = "Modifier";
    } 
    else {
      this.offreForm.reset();
      this.textButton = "Valider";
    }
    this.submitted = false;
  }
  get offreToEdit() {
    return this._offreToEdit;
  }
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
      const offre = this.offreForm.value as Offre;
      if (this.textButton === "Modifier" && offre.id) {
        // Mode édition
        this.offreService.updateOffre(offre).subscribe({
          next: () => {
            this.updateReussi.emit();
            this.offreForm.reset();
            this.submitted = false;
            this.textButton = "Valider";
          },
          error: 
          (error) =>{
             console.log(error); 
            }
        });
      } 
      else {
        // Mode ajout
        this.offreService.store(offre).subscribe({
          next: () => {
            this.ajoutReussi.emit();
            this.offreForm.reset();
            this.submitted = false;
          },
          error: (error) => { console.log(error); }
        });
      }
    }
    getOffreById(id: number) {
    this.offreService.getOffreById(id)
      .then((data: Offre) => {
        this.offreForm.get('id')?.setValue(data.id!);
        this.offreForm.get('lieu')?.setValue(data.lieu);
        this.offreForm.get('title')?.setValue(data.title);
        this.offreForm.get('description')?.setValue(data.description);
        this.offreForm.get('date')?.setValue(data.date);
        this.textButton = "Modifier";
      })
      .catch((error) => {
        console.log(error);
      });
  }
   
}
