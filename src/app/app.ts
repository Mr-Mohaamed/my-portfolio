import { ProjectService } from './services/project-service';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectPage } from './project-page/project-page';
import { ProjectSection } from './components/project-section/project-section';
import { ProjectTypingComponent } from './components/project-typing-component/project-typing-component';
import { GalleryComponent } from './components/gallery-component/gallery-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectPage, ProjectSection, ProjectTypingComponent, GalleryComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
  constructor(public projectService: ProjectService) {}

  selectProject(projectId: number) {
    this.projectService.selectedProject.set(projectId);
  }

  isGalleryShown = signal(false);

  openGallery() {
    console.log('OPEN');
    this.isGalleryShown.set(true);
  }

  closeGallery() {
    console.log('CLOSE');
    this.isGalleryShown.set(false);
  }
}
