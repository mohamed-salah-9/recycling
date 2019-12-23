import { Injectable } from '@angular/core';
import { Service} from 'src/app/Models/serviceModel';
import { HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServService {
  ApiUrl = 'http://localhost:3000/';
  constructor( private http : HttpClient) { }
  

  AddServices(service : Service){
    return this.http.post(this.ApiUrl+ 'services' , service).subscribe();
  }
  getServices() {
    return this.http.get<Service[]>(this.ApiUrl + 'services');
  }

  DeleteService(id : string){
    return this.http.delete(this.ApiUrl + 'services/' + id)
  }

}
