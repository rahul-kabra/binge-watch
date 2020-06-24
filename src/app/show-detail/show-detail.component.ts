import { Component, OnInit } from '@angular/core';
import { Cast } from '../models/cast';
import { Genre } from '../models/movie';
import { Show } from '../models/show';
import { DataTvService } from '../services/data-tv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {

  show: Show;
  cast: Cast[];
  createdBy: [];
  genres: Genre[];
  similarShows: Show[] = [];
  seasons: number;

  constructor(private showService: DataTvService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = params["id"];
        this.fetchShowDetail(id);
      }
    );
  }

  fetchShowDetail(id: number) {
    this.showService.getShowDetail(id).subscribe(
      (response: any) => {
        this.show = response
        this.genres = this.show.genres.splice(0, 3);
        this.cast = response.credits.cast.splice(0, 5) as Cast[];
        this.createdBy = response.created_by.filter(id => {
          return id
        });
        this.similarShows = response.similar.results.splice(0, 5) as Show[];
        this.seasons = this.show.seasons.length;
      },
      (error: any) => {

      }
    )
  }

  goToshowDetail(id: number) {
    this.router.navigate(['show/detail', id]);
  }

  navigateToHome() {
    this.router.navigate(["/shows"]);
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