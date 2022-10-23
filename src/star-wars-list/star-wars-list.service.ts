import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsListService {

  private baseUrl = 'https://swapi.dev/api/';

  constructor(private readonly http: HttpClient) { }

  getMovieList(): Observable<any> {
    return this.http.get(`${ this.baseUrl }films`).pipe(map((res) => res));
  }

  getPlanetList(): Observable<any> {
    return this.http.get(`${ this.baseUrl }planets`).pipe(map((res) => res));
  }

  onSearchMovie(key: string): Observable<any> {
    return this.http.get(`${ this.baseUrl }films/?search=${ key }`).pipe(map((res) => res));
  }

  setFavoritesToLocalStorage(favorites: string): void {
    localStorage.setItem('favorites', favorites );
  }  
  
  getFavoritesFromLocalStorage(): string | null {
    return localStorage.getItem('favorites');
  }

}
