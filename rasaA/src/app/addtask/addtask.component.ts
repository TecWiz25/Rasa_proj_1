import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})

export class AddtaskComponent { 
  uid :any;
  constructor(private http: HttpClient,private router : Router) { }
  //constructor(private modalService: NgbModal, private http: HttpClient) {}


  ngOnInit(){
     console.log(localStorage.getItem("uid"))
     this.uid=localStorage.getItem("uid");
  }
  
   
 onClickSubmit(task:NgForm) {
   console.log(task.value); 
   task.value['uid']=this.uid
   alert("Entered task details: " + JSON.stringify(task.value));
   return this.http.post('http://localhost/attendance/taskadding.php',task.value).subscribe( (res:any) =>{
      console.log(res)
      if(res['message'] == 'success'){
        console.log("task added..")
        this.router.navigate(['/taskmanagement'])}
      else{
         window.alert("Invalid task details or missing details");
    }
   })
 }

}
