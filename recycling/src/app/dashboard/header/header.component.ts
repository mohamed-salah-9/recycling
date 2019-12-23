import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { FooterService } from 'src/app/services/footer.service';
import { Router } from '@angular/router';
import { AdminsService} from 'src/app/services/admins.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public nav : NavbarService ,
     public footer : FooterService ,
     private router: Router,
     public AS : AdminsService ) { }

  ngOnInit() {
    this.nav.hide();
    this.footer.hide();
    if(localStorage.getItem("islogin") == "false"){
         this.router.navigateByUrl("admin")
    }
  }
 
logoutt(v){
  this.AS.logout(v)
  localStorage.setItem('islogin' ,"false")
  this.router.navigateByUrl("admin")
}  
redirectToUser_Data() {
  this.router.navigateByUrl('dashboard/data');
} 
redirectToService_form(){
  this.router.navigateByUrl('dashboard/serv');
}
redirectToAllServices(){
  this.router.navigateByUrl('dashboard/allserv');
}
redirectToAddAdmin(){
  this.router.navigateByUrl('dashboard/addadmin');
}
}
