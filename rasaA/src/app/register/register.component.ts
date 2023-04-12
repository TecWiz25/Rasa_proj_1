import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  showPassword = false;
  msg : any={};
  public showupassword: boolean = false;
  //constructor(private http: HttpClient) { }
  constructor(private http: HttpClient,private router : Router) { }
 

  onClickSubmit(register:NgForm) {
    alert("REGISTER SUCCSSFULLY!!!");
   return this.http.post('http://localhost/attendance/register.php',register.value).subscribe(res =>{
    console.log(res)
    this.msg=res;
    console.log(this.msg)
    console.log(this.msg['message'])
    if (this.msg['message']== "Registered successful!"){
      alert("Registered Successfully!");
      this.router.navigate(['/login'])
    }
   })
  }
}