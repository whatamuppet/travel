import { Component } from '@angular/core';
import { Gallery, GalleryImage } from '../../shared/gallery/gallery';
import { GalleryService } from '../../services/gallery.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-york',
  imports: [Gallery, CommonModule],
  templateUrl: './new-york.html',
  styleUrl: './new-york.css',
})
export class NewYork {
  images$: Observable<GalleryImage[]>;

  constructor(private galleryService: GalleryService) {
    this.images$ = this.galleryService.getGallery('newyork');
  }
}
