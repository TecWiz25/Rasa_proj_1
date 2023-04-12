import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';


const httpOptions = {};

@Component({
  selector: 'app-taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrls: ['./taskmanagement.component.scss']
})
export class TaskmanagementComponent {
 
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  display = "none";
  ngOnInit() {
   }
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


}
