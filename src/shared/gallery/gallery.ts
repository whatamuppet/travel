import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryImage {
  src: string;
  title: string;
  date: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  @Input() images: GalleryImage[] | null = [];

  selectedImage: GalleryImage | null = null;

  openImage(img: GalleryImage) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeImage();
  }
}