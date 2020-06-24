import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show';
import { DataTvService } from '../services/data-tv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {
  showList: Show[] = [];
  pageNumber: number = 1;
  totalPageNumber: number;

  constructor(private showService: DataTvService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.showService.loadShowData(this.pageNumber).subscribe(
      (response: any) => {
        this.totalPageNumber = response.total_pages;
        this.onSuccess(response.results);
      },
      (error: any) => {

      }
    );
  }

  goToShowDetail(id: number) {
    this.router.navigate(['show/detail', id]);
  }

  onSuccess(res) {
    if (res != undefined) {
      res.forEach(item => {
        this.showList.push(item);
      });
    }
  }

  onScroll() {
    if (this.pageNumber < this.totalPageNumber) {
      console.log("Scrolled page", this.pageNumber);
      this.pageNumber = this.pageNumber + 1;
      this.loadData();
    }
    else {
      return false;
    }
  }

  setDefaultSmallPosterPic(event) {
    event.target.src = "assets/movie-poster.png";
  }

  goToAboutPage() {
    this.router.navigate(["/about"]);
  }

}