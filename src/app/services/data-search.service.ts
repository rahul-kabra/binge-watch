import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class DataSearchService {
  readonly baseUrl: string = 'https://api.themoviedb.org/3';
  readonly apiKey: string = API_KEY;

  constructor(private http: HttpClient) {

  }

  public loadSearchData(query: string, pageNumber: number) {
    return this.http.get(`${this.baseUrl}/search/multi?api_key=${this.apiKey}&language=&query=${query}&page=${pageNumber}`);
  }
}