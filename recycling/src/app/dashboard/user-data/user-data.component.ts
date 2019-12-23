import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/Models/contactModel'
import { from } from 'rxjs';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  MyData : Contact[];
  constructor( private CS : ContactService) { }
   
  ngOnInit() {
    this.getmydata()
  }

  getmydata(){
    this.CS.getproduct().subscribe(
      data => this.MyData = data
    );
  }

}
