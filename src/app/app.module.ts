import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { AboutComponent } from './about/about.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { MinutesToHourPipe } from './pipes/minutes-to-hour.pipe';
import { AgeCalculatorPipe } from './pipes/age-calculator.pipe';
import { SearchComponent } from './search/search.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberUnitConverterPipe } from './pipes/number-unit-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MoviesListComponent,
    PeopleDetailComponent,
    AboutComponent,
    ShowDetailComponent,
    ShowsListComponent,
    MinutesToHourPipe,
    AgeCalculatorPipe,
    SearchComponent,
    NumberUnitConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }