import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: any;
  constructor(public http: HttpClient) {
    //Rest API Calling
    this.http.get('http://localhost:5000/users').subscribe(data => {
      this.users = data;
      console.log(this.users);
    
    });
  }

}
