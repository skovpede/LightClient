import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  switches = []
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<any[]>('https://lightserverdv5b.azurewebsites.net/status').subscribe(s => this.switches = s)
  }
}
