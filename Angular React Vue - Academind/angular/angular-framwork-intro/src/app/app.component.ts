import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-framwork-intro';
  name = 'Lukas';
  elements: number[] = [];
  message: string = '';

  onChangeName() {
    this.name = 'Philip';
  }

  onAddElement() {
    this.elements.push(this.elements.length + 1);
  }

  getColor(element: number) {
    return element % 2 === 0 ? 'green' : 'red';
  }

  onUserWasClicked(username: String) {
    alert(username);
  }
}
