import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
 {path: '', component:HomeComponent},
  { path: 'Games', component: GamesComponent },
  { path: 'Login', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
