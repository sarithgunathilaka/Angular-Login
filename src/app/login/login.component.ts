import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;

  constructor() { }

  ngOnInit() {
  }

onLoginSubmit() {
console.log('button works');
}


}
