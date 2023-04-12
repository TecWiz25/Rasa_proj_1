import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-register-a',
  templateUrl: './register-a.component.html',
  styleUrls: ['./register-a.component.scss']
})
export class RegisterAComponent {
  user:any ={};
  items:any;
 
 
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getregister();
  }
  getregister() {
    return this.http.get('http://localhost/attendance/registerA.php',httpOptions).subscribe((res: any) => {
      console.log(res)
      if (res.posts) {
        this.items = res.posts;
      }
    });
  }
}