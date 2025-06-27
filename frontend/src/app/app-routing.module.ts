import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreComponent } from './offre/offre.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AddOffreComponent } from './offre/add-offre/add-offre.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  // Route sans layout
  { path: 'welcome', component: WelcomeComponent },

  // Route avec le MainLayoutComponent
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      { path: 'offre', 
        component: OffreComponent,
      },
      { path:'addOffre',
          component:AddOffreComponent,
      },
      { path: 'user', 
        component: UserComponent 
      },
      { path: 'student', 
        component: StudentComponent 
      }
    ]
  },

  // Redirection par défaut vers la page de bienvenue
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  
  // Si la route n'existe pas
  { path: '**', redirectTo: '/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
