import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataSearchService } from '../services/data-search.service';
import { debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  results: any[] = [];
  queryField: FormControl = new FormControl();
  pageNumber: number = 1;
  totalPageNumber: number;

  constructor(private searchService: DataSearchService, private router: Router) { }

  ngOnInit() {
    this.performSearch();
  }

  loadData(query: string, pageNumber: number) {
    console.log("updated page: " + this.pageNumber);
    this.searchService.loadSearchData(query, pageNumber).subscribe(
      (response: any) => {
        this.totalPageNumber = response.total_pages;
        this.onSuccess(response.results);
      },
      (error: any) => {
        if (error.status === 422) { this.results = []; console.log(this.results.length); }
      }
    );
  }

  goToDetail(result: any) {
    if (result.media_type === "movie")
      this.router.navigate(['movie/detail', result.id]);
    else if (result.media_type === "tv")
      this.router.navigate(['show/detail', result.id]);
    else
      this.router.navigate(['people/detail', result.id]);
  }

  setDefaultPosterPic(event) {
    event.target.src = "assets/movie-poster.png";
  }

  onSuccess(res) {
    if (res != undefined) {
      res.forEach(item => {
        this.results.push(item);
      });
    }
  }

  onScroll() {
    if (this.pageNumber < this.totalPageNumber) {
      console.log("Scrolled");
      this.pageNumber = this.pageNumber + 1;
      this.loadData(this.queryField.value, this.pageNumber);
    }
    else {
      return false;
    }
  }

  goToAboutPage() {
    this.router.navigate(["/about"]);
  }

  performSearch() {
    this.queryField.valueChanges
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((query: string) => this.searchService.loadSearchData(query, this.pageNumber))
      )
      .subscribe(
        (response: any) => {
          this.results = [];
          this.onSuccess(response.results);
        },
        (error: any) => {
          if (error.status === 422) { this.results = []; console.log(this.results.length); }
        }
      );
  }
}