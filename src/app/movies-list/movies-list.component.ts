import { Component, OnInit } from '@angular/core';
import { DataMovieService } from '../services/data-movie.service';
import { Movie } from '../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movieList: Movie[] = [];
  pageNumber: number = 1;
  totalPageNumber: number;

  constructor(private movieService: DataMovieService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.movieService.loadMovieData(this.pageNumber).subscribe(
      (response: any) => {
        this.totalPageNumber = response.total_pages;
        this.onSuccess(response.results);
      },
      (error: any) => {

      }
    );
  }

  goToMovieDetail(id: number) {
    this.router.navigate(['movie/detail', id]);
  }

  onSuccess(res) {
    if (res != undefined) {
      res.forEach(item => {
        this.movieList.push(item);
      });
    }
  }

  onScroll() {
    if (this.pageNumber < this.totalPageNumber) {
      console.log("Scrolled page: " + this.pageNumber);
      this.pageNumber = this.pageNumber + 1;
      this.loadData();
    }
    else {
      return false;
    }
  }

  setDefaultSmallPosterPic(event) {
    event.target.src = "assets/movie-poster-small.png";
  }

  goToAboutPage() {
    this.router.navigate(["/about"]);
  }
}