import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};


@Component({
  selector: 'app-sidebartsk',
  templateUrl: './sidebartsk.component.html',
  styleUrls: ['./sidebartsk.component.scss']
}) 

export class SidebartskComponent {
  closeResult: string = '';
items:any=[];
item :any;
curruser:any =0;
userid:any={};
rows: any = [];
task :any=[];
uid :any;
showflg=true;
newitem:any;
newTask:any;
updttask: any;
utype:any;
taskname : any;
showTaskForm = false;
renderflag =true;
showuid= false;
tasky:any;

constructor(private modalService: NgbModal, private http: HttpClient) { }

ngOnInit(): void { 
  this.rows = [{
    textarea: ''
    // this.currUser =localStorage.getItem("sessionUser");
  }];
    console.log(localStorage.getItem("uid")) 
    console.log("admin or not",localStorage.getItem("admin"))
    this.uid=localStorage.getItem("uid");
    this.utype=localStorage.getItem("admin");
    if (this.utype == 1) this.showuid = true;
    else this.showuid = false;
    this.gettsk();
    this.renderflag=true;
    this.taskname="";
 }


   @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  display = "none";
  
openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  selectedTeam = '';
  onSelected(value:string): void {
    this.selectedTeam = value;
 
}

  
 
 gettsk() {
  //this.showflg=true;
  console.log("user type is:",this.utype);
  if (this.utype == 1) {
  return this.http.get('http://localhost/attendance/gettask.php',httpOptions).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log("tasks are",this.task)
    }
  });
}
else {return this.getmytasks();}
} 

getbyproject(){
  if (this.utype == 1) {
  return this.http.get('http://localhost/attendance/tasksbyprojadmin.php',httpOptions).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  });
} else {
  let queryParams = new HttpParams();
  queryParams = queryParams.append("uid",this.uid);
  return this.http.get('http://localhost/attendance/tasksbyprojuser.php',{params:queryParams}).subscribe((res: any) => {
  console.log(res);
  if (res.error == 400 && res.posts =="") { console.log(res);
    this.task=null;
    console.log(this.task)
  }
  else{  
    this.task= res.posts;
    console.log(this.task)
  }
});
}
} 

getbystartdate(){
  if (this.utype == 1) {
    return this.http.get('http://localhost/attendance/tasksbystartdtadmin.php',httpOptions).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  });
} else {
  let queryParams = new HttpParams();
  queryParams = queryParams.append("uid",this.uid);
  return this.http.get('http://localhost/attendance/tasksbystartdtuser.php',{params:queryParams}).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  });
}
}

getbylmoddate(){
  if (this.utype == 1) {
  return this.http.get('http://localhost/attendance/tasksbylmoddtadmin.php',httpOptions).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  });
} else {
  let queryParams = new HttpParams();
  queryParams = queryParams.append("uid",this.uid);
  return this.http.get('http://localhost/attendance/tasksbylmoddtuser.php',{params:queryParams}).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  });
}
}

getbyduedate() {
  if(this.utype == 1){
  return this.http.get('http://localhost/attendance/tasksbyduedtadmin.php',httpOptions).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  });}
  else {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("uid",this.uid);
    return this.http.get('http://localhost/attendance/tasksbyduedtuser.php',{params:queryParams}).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  });
  }
}

getbypriority() { 
  if(this.utype == 1){
  return this.http.get('http://localhost/attendance/tasksbypriorityadmin.php',httpOptions).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  }); }
  else {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("uid",this.uid);
    return this.http.get('http://localhost/attendance/tasksbypriorityuser.php',{params:queryParams}).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  });
  }
}

getmytasks() {
  //this.showflg=true;
  let queryParams = new HttpParams();
  queryParams = queryParams.append("uid",this.uid);
  return this.http.get('http://localhost/attendance/getmytasks.php',{params:queryParams}).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  });
}

getduetoday() {
  if (this.utype == 1) {
   return this.http.get('http://localhost/attendance/getduetodayadmin.php',httpOptions).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  });
}
else {
  let queryParams = new HttpParams();
  queryParams = queryParams.append("uid",this.uid);
  return this.http.get('http://localhost/attendance/getduetodayuser.php',{params:queryParams}).subscribe((res: any) => {
    console.log(res);
    if (res.error == 400 && res.posts =="") { console.log(res);
      this.task=null;
      console.log(this.task)
    }
    else{  
      this.task= res.posts;
      console.log(this.task)
    }
  });

}
}


open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

addRow() {
  let row = { textarea: '' };
  this.rows.push(row);
}

deleteRow(index: any) {
  this.rows.splice(index, 1);
}

onsubmit() {
  console.log(this.rows)
}

onSubmit(){
  alert("here..............");
}
onClickSubmit(register: NgForm) {
  register.value.userid = localStorage.getItem("uid");
  alert("Enter the text :" +JSON.stringify(register.value));
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.post('http://localhost/attendance/taskmanage.php', register.value).subscribe((res: any) => {
    console.log(res);
  });
} 

taskdetails(tsk:any) {
  alert("taskid is "+tsk.taskid);
  this.updttask=tsk;
  alert(JSON.stringify(this.updttask)); 
  this.showTaskForm=true;
}

sdothis(){
  alert("here....dothis()...");
}

showForm(task1:any) {
    this.showTaskForm = true;
    this.newTask.name = '';
    this.newTask.description = '';
    this.showTaskForm = true;
  
}

edittask(tasky:NgForm){
  this.showTaskForm = false;
  alert(this.updttask.taskname);
  alert("chenged to"+JSON.stringify(tasky.value));
  console.log(tasky.value);
 
  tasky.value['taskid']=this.updttask.taskid;
  //tasky.value['uid']=this.uid;
  if (tasky.value['taskname'] == "") tasky.value['taskname']=this.updttask.taskname;
  if (tasky.value['uid'] == "") tasky.value['uid']=this.updttask.uid;
  if (tasky.value['loggedhrs'] == "") tasky.value['loggedhrs']=this.updttask.loggedhrs;
  if (tasky.value['descrip'] == "") tasky.value['descrip']=this.updttask.description;
  if (tasky.value['projects'] == "") tasky.value['projects']=this.updttask.projects;
  if (tasky.value['tagname'] == "") tasky.value['tagname']=this.updttask.tagname;
  if (tasky.value['comments'] == "") tasky.value['comments']=this.updttask.comments;
  if (tasky.value['startdt'] == "") tasky.value['startdt']=this.updttask.startdt;
  if (tasky.value['duedt'] == "") tasky.value['duedt']=this.updttask.duedt;
  if (tasky.value['lastmoddt'] == "") tasky.value['lastmoddt']=this.updttask.lastmoddt;
  if (tasky.value['priority'] == "") tasky.value['priority']=this.updttask.priority;
  if (tasky.value['compdt'] == "") tasky.value['compdt']="";
  if (tasky.value['files'] == "") tasky.value['files']=this.updttask.files;

  console.log(JSON.stringify(tasky.value));

  return this.http.post('http://localhost/attendance/taskupdate.php',tasky.value).subscribe( (res:any) =>{
     console.log(res)
     if(res['message'] == 'success')
       console.log("task updated..");
     else 
        window.alert("Invalid task details or missing details");
    });
   this.renderflag = true; 
   if (this.utype == 1) {
    return this.http.get('http://localhost/attendance/gettask.php',httpOptions).subscribe((res: any) => {
      console.log(res);
      if (res.error == 400 && res.posts =="") { console.log(res);
        this.task=null;
        console.log(this.task)
      }
      else{  
        this.task= res.posts;
        console.log(this.task)
      }
    });
  }
  else {return this.getmytasks();}
}


addTask() {
  this.showTaskForm = false;
}

}
