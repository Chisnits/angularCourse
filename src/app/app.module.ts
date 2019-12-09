import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { BooksService } from './books.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //a provider uses a singleton pattern meaning if you have 50 components that all
  //need the same service, only one will be instantiated then passed to the components
  //that need it. Rather than rendering 50 times.
  providers: [
    CoursesService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
