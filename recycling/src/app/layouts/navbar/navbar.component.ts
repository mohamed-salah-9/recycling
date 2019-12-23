import { Component, OnInit } from '@angular/core';
import { NavbarService} from 'src/app/services/navbar.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public nav: NavbarService) { }

  ngOnInit() {
  }

}
