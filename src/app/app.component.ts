import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Project } from '../shared/models/project';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items = [
    new Project('Project 1'),
    new Project('Project 2', "It's a second project"),
    new Project('Project 3'),
  ];
  title = 'my-organizer-web';
}
