import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { EventsComponent } from './layouts/events/events.component';
import { TestComponent } from './layouts/test/test.component';
import { OfferComponent } from './layouts/offer/offer.component';
import { AboutComponent } from './views/about/about.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { EventComponent } from './views/event/event.component';
import { ServicesComponent } from './views/services/services.component';
import { ContactService } from './services/contact.service';
import { ServService } from './services/serv.service';
import { LoginComponent } from './views/login/login.component';
import { AuthInterceptor } from './user-intersptor';
import { AdminsService } from './services/admins.service';

import { HeaderComponent } from './dashboard/header/header.component';
import { UserDataComponent } from './dashboard/user-data/user-data.component';
import { ServiceFormComponent } from './dashboard/service-form/service-form.component';
import { AdminFormComponent } from './dashboard/admin-form/admin-form.component';
import { SingleUserDataComponent } from './dashboard/single-user-data/single-user-data.component';
import { SingleServiceDataComponent } from './dashboard/single-service-data/single-service-data.component';
import { AdminsComponent } from './dashboard/admins/admins.component';
import { AllservicesComponent } from './dashboard/allservices/allservices.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    EventsComponent,
    TestComponent,
    OfferComponent,
    AboutComponent,
    ContactUsComponent,
    EventComponent,
    ServicesComponent,
    LoginComponent,
    HeaderComponent,
    UserDataComponent,
    ServiceFormComponent,
    AdminFormComponent,
    SingleUserDataComponent,
    SingleServiceDataComponent,
    AdminsComponent,
    AllservicesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService,ServService,AdminsService,
    {
      provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
    }
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
