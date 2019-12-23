import { Component, OnInit } from '@angular/core';
import { AdminsService} from 'src/app/services/admins.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  constructor(public AD : AdminsService) { }

  ngOnInit() {
  }
  
  addadmin(value){
    console.log(value)
    this.AD.signup(value)
  }

}
