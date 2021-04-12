import { Component, Input, OnInit } from '@angular/core';
import {FormControl,  FormGroup} from '@angular/forms';

@Component({
  selector: 'input-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  @Input() registerForm!: FormGroup;
  constructor() { }

  role = new FormControl('')
  ngOnInit(): void {
    this.registerForm.addControl('role', this.role)

  }


}
