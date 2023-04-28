import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadComponent,
  ],
  templateUrl: './camera.component.html',
  styleUrls: [],
})
export class CameraComponent {
  fileName = '';

  public formUploadImages: FormGroup = new FormGroup({
    fk_inmueble: new FormControl('5882'),
    imagen: new FormControl(null, [Validators.required]),
    typePhoto: new FormControl('Foto'),
  });

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append('imagen', file);
      const upload$ = this.http.post(
        'http://localhost:8000/api-images/v1/upload-images',
        formData
      );

      upload$.subscribe();
    }
  }

  submit() {
    const formData = new FormData();
    console.log('Formdata:', this.formUploadImages.value);

    formData.append('imagen', this.formUploadImages.value['imagen']);
    formData.append('fk_inmueble', this.formUploadImages.value['fk_inmueble']);
    formData.append('tipo', this.formUploadImages.value['typePhoto']);
    const upload$ = this.http.post(
      'http://192.168.1.11/api-images/v1/upload-images/',
      formData
    );
    console.log('Formdata:', formData);

    upload$.subscribe();
  }
}
