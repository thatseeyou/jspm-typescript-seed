import { Component } from '@angular/core';

@Component({
  // moduleId: module.id, // problem with bundle-sfx
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
