import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(
    private formbuilder: FormBuilder) { }

  registerForm!: FormGroup
  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      name: ['', { validators: [Validators.required], updateOn: "change" }],

      role: ['', { validators: [Validators.required], updateOn: "change" }],

      email: ['', {
        validators: [Validators.required, Validators.email],
        updateOn: "change",
      }],

      password: ['', {
        validators: [Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{0,}$')
      ], 
        updateOn: "change"
      }],
    })
    this.registerForm.valueChanges.subscribe(console.log)

  }

}




