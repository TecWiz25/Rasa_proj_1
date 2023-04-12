import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})

export class FilesComponent {
  files: any = [];
 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     this.getfiles();
  }
  
  getfiles() {
    alert("here ")
    return this.http.get('http://localhost/attendance/getfiles.php',httpOptions).subscribe((res: any) => {
      console.log(res)
      if (res.posts) {
        this.files= res.posts;
        console.log("here...")
        console.log(this.files)
      }
    });
  }

}
