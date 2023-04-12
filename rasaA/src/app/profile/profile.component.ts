import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: any = {};
  item:any;
  constructor(private http: HttpClient) { }
  id: any;
  ngOnInit(): void {
    this.id = localStorage.getItem('sessionUser');
    this.show();
  }
  show() {
    return this.http.get('http://localhost/attendance/profile.php?currUser=' + this.id, httpOptions).subscribe((res: any) => {
      console.log(res)
      if (res.post) {
        this.user = res.post;
        console.log(this.user.designation)
      }
    });
  }
}
