import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { LoginService } from '../login.service';

export interface Phone{
  title: string, 
  price: number, 
  company: string
}

@Component({
  selector: 'app-enter-page',
  templateUrl: './enter-page.component.html',
  styleUrls: ['./enter-page.component.css']
})
export class EnterPageComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return '';
    }

    return this.email.hasError('email') ? 'Неправильный email' : '';
  }

  onSubmit() {
    this.loginService.login(this.email.value, this.password.value)
  }
}
