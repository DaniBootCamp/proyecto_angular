import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public service: MyServiceService, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("user")){
      this.router.navigate(['/Login'])
    } else {
          if (this.service.data.length === 0) {
              this.service.fetch().subscribe({
                  next:(data: any) => (console.log('Start'),this.service.data = data.coins),
                  error: error => console.log('An error has occurred: '+error),
                  complete: () => (console.log(this.service.data), console.log('Done!'))
                }
              );
          }
        }
  }

  delete(data: any): void{
    this.service.data.splice(this.service.data.indexOf(data),1);
  }




}
