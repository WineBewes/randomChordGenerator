import { Component } from '@angular/core';
import { RandomBanjoChordGenerator, Chord } from './randomChordGenerator/randomBanjoChordGenerator';
import { UserSettings } from './usersettings';
import { CookieService } from 'ngx-cookie-service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RandomBanjoChordGenerator]
})

export class AppComponent {

  private userSettingsCookieKey = 'UserSettings';

  constructor(private randomBanjoChordGenerator: RandomBanjoChordGenerator, private cookieService: CookieService,
    public translate: TranslateService) {
     // this language will be used as a fallback when a translation isn't found in the current language
     this.translate.setDefaultLang('en');
    this.chords = new Array<Chord>();
    this.userSettings = new UserSettings();
    const cookieValue = this.cookieService.get(this.userSettingsCookieKey);
    if (!cookieValue) {
      this.userSettings = new UserSettings();
    }  else {
      this.userSettings = JSON.parse(cookieValue);
      this.translate.use(this.userSettings.taal);
    }
  }

  get withCharacter(): boolean {
    return this.userSettings.withMinor || this.userSettings.withDominant7 || this.userSettings.withDiminished;
  }

  userSettings: UserSettings;
  numberOfChordsList = [3, 5, 10];
  talen = ['en', 'fr', 'nl'];
  get taal(): string {
    return this.userSettings.taal;
  } 

  set taal(value: string) {
    this.userSettings.taal = value;
    this.translate.use(value);
    this.setCookieUserSettings();
  }

  chords: Array<Chord>;

  getRandomChords() {

    this.setCookieUserSettings();

    this.chords = this.randomBanjoChordGenerator.generate(this.userSettings);
  }

  private setCookieUserSettings() {
    let path: string = null;
    const domain = window.location.hostname;
    if (domain.toLowerCase().indexOf('localhost') < 0) {
      path = '/randomChordGenerator';
    }
    this.cookieService.set(this.userSettingsCookieKey, JSON.stringify(this.userSettings), 1000, path);
  }
}

