import { Injectable } from '@angular/core';

@Injectable()

export class DemoService {
  constructor() {  }

  getStudentName() {
      console.log('Student name is Bheesma');
  }

}