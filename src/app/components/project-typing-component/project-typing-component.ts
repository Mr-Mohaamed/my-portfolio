import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-project-typing-component',
  imports: [],
  templateUrl: './project-typing-component.html',
  styleUrl: './project-typing-component.css',
})
export class ProjectTypingComponent implements OnInit, OnDestroy {
  displayedText: WritableSignal<string> = signal('');

  private projects = [
    `const project = {
  name: "Hospital ERP",
  stack: [".NET", "Angular", "SQL Server"],
  status: "Production"
};`,

    `const project = {
  name: "Job Portal",
  stack: [".NET", "Angular"],
  features: ["CV Upload", "Email Service"]
};`,

    `const project = {
  name: "Scientific Experiments",
  stack: ["WPF", "MVVM", "LiveCharts"],
  realtime: true
};`,
  ];

  private projectIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: any;

  ngOnInit() {
    this.animate();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  private animate() {
    const current = this.projects[this.projectIndex];

    if (!this.deleting) {
      this.displayedText.set(current.substring(0, this.charIndex++));

      if (this.charIndex > current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.animate(), 2000);
        return;
      }
    } else {
      this.displayedText.set(current.substring(0, this.charIndex--));

      if (this.charIndex < 0) {
        this.deleting = false;
        this.projectIndex = (this.projectIndex + 1) % this.projects.length;
        this.charIndex = 0;

        this.timer = setTimeout(() => this.animate(), 500);
        return;
      }
    }

    this.timer = setTimeout(() => this.animate(), this.deleting ? 20 : 40);
  }
}
