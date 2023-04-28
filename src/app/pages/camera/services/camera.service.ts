import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'blob',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  uploadImage(formData: FormData) {
    return this.httpClient.post(
      'http://localhost:8000/api-images/v1/upload-images',
      this.httpOptions
    );
  }
}
