import { Component, Input, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-password-login',
  templateUrl: './password-login.component.html',
  styleUrls: ['./password-login.component.scss']
})
export class PasswordLoginComponent implements OnInit {

  @Input() registerForm!: FormGroup;
  hide = true;
  constructor() { }
  ngOnInit(): void {

  }

}
