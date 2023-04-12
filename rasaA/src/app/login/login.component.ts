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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword = false;
  
  postId: any;
  user:any;
  message:any;
  id:any;
  admin:any;
  

  constructor(private http: HttpClient,private router : Router) { }
 

  ngOnInit(){
    // console.log(
    //   localStorage.getItem("sessionUser"))
  }
  
   
 
  onClickSubmit(login:NgForm) {
   alert("Login successfully!!");
   return this.http.post('http://localhost/attendance/login.php',login.value).subscribe( (res:any) =>{
    this.message = res.message;
    this.id = res.id
    this.admin = res.admin
    
    console.log(this.admin,this.id)
    
    if(this.message == 'login_success'){
      localStorage.setItem('uid',this.id);
      localStorage.setItem('admin',this.admin);
      if(this.admin=='1'){ 
          console.log('hello')  
          this.router.navigate(['/admin'])}
      else{
        this.router.navigate(['/dashboard']);
        console.log(res);
      } 
      
    }
    else{
      window.alert("Invalid email or password");
    }
   })
 }
}
