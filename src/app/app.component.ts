import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'brikss-photos';

  takePhoto() {
    const photo = document.querySelector('#photo');
    const camera = document.querySelector('#camera');
  }
}
