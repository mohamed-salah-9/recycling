import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { AdminsService} from 'src/app/services/admins.service'
import { from } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor( private Admin : AdminsService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler){
        const AuthToken = this.Admin.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer '+ AuthToken)
        })
        return next.handle(authRequest)
    }
}