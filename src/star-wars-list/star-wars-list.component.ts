import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { StarWarsListService } from './star-wars-list.service';
import { take, finalize, switchMap, catchError, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-star-wars-list',
  templateUrl: './star-wars-list.component.html',
  styleUrls: ['./star-wars-list.component.scss']
})
export class StarWarsListComponent implements OnInit {

  movies: any[] = [];
  planets: any[] = [];
  favorites: any = [];

  constructor(
    private starWarsListService: StarWarsListService
  ) {
    this.getInitialData(); 
    this.getFavorites();
  }

  ngOnInit(): void {
  }

  getInitialData(): void {
    const apiList = [
      this.starWarsListService.getMovieList(),
      this.starWarsListService.getPlanetList()
    ];
    forkJoin(apiList).pipe(
      take(1),
    ).subscribe((res: any) => {
      this.movies = res[0].results;
      this.planets = res[1].results;
      console.log('movies', this.movies);
      console.log('planets', this.planets);
    })
  }

  onSearchMovie(key: any): void {
    this.starWarsListService.onSearchMovie(key).subscribe(res => {
      console.log('search res', res);
      this.movies = res.results;
    })
  }

  /**
   * 
   * @param item movie
   */
  addToFavorites(item: any): void {
    if(!this.favorites.includes(item.episode_id)) {
      this.favorites.push(item.episode_id);
    } else {
      const favIndex = this.favorites.indexOf(item.episode_id);
      if(favIndex > -1) {
        this.favorites.splice(favIndex, 1);
      }
    }
    this.setFavorites();
  }

  /**
   * add elements to local storage
   */
  setFavorites(): void {
    this.starWarsListService.setFavoritesToLocalStorage(this.favorites.join(','))
  }

  /**
   * get favorites from local storage
   * then push them to favorites array
   */
  getFavorites(): void {
    const favString = this.starWarsListService.getFavoritesFromLocalStorage();
    favString?.split(',').forEach(item => {
      this.favorites.push(+item);
    });
  }

}
