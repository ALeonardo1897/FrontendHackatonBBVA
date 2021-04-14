import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department';
import {Departments} from 'src/app/constant/departments';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  departments: Department[];

  constructor() { }

  ngOnInit(): void {
    this.departments = Departments; 
  }

}
