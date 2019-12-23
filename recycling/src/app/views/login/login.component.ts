import { Component, OnInit } from '@angular/core';
import { NavbarService} from 'src/app/services/navbar.service';
import { FooterService} from 'src/app/services/footer.service';
import { AdminsService} from 'src/app/services/admins.service'
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public nav : NavbarService ,
     public footer : FooterService ,
      private Admin : AdminsService , 
      private router:Router)
       { }

  ngOnInit() {
    this.nav.hide();
    this.footer.hide();
    if(localStorage.getItem("islogin")=="true"){
      this.router.navigateByUrl("dashboard")
    }
  }

  loginAdmin(values){
      this.Admin.login(values)
  }

}
