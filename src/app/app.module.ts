import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { StudentModule } from './student/student.module';
import { FacultyModule } from './faculty/faculty.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    FacultyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
