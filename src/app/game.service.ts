import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

import { Game } from './games';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private dataUri = `${environment.apiURL}/Games`;
  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {

    console.log("get books called" );

    return this.http.get<Game[]>(`${this.dataUri}`)

  }

}
