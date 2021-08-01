import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'color-picker';
  colors: any = [];
  size = 100;
  styleObject(): Object {
  
    return { width: this.size / 10};
  }
  generateColorBoxes() {
    for (let i = 1; i <= this.size; i++) {
      this.colors.push({
        id: i,
        color: 'red',
      });
    }
  }
}
