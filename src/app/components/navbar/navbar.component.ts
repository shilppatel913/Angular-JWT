import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;
  constructor(private loginService: LoginService) { }

  //on initialization of this component we will check the value of loggedIn
  ngOnInit(): void {
      if(this.loginService.isLoggedIn()){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
  }

    logoutUser() {
      console.log("logout user was clicked")
      this.loginService.logout(); //this will clear the local storage
      location.reload();
    }
  

}
