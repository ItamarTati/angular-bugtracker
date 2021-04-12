import { Component, Input, OnInit } from '@angular/core';
import {FormControl,  FormGroup} from '@angular/forms';

@Component({
  selector: 'input-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input() registerForm!: FormGroup;
  constructor() { }
  email = new FormControl('')
  ngOnInit(): void {
  this.registerForm.addControl('email', this.email)
  }

}




