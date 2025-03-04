import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor(private http: HttpClient) {}

  // populatePDF(xmlData: string) {
  //   const blob = new Blob([xmlData], { type: 'application/xml' });
  //   const formData = new FormData();
  //   formData.append('xmlData', blob, 'data.xml');

  //   return this.http.post('http://localhost:3000/populate-pdf', formData, { responseType: 'blob' });
  // }
  populatePDF(xmlData: string) {
    const blob = new Blob([xmlData], { type: 'application/xml' });
    const formData = new FormData();
    formData.append('xmlData', blob, 'data.xml');
  
    return this.http.post('http://localhost:3000/populate-pdf', formData, { responseType: 'blob' });
  }
  
}
