import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectPage } from './project-page/project-page';
import { ProjectSection } from './components/project-section/project-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectPage, ProjectSection],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
