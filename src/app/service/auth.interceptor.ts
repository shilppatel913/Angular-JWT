//this interceptor is used to add the  token in the header to get the user details when the user is logged in

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private loginService:LoginService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq=req
        let token = this.loginService.getToken()
        console.log("Interceptor",token)
        if(token!=null){
            console.log(`Bearer ${token}`)
            newReq = newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}});
            newReq=newReq.clone({setHeaders:{'Access-Control-Allow-Origin':'*'}});
            newReq=newReq.clone({setHeaders:{'Access-Control-Allow-Methods':'GET,POST'}});
        }
        return next.handle(newReq)
    }
    
}