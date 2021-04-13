import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms'

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
      name: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.registerForm.valueChanges.subscribe(console.log)

  }
  
}




