import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//this service will provide different login functionalities and several checks
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"
  constructor(private http:HttpClient) { }


  //calling the spring boot backend service to generate token
  generateToken(credentials:any) {
      return this.http.post(`${this.url}/token`, credentials)
  }


  //this function is to login the user when the  token is present in the localStorage
  loginUser(token:string){
      localStorage.setItem("token",token);
      return true;
  }

  //fuction to check if the person is logged in or not
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  //functionality to get the token 
  getToken(){
    let token=localStorage.getItem("token")
    return token;
  }



  //function to logout the user
  logout(){
    localStorage.removeItem("token")
    return true;
  }

}
