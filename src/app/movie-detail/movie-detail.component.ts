import { Component, OnInit } from '@angular/core';
import { DataMovieService } from '../services/data-movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, Genre } from '../models/movie';
import { Cast } from '../models/cast';
import { Director } from '../models/director';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  cast: Cast[];
  director: Director;
  genres: Genre[];
  similarMovies: Movie[] = [];

  constructor(private movieService: DataMovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = params["id"];
        this.fetchMovieDetail(id);
      }
    );
  }

  fetchMovieDetail(id: number) {
    this.movieService.getMovieDetail(id).subscribe(
      (response: any) => {
        this.movie = response
        this.genres = this.movie.genres.splice(0, 3);
        this.cast = response.credits.cast.splice(0, 5) as Cast[];
        this.director = response.credits.crew.filter(id => {
          if (id.department === "Directing")
            return id
        })[0];
        this.similarMovies = response.similar.results.splice(0, 5) as Movie[]
      },
      (error: any) => {

      }
    )
  }

  goToMovieDetail(id: number) {
    this.router.navigate(['movie/detail', id]);
  }

  navigateToHome() {
    this.router.navigate(["/movies"]);
  }

  goToPersonDetail(id: number) {
    this.router.navigate(['person/detail', id]);
  }

  setDefaultPersonPic(event, person) {
    if (person.gender === 2)
      event.target.src = "assets/actor.svg";
    else if (person.gender === 1)
      event.target.src = "assets/actress.svg";
  }

  setDefaultPosterPic(event) {
    event.target.src = "assets/movie-poster.png";
  }

  setDefaultSmallPosterPic(event) {
    event.target.src = "assets/movie-poster-small.png";
  }

  goToAboutPage() {
    this.router.navigate(["/about"]);
  }

}