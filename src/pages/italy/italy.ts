import { Component } from '@angular/core';
import { Gallery, GalleryImage } from '../../shared/gallery/gallery';
import { GalleryService } from '../../services/gallery.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-italy',
  imports: [Gallery, CommonModule],
  templateUrl: './italy.html',
  styleUrl: './italy.css',
})
export class Italy {
  images$: Observable<GalleryImage[]>;

  constructor(private galleryService: GalleryService) {
    this.images$ = this.galleryService.getGallery('italy');
  }
}
