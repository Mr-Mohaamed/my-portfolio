import { Component, effect, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { ProjectService } from './../../services/project-service';

@Component({
  selector: 'app-project-typing-component',
  imports: [],
  templateUrl: './project-typing-component.html',
  styleUrl: './project-typing-component.css',
})
export class ProjectTypingComponent implements OnInit, OnDestroy {
  constructor(public projectService: ProjectService) {
    effect(() => {
      this.projectService.selectedProject();

      this.restartAnimation();
    });
  }

  displayedText: WritableSignal<string> = signal('');

  private charIndex = 0;
  private timer: any;

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private getCurrentProjectText(): string {
    const project = this.projectService.projects[this.projectService.selectedProject() - 1];

    const lines = [
      `name: "${project.name}"`,
      `stack: "${project.stack}"`,
      `features: [${project.features.map((f) => `"${f}"`).join(', ')}]`,
    ];

    if (project.frontend) {
      lines.push(`frontend: "${project.frontend}"`);
    }

    if (project.backend) {
      lines.push(`backend: "${project.backend}"`);
    }

    return `const project = {\n  ${lines.join(',\n  ')}\n};`;
  }

  private restartAnimation(): void {
    clearTimeout(this.timer);

    this.displayedText.set('');
    this.charIndex = 0;

    this.startTyping();
  }

  private startTyping(): void {
    const text = this.getCurrentProjectText();

    if (this.charIndex <= text.length) {
      this.displayedText.set(text.substring(0, this.charIndex));

      this.charIndex++;

      this.timer = setTimeout(() => {
        this.startTyping();
      }, 30);
    }
  }
}
