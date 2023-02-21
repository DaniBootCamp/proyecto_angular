import { DataModel } from './../model/DataModel';
import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  data = new DataModel();

  constructor(private service: MyServiceService, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("user"))
    this.router.navigate(['/Login'])
  }

  save(): void {
    this.service.data.push(this.data);
    this.data = new DataModel();
  }

}
