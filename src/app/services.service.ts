import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from './model/DataModel';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public data: DataModel[] = [];

  constructor(private http: HttpClient) {
}


   public fetch(): Observable<any> {
     return this.http.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=EUR");
   }

    public index: number;
    transporter(data: any): void{
      this.index = this.data.indexOf(data);
      console.log("in transporter function: index= "+this.index)
    }


}

