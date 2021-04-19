import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(
    private formbuilder: FormBuilder) { }

  loginForm!: FormGroup
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', {
        validators: [Validators.required],
        updateOn: "change",
      }],
      password: ['', {
        validators: [Validators.required,
        ],
        updateOn: "change"
      }],
    })
    this.loginForm.valueChanges.subscribe(console.log)

  }

}