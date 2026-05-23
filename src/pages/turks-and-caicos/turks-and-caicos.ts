import { Component } from '@angular/core';
import { Gallery, GalleryImage } from '../../shared/gallery/gallery';
import { GalleryService } from '../../services/gallery.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-turks-and-caicos',
  imports: [Gallery, CommonModule],
  templateUrl: './turks-and-caicos.html',
  styleUrl: './turks-and-caicos.css',
})
export class TurksAndCaicos {
  images$: Observable<GalleryImage[]>;

  constructor(private galleryService: GalleryService) {
    this.images$ = this.galleryService.getGallery('turksandcaicos');
  }
}
