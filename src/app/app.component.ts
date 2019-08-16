import { Component, OnInit } from '@angular/core';
import { Highscore } from '../app/rest-classes/highscore'
import { Achievement } from '../app/rest-classes/achievement'
import { Credentials } from '../app/rest-classes/credentials'
import { RestService } from './services/rest-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: string;
  password: string;

  constructor(private restService: RestService) { 
    this.user = 'rick2';
    this.password='morty';
  }

  ngOnInit() {
    let reg = new Credentials();
    reg.username = this.user;
    reg.password = this.password;
    this.restService.login(reg).subscribe();


    let achievement = new Achievement();
    achievement.name = this.user;
    achievement.value = 137;
    this.restService.addAchievement(achievement).subscribe();
    
  }
  
  registerUser() {
    let reg = new Credentials();
    reg.username = this.user;
    reg.password = this.password;
    this.restService.register(reg).subscribe();
  }
  
  login(){
    let reg = new Credentials();
    reg.username = this.user;
    reg.password = this.password;
  }

  addAchievement(){
    let achievement = new Achievement();
    achievement.name = this.user;
    achievement.value = 137;
    this.restService.addAchievement(achievement).subscribe();
  }
}
