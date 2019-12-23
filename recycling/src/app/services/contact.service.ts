import { Injectable } from '@angular/core';
import { Contact} from 'src/app/Models/contactModel';
import { HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
   ApiUrl = 'http://localhost:3000/';
  constructor(private http : HttpClient ) { }
  
  
  addproduct(product: Contact) {
    return this.http.post(this.ApiUrl + 'users', product).subscribe();
  }

  getproduct(){
    return this.http.get<Contact[]>(this.ApiUrl + 'users')
  }
  getSinUsers(id){ 
    return this.http.get<Contact>(this.ApiUrl+'users/'+id)
  }
  
}

