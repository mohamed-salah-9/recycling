import { Component, OnInit } from '@angular/core';
import { ServService} from 'src/app/services/serv.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  constructor(private SS : ServService) { }

  ngOnInit() {
  } 
  

  addservice(value){
    this.SS.AddServices(value);
  }

}
  