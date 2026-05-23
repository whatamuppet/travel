import { Component } from '@angular/core';
import { Gallery, GalleryImage } from '../../shared/gallery/gallery';
import { GalleryService } from '../../services/gallery.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-switzerland',
  imports: [Gallery, CommonModule],
  templateUrl: './switzerland.html',
  styleUrl: './switzerland.css',
})
export class Switzerland {
  images$: Observable<GalleryImage[]>;

  constructor(private galleryService: GalleryService) {
    this.images$ = this.galleryService.getGallery('switzerland');
  }
}
