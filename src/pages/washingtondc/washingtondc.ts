import { Component } from '@angular/core';
import { Gallery, GalleryImage } from '../../shared/gallery/gallery';
import { GalleryService } from '../../services/gallery.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-washingtondc',
  imports: [Gallery, CommonModule],
  templateUrl: './washingtondc.html',
  styleUrl: './washingtondc.css',
})
export class Washingtondc {
  images$: Observable<GalleryImage[]>;

  constructor(private galleryService: GalleryService) {
    this.images$ = this.galleryService.getGallery('washingtondc');
  }
}
