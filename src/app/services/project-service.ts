import { Injectable, signal, WritableSignal } from '@angular/core';
import { ProjectType } from '../interfaces/project-type';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  selectedProject: WritableSignal<number> = signal(1);

  projectsPath = 'assets/projects';
  projects: ProjectType[] = [
    {
      id: 1,
      name: 'Youngscientist',
      stack: 'fullstack',
      description:
        '**YoungScientist** is a fundraising platform for managing donations, campaigns, subscriptions, and community engagement.',
      features: [
        'E-commerce',
        'Payment',
        'Cart',
        'Subscription',
        'Profile',
        'Donation',
        'Contact-Us',
        'Volunteering Application',
        'Email Service',
      ],
      projectSrc: `${this.projectsPath}/youngscientist/1.jpg`,
      gallery: [
        `${this.projectsPath}/youngscientist/1.jpg`,
        `${this.projectsPath}/youngscientist/2.jpg`,
        `${this.projectsPath}/youngscientist/3.jpg`,
        `${this.projectsPath}/youngscientist/4.jpg`,
        `${this.projectsPath}/youngscientist/5.jpg`,
        `${this.projectsPath}/youngscientist/6.jpg`,
        `${this.projectsPath}/youngscientist/7.jpg`,
        `${this.projectsPath}/youngscientist/8.jpg`,
        `${this.projectsPath}/youngscientist/9.jpg`,
        `${this.projectsPath}/youngscientist/10.jpg`,
        `${this.projectsPath}/youngscientist/11.jpg`,
        `${this.projectsPath}/youngscientist/12.jpg`,
        `${this.projectsPath}/youngscientist/13.jpg`,
        `${this.projectsPath}/youngscientist/14.jpg`,
        `${this.projectsPath}/youngscientist/15.jpg`,
      ],
      githubUrl: 'aloo',
    },
    {
      id: 2,
      name: 'Advilaw',
      stack: 'fullstack',
      frontend: 'Angular',
      backend: '.NET',
      description:
        '**Advilaw** is a full-stack service marketplace platform that connects professionals with clients through job postings, subscriptions, secure payments, real-time communication, document management, and milestone-based collaboration.',
      features: [
        'Lawyer Regsiteration',
        'Client Registeration',
        'Create Job Points System like Upwork',
        'Elastic Search',
        'Payment',
        'Documents Upload',
        'Email Service',
        'Subscription',
        'Chat',
        'Mile Stone',
      ],
      projectSrc: `${this.projectsPath}/advilaw/1.jpg`,
      gallery: [
        `${this.projectsPath}/advilaw/1.jpg`,
        `${this.projectsPath}/advilaw/2.jpg`,
        `${this.projectsPath}/advilaw/3.jpg`,
        `${this.projectsPath}/advilaw/4.jpg`,
        `${this.projectsPath}/advilaw/5.jpg`,
        `${this.projectsPath}/advilaw/6.jpg`,
        `${this.projectsPath}/advilaw/7.jpg`,
        `${this.projectsPath}/advilaw/8.jpg`,
        `${this.projectsPath}/advilaw/9.jpg`,
        `${this.projectsPath}/advilaw/10.jpg`,
        `${this.projectsPath}/advilaw/11.jpg`,
        `${this.projectsPath}/advilaw/12.jpg`,
        `${this.projectsPath}/advilaw/13.jpg`,
      ],
    },
    {
      id: 3,
      name: 'Velvet',
      stack: 'frontend',
      features: ['E-commerce', 'Interesting Design'],
      projectSrc: `${this.projectsPath}/velvet/1.jpg`,
      gallery: [
        `${this.projectsPath}/velvet/1.jpg`,
        `${this.projectsPath}/velvet/2.jpg`,
        `${this.projectsPath}/velvet/3.jpg`,
        `${this.projectsPath}/velvet/4.jpg`,
        `${this.projectsPath}/velvet/5.jpg`,
        `${this.projectsPath}/velvet/6.jpg`,
      ],
    },
    {
      id: 4,
      name: 'Biscuit Shop',
      stack: 'frontend',
      features: ['E-commerce', 'Interesting Design'],
      projectSrc: `${this.projectsPath}/biscuit-shop/1.jpg`,
      gallery: [
        `${this.projectsPath}/biscuit-shop/1.jpg`,
        `${this.projectsPath}/biscuit-shop/2.jpg`,
        `${this.projectsPath}/biscuit-shop/3.jpg`,
      ],
    },
    {
      id: 5,
      name: 'Pets shop',
      stack: 'frontend',
      features: ['E-commerce', 'Interesting Design'],
      projectSrc: `${this.projectsPath}/pets-shop/1.jpg`,
      gallery: [
        `${this.projectsPath}/pets-shop/1.jpg`,
        `${this.projectsPath}/pets-shop/2.jpg`,
        `${this.projectsPath}/pets-shop/3.jpg`,
        `${this.projectsPath}/pets-shop/4.jpg`,
      ],
    },
    {
      id: 6,
      name: 'Blogs Website',
      stack: 'frontend',
      features: ['Interesting Design'],
      projectSrc: `${this.projectsPath}/blogs-website/1.jpg`,
      gallery: [
        `${this.projectsPath}/blogs-website/1.jpg`,
        `${this.projectsPath}/blogs-website/2.jpg`,
        `${this.projectsPath}/blogs-website/3.jpg`,
        `${this.projectsPath}/blogs-website/4.jpg`,
      ],
    },
  ];

  get getSelectedProject() {
    console.log(this.selectedProject());
    console.log(this.projects.find((p) => p.id == this.selectedProject()));
    return this.projects.find((p) => p.id == this.selectedProject());
  }
}
