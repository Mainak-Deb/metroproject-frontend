import { Ticket } from './../../model/ticket';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
  vid!:string ;
  ticket:any;
  isDone:boolean=false;

  constructor(private http: HttpClient) {}


  accessVID(){
    console.log(this.vid)
    this.http.get<any>('http://localhost:8080/verify/'+this.vid).subscribe((data) => {
      //this.stations = data.stations;
      this.ticket = data;
      this.isDone=true
    });
  }

}
