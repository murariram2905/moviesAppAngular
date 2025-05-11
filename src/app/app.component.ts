import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
 searchText = '';
  movies: any[] = [];
  error = '';

  constructor(private moviesService: MoviesService) {}

  search(): void {
    this.moviesService.searchMovies(this.searchText).subscribe({
      next: (response) => {
        if (response.Response === 'True') {
          this.movies = response.Search;
          this.error = '';
        } else {
          this.movies = [];
          this.error = response.Error;
        }
      },
      error: () => {
        this.movies = [];
        this.error = 'An error occurred.';
      }
    });
  }
}
