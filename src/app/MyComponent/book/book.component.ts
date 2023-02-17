import { Ticket } from './../../model/ticket';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  stations: string[] = [];
  corsHeaders: HttpHeaders;
  headdata: any;
  postData!:Ticket;
  isCompleted: boolean = false;
  ticket:any;


  personCount!: number;
  startStation!: string;
  endStation!: string;
  isReturn!: boolean;

  constructor(private http: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    });
    this.headdata = { headers: this.corsHeaders };
  }

  getTicket() {
    console.log(
      this.personCount,
      this.startStation,
      this.endStation,
      this.isReturn
    );
    var postData={
      personCount: this.personCount,
      startStation: this.startStation,
      endStation: this.endStation,
      isReturn: this.isReturn
    };

    this.http
      .post<any>('http://localhost:8080/metroroute',postData,this.headdata)
      .subscribe((data) => {
        console.log(data);
        this.ticket = data;
        this.isCompleted = true;
      });
  }

  ngOnInit() {
    this.http.get<any>('http://localhost:8080/stations').subscribe((data) => {
      //this.stations = data.stations;
      this.stations = data.stations;
    });
  }
}
