import { Component, OnInit,ViewChild,AfterViewInit  } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child;
  constructor() { }

  ngOnInit(): void {
  }
  receiveMessage(msg){
    alert(msg);
  }
  //accessing from child class through afterViewInit
  ngAfterViewInit(){
    alert(this.child.message)
  }
}
