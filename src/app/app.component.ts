import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchText = '';
  movies: any[] = [];
  error = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadDefaultMovies();
  }

  loadDefaultMovies(): void {
    this.moviesService.searchMovies('Avengers').subscribe({
      next: (response) => {
        if (response.Response === 'True') {
          this.movies = response.Search;
          this.error = '';
        } else {
          this.error = response.Error;
        }
      },
      error: () => {
        this.error = 'Failed to load default movies.';
      }
    });
  }

  search(): void {
    if (!this.searchText.trim()) return;

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
