import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faExpand, faWindowMinimize, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-section',
  imports: [FaIconComponent, CommonModule],
  templateUrl: './project-section.html',
  styleUrl: './project-section.css',
})
export class ProjectSection {
  // Input
  @Input() title: string = 'Project Title';
  // Constants
  barHeight: string = '2rem';

  Icons = {
    faWindowMinimize,
    faExpand,
    faX,
  };
}
