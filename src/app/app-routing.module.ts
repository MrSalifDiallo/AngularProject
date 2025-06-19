import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreComponent } from './offre/offre.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  // Route sans layout
  { path: 'welcome', component: WelcomeComponent },

  // Route avec le MainLayoutComponent
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      { path: 'offre', component: OffreComponent },
      { path: 'user', component: UserComponent }
    ]
  },

  // Redirection par défaut vers la page de bienvenue
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  
  // Optionnel : une route "catch-all" pour les pages non trouvées
  { path: '**', redirectTo: '/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
