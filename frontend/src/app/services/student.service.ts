import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Offre } from '../model/offre';
import { Student } from '../model/student';
const axiosClient = axios.create({
  baseURL: `${environment.API_BASE_URL}/api`
});

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpclient: HttpClient) {
    
   }

   getAllStudents(){
       console.log('URL complète Axios:', axiosClient.defaults.baseURL + '/students');
       return from(
         axiosClient.get('/students').then(res => res.data)
       );
     }
   
  store(student:Student){
    return from(
      axiosClient.post('/students', student).then(res => res.data)
    );
  }
   
     destroy(id:number){
       return from(
         axiosClient.delete('/students/'+`${id}`).then(res => res.data)
       );
     }
   
     getStudentById(id: number){
         return axiosClient.get<Student>('/students/'+`${id}`).then(res => res.data);
       }
   
     updateStudent(student: Student) {
       return from(
         axiosClient.put('/students/' + `${student.id}`, student).then(res => res.data)
       );
     }


}
