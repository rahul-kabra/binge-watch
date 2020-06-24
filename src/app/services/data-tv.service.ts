import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from '../models/show';
import { Observable } from 'rxjs';
import { API_KEY } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class DataTvService {
  readonly baseUrl: string = 'https://api.themoviedb.org/3';
  readonly apiKey: string = API_KEY;

  constructor(private http: HttpClient) {

  }

  public loadShowData(pageNumber: number): Observable<Show[]> {
    return this.http.get<[Show]>(`${this.baseUrl}/discover/tv?api_key=${this.apiKey}&language=&page=${pageNumber}`);
  }

  public getShowDetail(id: number) {
    return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}&append_to_response=credits,similar`);
  }
}