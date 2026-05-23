import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GalleryImage {
  src: string;
  title: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) {}

  getGallery(folder: string): Observable<GalleryImage[]> {
    return this.http.get<GalleryImage[]>(`json/${folder}.json`);
  }
}