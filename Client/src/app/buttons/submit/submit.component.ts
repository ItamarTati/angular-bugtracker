import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import {User} from '../../services/user'
import { Observable } from "rxjs";
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'button-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

}
