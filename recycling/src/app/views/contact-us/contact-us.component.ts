import { Component, OnInit } from '@angular/core';
import { ContactService} from 'src/app/services/contact.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor( private contact : ContactService ) { }

  ngOnInit() {
  
  }
  
  AddMyproduct(values) {
    this.contact.addproduct(values);
  }
}
