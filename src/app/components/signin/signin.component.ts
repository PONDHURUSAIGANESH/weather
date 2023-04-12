import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  login:FormGroup|any;
  constructor(){}


  ngOnInit(): void {
    this.login=new FormGroup({
      'fname':new FormControl(),
      'password':new FormControl()
    })
  }
  logindata(Login:FormGroup){
    console.log(this.login.value);
  }

}