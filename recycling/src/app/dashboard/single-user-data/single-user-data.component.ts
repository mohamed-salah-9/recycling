import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Models/contactModel';
import { ContactService } from 'src/app/services/contact.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user-data',
  templateUrl: './single-user-data.component.html',
  styleUrls: ['./single-user-data.component.css']
})
export class SingleUserDataComponent implements OnInit {

  myData:Contact;
  constructor(private CS:ContactService,private route: ActivatedRoute) { }
  getMyData(){
    const id = this.route.snapshot.params.id;
    this.CS.getSinUsers(id).subscribe(
      data =>(this.myData = data)
    );
  }
  ngOnInit() {
    this.getMyData(); 
    }


}
