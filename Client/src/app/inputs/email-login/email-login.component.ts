import { Component, Input, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {

  @Input() loginForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
