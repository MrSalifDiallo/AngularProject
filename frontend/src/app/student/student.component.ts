import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Student } from '../model/student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
// Contrôle la visibilité du dialog
  dialogVisible = false;

  // Variable pour stocker l'étudiant à éditer (null = mode ajout)
  studentSelectionne: Student | null = null;

  // Ouvre le dialog en mode ajout ou édition
  openDialog(student?: Student) {
    this.dialogVisible = true;
    // Si un étudiant est passé, on clone pour éviter la mutation directe
    this.studentSelectionne = student ? { ...student } : null;
  }

  onAjoutStudentReussi() {
    this.dialogVisible = false;
    this.getAllStudents();
    // Affiche un message de succès
    this.messageService.add({severity:'success', summary:'Succès', detail:'Étudiant ajouté avec succès !'});
  }
  onUpdateStudentReussi() {
    this.dialogVisible = false;
    this.getAllStudents();
    // Affiche un message de succès pour la mise à jour
    this.messageService.add({severity:'info', summary:'Succès', detail:'Étudiant mis à jour avec succès !'});
  }
  students:Student[]=[];
  constructor(private studentService:StudentService,
     private router: Router,
      private route: ActivatedRoute,
      private messageService: MessageService
  ){

  }
  ngOnInit(): void {
    this.getAllStudents();
  }

   //Pour supprimer un étudiant
    destroy(id:number){
      return this.studentService.destroy(id).subscribe({
      next: () => {
        this.messageService.add({severity:'error', summary:'Suppression', detail:'Étudiant Supprimé !'});
        //Filtrer pour éviter un nouvel appel API
        this.students = this.students.filter(s => s.id !== id);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Flux terminé');
      }
    });

    }

  getAllStudents(){
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
    this.studentService.getAllStudents().subscribe({
      next: (data: Student[]) => {
        // Ici, data est le tableau d'étudiants récupéré depuis l'API
        // Trie par id croissant
        this.students = data.sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
        console.log(this.students);
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
