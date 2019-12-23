import { Component, OnInit } from '@angular/core';
import { ServService} from 'src/app/services/serv.service';
import { Service} from 'src/app/Models/serviceModel'
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrls: ['./allservices.component.css']
})
export class AllservicesComponent implements OnInit {
   AllServ : Service [] = []
  constructor(private SS : ServService , private router : Router) { }

  ngOnInit() {
    this.getAllServices()
  }
  
  getAllServices(){
    this.SS.getServices().subscribe(
      data => this.AllServ= data
    )
  }
  delete(id){
    this.SS.DeleteService(id).subscribe();
    
    this.router.navigateByUrl("", { skipLocationChange: true} )
    
    .then(() => {
      this.router.navigate(['dashboard/allserv']);
    });
  }   
}
