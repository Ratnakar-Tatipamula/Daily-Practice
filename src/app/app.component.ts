import { Component } from '@angular/core';
import { DemoService } from './core/services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daily-practice';
  constructor(private  demoservice : DemoService ) {
    console.log('In AppComponent Constructor');
    this.demoservice.getStudentName();
  }


}
