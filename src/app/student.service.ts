import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentService {

studentList = [
  {
     _id: 1,
     first: 'Felice',
     last: 'Gardner',
     address: '87 Blossomcrest Road',
     city: 'Lexington',
     state: 'MA'
  },
  {
      _id: 2,
      first: 'Kira',
      last: 'Gardner',
      address: '87 Blossomcrest Road',
      city: 'Lexington',
      state: 'MA'
  },
  {
      _id: 3,
      first: 'Bill',
      last: 'Gardner',
      address: '87 Blossomcrest Road',
      city: 'Lexington',
      state: 'MA'
  }
];

constructor() { }
  //basic list method
  listStudents(){
     return this.studentList;
  }

  //"getOne" method, returns item from the array with _id == id
  getStudent(id){
     return this.studentList.find((el)=>{return el._id == id});
  }

}
