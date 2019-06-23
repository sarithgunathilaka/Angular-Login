import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;

  constructor(private router: Router, private snack: MatSnackBar) { }

  ngOnInit() {
  }

onLoginSubmit() {

  if (this.email === 'trabeya' && this.password === '123') {
    console.log('pass');
    this.snack.open('Login Success!', '', {
      horizontalPosition: 'end',
      duration: 1000,
      panelClass: ['blue-snackbar']
    } );



    this.router.navigate(['dashboard']);
  } else {
  console.log('Invalid credentials');
  const invalid = this.snack.open('Invalid Credentials', 'HINT: username: trabeya | password: 123', {
    horizontalPosition: 'end',
    duration: 5000
  } );

  invalid.onAction().subscribe(() => {
    alert('Please Enter Credentials');
  })



  }
}


}
