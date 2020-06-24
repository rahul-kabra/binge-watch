import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';
import { Observable } from 'rxjs';
import { API_KEY } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class DataPeopleService {
  readonly baseUrl: string = 'https://api.themoviedb.org/3';
  readonly apiKey: string = API_KEY;

  constructor(private http: HttpClient) {

  }

  public loadPersonData(): Observable<Person[]> {
    return this.http.get<[Person]>(`${this.baseUrl}/discover/person?api_key=${this.apiKey}&language=&page=1`);
  }

  public getPersonDetail(id: number) {
    return this.http.get(`${this.baseUrl}/person/${id}?api_key=${this.apiKey}&append_to_response=movie_credits,tv_credits`);
  }
}