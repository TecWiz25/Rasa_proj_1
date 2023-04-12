import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})

export class AdminpageComponent {
  users: any = [];
  u :any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     this.getattendance();
  }
  
  getattendance() {
    return this.http.get('http://localhost/attendance/attendancelist.php',httpOptions).subscribe((res: any) => {
      console.log(res)
      if (res.posts) {
        this.users= res.posts;
        console.log("here...")
        console.log(this.users)
      }
    });
  }
}
