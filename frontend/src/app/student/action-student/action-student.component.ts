import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../model/student';

@Component({
  selector: 'app-action-student',
  templateUrl: './action-student.component.html',
  styleUrl: './action-student.component.css'
})
export class ActionStudentComponent {
   students:Student[]=[];
    @Output() ajoutReussi = new EventEmitter<void>();
    @Output() updateReussi = new EventEmitter<void>();
    // Variable pour stocker l'offre à éditer (null = mode ajout)
    private _studentToEdit: Student | null = null;
    @Input() set studentToEdit(value: Student | null) {
      this._studentToEdit = value;
      if (value) {
        // Conversion de la date pour l'input type="date"
        const dateStr = value.birthdate ? new Date(value.birthdate).toISOString().substring(0, 10) : '';
        this.studentForm.patchValue({ 
          id: value.id,
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          birthdate: dateStr,
          level: value.level
        });
        this.textButton = "Modifier";
      } 
      else {
        this.studentForm.reset();
        this.textButton = "Valider";
      }
      this.submitted = false;
    }
    get studentToEdit() {
      return this._studentToEdit;
    }
      constructor(
        private studentService:StudentService,
        private router: Router,
        private route: ActivatedRoute
      ){}
      submitted = false;
      textButton = "Valider";
    
      studentForm = new FormGroup({
      id: new FormControl<number | null>(null),
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthdate: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
    });
  
  
    get f2() {
      return this.studentForm.controls;
    }
    
      ngOnInit(): void {
        //this.getAllOffres();
      }
  
      //Soumettre formulaire ajout
      onSubmit() {
        this.submitted = true;
        if (this.studentForm.invalid) {
          return;
        }
        const formValue = this.studentForm.value;
        const student: Student = {
          id: formValue.id ?? undefined,
          firstName: formValue.firstName ?? '',
          lastName: formValue.lastName ?? '',
          birthdate: formValue.birthdate ? new Date(formValue.birthdate) : new Date(),
          level: formValue.level ?? '',
          email: formValue.email ?? ''
        };
        if (this.textButton === "Modifier" && student.id) {
          // Mode édition
          this.studentService.updateStudent(student).subscribe({
            next: () => {
              this.updateReussi.emit();
              this.studentForm.reset();
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
          this.studentService.store(student).subscribe({
            next: () => {
              this.ajoutReussi.emit();
              this.studentForm.reset();
              this.submitted = false;
            },
            error: (error) => { console.log(error); }
          });
        }
      }
      getStudentById(id: number) {
      this.studentService.getStudentById(id)
        .then((data: Student) => {
          this.studentForm.get('id')?.setValue(data.id!);
          this.studentForm.get('firstName')?.setValue(data.firstName);
          this.studentForm.get('lastName')?.setValue(data.lastName);
          this.studentForm.get('email')?.setValue(data.email);
          const birthdateStr = data.birthdate ? new Date(data.birthdate).toISOString().substring(0, 10) : '';
          this.studentForm.get('birthdate')?.setValue(birthdateStr);
          this.studentForm.get('level')?.setValue(data.level);
          this.textButton = "Modifier";
        })
        .catch((error) => {
          console.log(error);
        });
    }
}
