import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { BooksService } from './books.service';

@Component( {
  selector: 'app-courses', // <courses> basic css selector
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <h2>{{books.length}} Authors</h2>
      <div *ngFor="let book of books">
        {{ book.author }}
        <a [href]="book.link" target="_blank">Learn More</a>
      </div>
  ` // html markup we want rendered
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  books;

  constructor(service: CoursesService, books: BooksService) {
    this.courses = service.getCourses();
    this.books = books.getBooks();
  }
}
