import { Component, OnInit } from '@angular/core';
import { DataPeopleService } from '../services/data-people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from '../models/show';
import { Person } from '../models/person';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  person: Person;
  movies: Movie[];
  shows: Show[];

  constructor(private personService: DataPeopleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = params["id"];
        this.fetchPersonDetail(id);
      }
    );
  }

  fetchPersonDetail(id: number) {
    this.personService.getPersonDetail(id).subscribe(
      (response: any) => {
        this.person = response;
        this.movies = response.movie_credits.cast.splice(0, 5);
        this.shows = response.tv_credits.cast.splice(0, 5);
      },
      (error: any) => {

      }
    )
  }

  goToShowDetail(id: number) {
    this.router.navigate(['show/detail', id]);
  }

  goToMovieDetail(id: number) {
    this.router.navigate(['movie/detail', id]);
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