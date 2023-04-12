import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};
@Component({
  selector: 'app-attendance-a',
  templateUrl: './attendance-a.component.html',
  styleUrls: ['./attendance-a.component.scss'] 
 
}) 

export class AttendanceAComponent {
  showPassword = false;
  
  postId: any;
  user:any;
  message:any;
  id:any;
  

  constructor(private http: HttpClient,private router : Router) { }
 

  ngOnInit(){
    // console.log(
    //   localStorage.getItem("sessionUser"))
  }


onClickSubmit(login:NgForm) {
  alert("Entered Email id : " + JSON.stringify(login.value));
  return this.http.post('http://localhost/attendance/login.php',login.value).subscribe( (res:any) =>{
   this.message = res.message;
   this.id = res.id
   if(this.message == 'login_success'){
     // console.log(res.id.id);
     localStorage.setItem('sessionUser',this.id.id);
     //localStorage.setItem('sessionUserDet',res.user.id);
     this.router.navigate(['/dashboard']);
     console.log(res);
    
   }
   else{
     window.alert("Invalid email or password");
   }
  })
}
}
