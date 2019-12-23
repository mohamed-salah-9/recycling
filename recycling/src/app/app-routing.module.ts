import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent} from './views/about/about.component';
import { ContactUsComponent} from './views/contact-us/contact-us.component';
import { EventComponent} from './views/event/event.component';
import { ServicesComponent} from './views/services/services.component';
import { LoginComponent} from 'src/app/views/login/login.component';
import { HeaderComponent } from 'src/app/dashboard/header/header.component';
import { UserDataComponent} from 'src/app/dashboard/user-data/user-data.component';
import { SingleUserDataComponent} from 'src/app/dashboard/single-user-data/single-user-data.component';
import { ServiceFormComponent} from 'src/app/dashboard/service-form/service-form.component';
import { AllservicesComponent} from 'src/app/dashboard/allservices/allservices.component';
import { AdminFormComponent} from 'src/app/dashboard/admin-form/admin-form.component'
import { from } from 'rxjs';



const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "about" ,component :AboutComponent},
  {path : "contact" , component:ContactUsComponent},
  {path : "event" , component:EventComponent},
  {path : "service" , component:ServicesComponent},
  {path : "admin" , component : LoginComponent},
  {path : "dashboard" , component : HeaderComponent,
  children: [
    { path : 'data' , component : UserDataComponent},
    { path : 'data/:id' , component : SingleUserDataComponent},
    {path : 'serv' , component:ServiceFormComponent},
    {path : 'allserv' , component : AllservicesComponent},
    {path : 'addadmin' , component : AdminFormComponent}
    
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
