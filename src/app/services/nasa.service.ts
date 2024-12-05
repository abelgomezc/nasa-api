import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NASA_KEY ,NASA_APOD_URL,NASA_MARS_PHOTOS_URL, NASA_EPIC_BY_DATE_URL, NASA_EPIC_URL} from './nasa-apis';
import { ApodResponse } from '../models/ApodResponse ';
import { MarsRoverPhoto } from '../models/MarsRoverPhoto ';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private http: HttpClient) {}

    // Obtener datos APOD con fechas personalizadas
    getApodData(startDate: string, endDate: string): Observable<ApodResponse[]> {
      const apiUrl = `${NASA_APOD_URL}&start_date=${startDate}&end_date=${endDate}`;
      return this.http.get<ApodResponse[]>(apiUrl);
    }

 

  getMarsPhotosData(earth_date: string): Observable<MarsRoverPhoto[]> {
    const apiUrl = `${NASA_MARS_PHOTOS_URL}&earth_date=${earth_date}`;
    return this.http.get<{ photos: any[] }>(apiUrl).pipe(
      map(response => response.photos || []) // Asegura que siempre retorne un array
    );
  }

  getNasaEpic(date?: string): Observable<any> {
    if (date) {
      return this.http.get<any>(`${NASA_EPIC_BY_DATE_URL(date)}`);
    } else {
      return this.http.get<any>(`${NASA_EPIC_URL}`);
    }
  }
  
}

