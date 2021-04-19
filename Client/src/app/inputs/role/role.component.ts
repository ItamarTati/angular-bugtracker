import { Component, Input, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'input-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  @Input() registerForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {

  }


}
