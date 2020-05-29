import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../core/services/demo.service';

@Component({
  selector: 'app-fc',
  templateUrl: './fc.component.html',
  styleUrls: ['./fc.component.css']
})
export class FcComponent implements OnInit {

  constructor(private ds: DemoService ) {
    console.log('In the FC Constructor');
    console.log(this.ds.getStudentName());
   }

  ngOnInit() {
  }

}
