import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'input-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input() registerForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  

}




