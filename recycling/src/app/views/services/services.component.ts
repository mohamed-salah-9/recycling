import { Component, OnInit } from '@angular/core';
import { Service} from 'src/app/Models/serviceModel';
import { ServService} from 'src/app/services/serv.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services : Service[] = [];
  constructor( private service : ServService ) {  this.getAll() }

  ngOnInit() {
    this.getAll()
  }
  
  getAll() {
    this.service.getServices().subscribe(
      data => this.services = data
    );
  }
}
