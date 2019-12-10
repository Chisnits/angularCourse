import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { BooksService } from './books.service';

@Component( {
  selector: 'app-courses', // <courses> basic css selector
  template: `
  {{ course.title | uppercase | lowercase }} <br>
  {{ course.students | number }} <br>
  {{ course.rating | number:'2.1-1' }} <br>
  {{ course.price | currency:'AUD':false:'3.2-2' }} <br>
  {{ course.releaseDate | date:'shortDate' }} <br>
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  <div (click)="onDivClicked()">
  <button
    class="btn btn-primary"
    [class.active]="isActive"
    [style.backgroundColor]="isActive ? 'blue' : 'white'"
    (click)="onSave($event)"
    >
    test
    </button>
    </div>
    <table>
      <tr>
        <td [attr.colspan]="colSpan">
        </td>
      </tr>
    </table>
    <h2>{{ title }}</h2>
    <img src="{{ imageUrl }}" />
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
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  courses;
  books;
  isActive = true;
  email = 'me@example.com';
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked!', $event);
  }
  onDivClicked() {
    console.log('div was clicked');
  }
  onKeyUp() {
      console.log(this.email);
  }

  constructor(service: CoursesService, books: BooksService) {
    this.courses = service.getCourses();
    this.books = books.getBooks();
  }
}
