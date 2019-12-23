import { Injectable } from '@angular/core';
import { Admin} from 'src/app/Models/admin';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminsService {
   ApiUrl = "http://localhost:3000/";
   token : string;
   public admindata : any;
   
  constructor( private http: HttpClient , private router : Router ) { }
  
  getToken(){
    let token = localStorage.getItem('token')
    return token;
  }
  signup(data : Admin ){
    return this.http.post(this.ApiUrl + 'admin' , data).subscribe();
  } 
  
  
  login(data){
    return this.http.post<{ admin : Admin , token : string }>(this.ApiUrl + 'admin/login',data).subscribe(
      
      res => 
      { 
          localStorage.setItem('token' , res.token)
          this.admindata = res.admin
        //  console.log(this.admindata)
      },
      error=>{console.log("false")},
      ()=>{
        localStorage.setItem('islogin' ,"true")
        this.router.navigateByUrl("dashboard")
    }
    )
  }
 
 logout(data){
   return this.http.post(this.ApiUrl + 'admin/logout' , data).subscribe()
 }

}
