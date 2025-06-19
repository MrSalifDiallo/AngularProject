import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffreComponent } from './offre/offre.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    UserComponent,
    MainLayoutComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
