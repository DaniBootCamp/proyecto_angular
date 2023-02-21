import { DataModel } from './../model/DataModel';
import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services.service';
import {ListComponent} from "../list/list.component";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  data = new DataModel();

  constructor(private service: MyServiceService,
              private listC: ListComponent) { }

  ngOnInit(): void {
    this.data = this.service.data[this.service.index];
    console.log("index in edit component: ",this.service.index)
  }

  save(): void {
    this.data = this.service.data[this.service.index];
  }


}
