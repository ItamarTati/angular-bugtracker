import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'input-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input() registerForm!: FormGroup;
  constructor() { }
  email = new FormControl('', Validators.required);

  ngOnInit(): void {
  this.registerForm.addControl('email', this.email);
  }

  

}




