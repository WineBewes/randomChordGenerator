import { Component } from '@angular/core';
import { RandomBanjoChordGenerator, Chord } from './randomChordGenerator/randomBanjoChordGenerator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RandomBanjoChordGenerator]
})

export class AppComponent {
  constructor(private randomBanjoChordGenerator: RandomBanjoChordGenerator) {
    this.chords = new Array<Chord>();
  }

  title = 'Random Banjo Chord Generator';
  get withCharacter(): boolean {
    return this.withMinor || this.withDominant7 || this.withDiminished;
  }
  withAccidentals = true;
  withMinor = true;
  withDominant7 = true;
  withDiminished = true;
  numberOfChordsList = [3, 5, 10];
  numberOfChords = 5;

  chords: Array<Chord>;

  getRandomChords() {
    this.chords = this.randomBanjoChordGenerator.generate(this.numberOfChords, this.withAccidentals,
                  this.withMinor, this.withDominant7, this.withDiminished);
  }
}
