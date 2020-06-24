import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AboutComponent } from './about/about.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movie/detail/:id', component: MovieDetailComponent },
  { path: 'shows', component: ShowsListComponent },
  { path: 'show/detail/:id', component: ShowDetailComponent },
  { path: 'person/detail/:id', component: PeopleDetailComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }