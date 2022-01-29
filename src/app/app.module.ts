import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{AnnonceService} from './services/annonce.service';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
   

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [AnnonceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
