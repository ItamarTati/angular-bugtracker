import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements  OnInit {
  
  
  constructor(
    private formbuilder: FormBuilder) {}
  
  registerForm!: FormGroup
  ngOnInit(){
    this.registerForm = this.formbuilder.group({
      name: '',
      role: '',
      email: '',
      password: ''
    })

    this.registerForm.valueChanges.subscribe(console.log)

  }
  
}




