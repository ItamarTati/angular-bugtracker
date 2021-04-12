import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
