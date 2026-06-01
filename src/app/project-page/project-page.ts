import { CommonModule } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faWindowMinimize,
  faExpand,
  faX,
  faHouse,
  faUser,
  faEnvelope,
  faDollarSign,
  faDotCircle,
  faNavicon,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project-page',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {
  // Input
  @Input() title: string = 'Project Title';
  @Input() Navbar: boolean = false;
  // State
  showMobileNavbar: WritableSignal<boolean> = signal(false);
  // Constants
  barHeight: string = '2rem';

  Icons = {
    faWindowMinimize,
    faExpand,
    faX,
    faHouse,
    faUser,
    faEnvelope,
    faGithub,
    faLinkedin,
    faDollarSign,
    faDotCircle,
    faNavicon,
  };

  toggleMobileNavbar() {
    this.showMobileNavbar.set(!this.showMobileNavbar());
  }
}
