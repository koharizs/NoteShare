import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  //constructor(private router:Router) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);

    //var username = e.target.elements[0].value;
    //var password = e.target.elements[1].value;

    //if(username == 'admin' && password == 'asd'){
    //  this.router.navigate(["user/:index"]);
    //}
    return false;
  }
}
