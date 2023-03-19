import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  signupForm: FormGroup;
  loginMode = true;
  constructor(private route: Router) { }
  ngOnInit() {
    this.signupForm = new FormGroup({
        email: new FormControl(null,[Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required]),
      })
  }

  onSwitchMode(){
    this.loginMode = !this.loginMode;
  }
  onSubmit(){
    this.route.navigate(['/products']);
  }

}
