import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'color-picker';
  selectedSize!: number;
  currentColor: string = '';
  colors: any = [];
  sizes = [100, 225, 400];
  boxSize!: number;

  generateColorBoxes() {
    this.colors = [];
    this.boxSize = 100 / Math.sqrt(this.selectedSize);
    for (let i = 1; i <= this.selectedSize; i++) {
      if (this.colors.length < this.selectedSize) {
        this.colors.push({
          id: i,
          color: this.currentColor,
        });
      }
    }
  }

  changeColor(box: any) {
    box.color = this.currentColor;
  }

  reset() {
    // for (let i = 0; i < this.selectedSize; i++) {
    //   this.colors[i].color = '';
    // }
    this.colors = []
  }
}
