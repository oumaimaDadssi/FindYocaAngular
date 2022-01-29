import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce/annonce.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Modules/home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
   
    path:'',component:HomeComponent},
    {path:'annonce',component:AnnonceComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
