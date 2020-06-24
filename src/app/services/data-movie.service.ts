import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { API_KEY } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class DataMovieService {
  readonly baseUrl: string = 'https://api.themoviedb.org/3';
  readonly apiKey: string = API_KEY;

  constructor(private http: HttpClient) {

  }

  public loadMovieData(pageNumber: number): Observable<Movie[]> {
    return this.http.get<[Movie]>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&language=&page=${pageNumber}`);
  }

  public getMovieDetail(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=credits,similar`);
  }

}