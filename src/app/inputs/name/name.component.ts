import { Component, Input, OnInit } from '@angular/core';
import {FormControl,  FormGroup} from '@angular/forms';

@Component({
  selector: 'input-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  @Input() registerForm!: FormGroup;
  constructor() { }
  name = new FormControl('')
  ngOnInit(): void {
    this.registerForm.addControl('name', this.name)

  }

}
