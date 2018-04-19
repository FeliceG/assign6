import { Component, OnInit, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

//getNumberOfStudents(){
//  return this.studentList.length;
//}

  @Input() title;
  constructor() {
       this.title = '[ newTitle ]'
}

  ngOnInit() {
  }

}
