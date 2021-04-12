import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'input-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  @Input() registerForm!: FormGroup;
  hide = true;
  constructor() { }
  password = new FormControl('')
  ngOnInit(): void {
    this.registerForm.addControl('password', this.password)

  }

}
