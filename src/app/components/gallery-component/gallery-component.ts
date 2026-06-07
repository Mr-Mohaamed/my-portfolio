import { Component, EventEmitter, Output, signal, WritableSignal } from '@angular/core';
import { ProjectService } from '../../services/project-service';

@Component({
  selector: 'app-gallery-component',
  imports: [],
  templateUrl: './gallery-component.html',
  styleUrl: './gallery-component.css',
})
export class GalleryComponent {
  constructor(public projectService: ProjectService) {
    if (this.images.length) {
      this.gallerySelectedImage.set(this.images[0]);
    }
  }
  @Output() close = new EventEmitter<void>();

  get images(): string[] {
    return this.projectService.getSelectedProject?.gallery ?? [];
  }

  gallerySelectedImage: WritableSignal<string> = signal('');

  selectImage(image: string) {
    this.gallerySelectedImage.set(image);
  }

  closeGallery() {
    this.close.emit();
  }

  previousImage() {
    const currentIndex = this.images.indexOf(this.gallerySelectedImage());

    const previousIndex = currentIndex <= 0 ? this.images.length - 1 : currentIndex - 1;

    this.gallerySelectedImage.set(this.images[previousIndex]);
  }

  nextImage() {
    const currentIndex = this.images.indexOf(this.gallerySelectedImage());

    const nextIndex = currentIndex >= this.images.length - 1 ? 0 : currentIndex + 1;

    this.gallerySelectedImage.set(this.images[nextIndex]);
  }
}
