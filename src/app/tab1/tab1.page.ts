import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movies.interface';

import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  swiperModules = [IonicSlides];
  private movieService = inject(MoviesService)

  public movies: Movie[] = []
  public newMovies: Movie[] = []

  ngOnInit(): void {
    this.movieService.getPopularMovies()
    .subscribe(res=>this.movies.push(...res))

    this.movieService.getNewMovies()
    .subscribe(res=>this.newMovies.push(...res))
  }

}
