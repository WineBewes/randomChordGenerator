import { Component } from '@angular/core';
import { RandomBanjoChordGenerator, Chord, UserSettings } from './randomChordGenerator/randomBanjoChordGenerator'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RandomBanjoChordGenerator]
})

export class AppComponent {

  private userSettingsCookieKey = 'UserSettings';

  constructor(private randomBanjoChordGenerator: RandomBanjoChordGenerator, private cookieService: CookieService) {
    this.chords = new Array<Chord>();
    this.userSettings = new UserSettings();
    const cookieValue = this.cookieService.get(this.userSettingsCookieKey);
    if (!cookieValue) {
      this.userSettings = new UserSettings();
    }  else {
      this.userSettings = JSON.parse(cookieValue);
    }
  }
 

  title = 'Random Banjo Chord Generator';
  get withCharacter(): boolean {
    return this.userSettings.withMinor || this.userSettings.withDominant7 || this.userSettings.withDiminished;
  }

  userSettings: UserSettings;
  numberOfChordsList = [3, 5, 10];

  chords: Array<Chord>;

  getRandomChords() {
    this.cookieService.set(this.userSettingsCookieKey, JSON.stringify(this.userSettings));
    this.chords = this.randomBanjoChordGenerator.generate(this.userSettings);
  }
}

