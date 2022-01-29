import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../Modules/home/home.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AnnonceComponent } from '../annonce/annonce.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AnnonceComponent,
    LoginComponent,
    RegisterComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutModule { }
