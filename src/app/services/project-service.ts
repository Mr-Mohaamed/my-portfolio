import { Injectable, signal, WritableSignal } from '@angular/core';
import { ProjectType } from '../interfaces/project-type';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  selectedProject: WritableSignal<number> = signal(1);

  projects: ProjectType[] = [
    {
      id: 1,
      name: 'Project 1',
      stack: 'backend',
      backend: '.NET',
      features: ['CV Upload', 'Email Service'],
      projectSrc: 'assets/projects/youngscientest/main.png',
      gallery: ['assets/projects/youngscientest/main.png', 'assets/projects/project2/main.png'],
      githubUrl: 'aloo',
    },
    {
      id: 2,
      name: 'Project 1',
      stack: 'backend',
      backend: '.NET',
      features: ['CV Upload', 'Email Service'],
      projectSrc: 'assets/projects/project2/main.png',
      gallery: ['project1', 'project2'],
    },
  ];

  get getSelectedProject() {
    return this.projects.find((p) => p.id == this.selectedProject());
  }
}
