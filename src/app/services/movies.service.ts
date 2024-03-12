import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MovieResponse, Movie } from '../interfaces/movies.interface';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private key = environment.key
  private baseUrl = environment.baseUrl

  private http: HttpClient = inject(HttpClient)

  private executeQuery(query: string){
    const queryUrl = `${this.baseUrl}${query}&api_key=${this.key}`
    return this.http.get<MovieResponse>(queryUrl)
    .pipe(
      map(res=> res.results)
    )
  }

  getPopularMovies(): Observable<Movie[]>{
    return this.executeQuery('discover/movie?language=es-ES&sort_by=popularity.desc')
  }

  getNewMovies(){
    const today = new Date()
    const start = `${today.getFullYear}-${today.getMonth()+1}-01`
    const end = `${today.getFullYear}-${today.getMonth()+2}-01`
    return this.executeQuery(`discover/movie?language=es-ES&sort_by=popularity.desc&primary_release_date.gte=${start}&primary_release_date.lte=${end}`)
  }
}
