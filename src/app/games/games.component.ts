import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/game.service'; 
import { Game } from '../games';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  
  gameList: Game[] = [];
  form: any;
  apiData: any;
  http: any;
  constructor(private GameService: GameService,  private _router: Router,route:ActivatedRoute,private activatedRoute: ActivatedRoute,) {
    route.queryParams.subscribe(val => { 
      this.GameService.getGames().subscribe(result=>{
            this.gameList = result
           
      })
  });

   }
   
  get Title():any {
    return this.form.get('GameTitle');
 
  }
  ngOnInit() {
    this.http.get('https://api.example.com/data')
      .subscribe((data: any) => {
        this.apiData = data;
      });
  }
}
