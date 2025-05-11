import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey = 'a2f497e6'; // Replace with your key
  private apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&s=${title}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&i=${id}&plot=full`);
  }
}
