import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';    
import {Observable} from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  api_getAnnone ="https://localhost:44359/Annonce/GetAll";
api_Annonce ="https://localhost:44359/Annonce";

constructor(private http: HttpClient) {}

  getAnnone(): Observable < any[] > {  
    return this.http.get < any > (this.api_getAnnone + '/annonce');  
}

deleteAnnonce(val: any) {  
  return this.http.delete(this.api_Annonce + '/Annonce/' + val); 


}
addAnnonce(val: any) {  
  return this.http.post(this.api_Annonce + '/Annonce', val);  
}

GetByIdAnnonce(val: any) {  
  return this.http.post(this.api_Annonce + '/Annonce', val);  
}
PostAnnonce(): Observable < any[] > {  
  return this.http.get < any > (this.api_getAnnone + '/annonce');  
}

 
}
