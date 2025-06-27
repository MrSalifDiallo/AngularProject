import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffreComponent } from './offre/offre.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddOffreComponent } from './offre/add-offre/add-offre.component';
import { PrimeNgModule } from './primeng/prime';
import { ModalOffreComponent } from './offre/modal-offre/modal-offre.component';
import { ModalOffreModule } from './offre/modal-offre/modal-offre.module';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    UserComponent,
    MainLayoutComponent,
    WelcomeComponent,
    AddOffreComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    ModalOffreModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
