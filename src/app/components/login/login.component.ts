import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //we will use an object known as credential to save our username and password 
  //we will bind this credentials object to our fields using ngModel
  credentials={
    username:"",
    password:""
  }
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  //onSubmit method will run on submitting the form 
  onSubmit(){
    console.log("the form was submitted")
    if((this.credentials.username!=='' || this.credentials.password!=='')){
        console.log("you are successfully logged in")
        //now we will create a login service which will generate a token authenticate our creds
        this.loginService.generateToken(this.credentials).subscribe(
          (response:any)=>{
              console.log(response.token) //token will be printed
              this.loginService.loginUser(response.token);
              window.location.href="/dashboard";
              //now this dashboard can be accessed by any user regardless of whether he is logged in or not
              //to secure this route we can make an auth guard and only let the user see the dashboard when he is logged in
          },
          error=>{
              console.log("some error occured")
          }
        )
    }else{
      console.log("Username or password is empty")
    }
  }

}
