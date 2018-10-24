//random chord generator
'use strict';
export class RandomChordGenerator {
    generate(aantalAkkoorden) {
        this.showHeader();
        this.randomizeAndShowChords(aantalAkkoorden);
        this.showFooter();
    }
    showHeader() {
        console.clear();
        console.log('*****************************');
        console.log('**   RANDOM BANJO CHORDS   **');
        console.log('|----------|----------|------|');
        console.log('|  AKKOORD | POSITIE  | VORM |');
        console.log('|----------|----------|------|');
    }
    randomizeAndShowChords(aantalAkkoorden) {
        const notes = ['A', 'Ab', 'A#', 'B', 'Bb', 'C', 'C#', 'D', 'Db', 'D#', 'E', 'Eb', 'F', 'F#', 'G', 'Gb', 'G#'];
        const positions = ['R', '1', '2'];
        const forms = ['', 'm', '', 'd', '']; //we gaan iets meer kans geven op majeur
        for (let i = 0; i < aantalAkkoorden; i++) {
            let randomIndex = Math.floor(Math.random() * notes.length);
            const root = notes[randomIndex];
            randomIndex = Math.floor(Math.random() * positions.length);
            const position = positions[randomIndex];
            randomIndex = Math.floor(Math.random() * forms.length);
            const form = forms[randomIndex];
            this.showChord(root, position, form);
        }
    }
    showChord(root, position, form) {
        console.log('|    ' + root + '    |     ' + position + '    |   ' + form + '  |');
    }
    showFooter() {
        console.log('|----------|----------|------|');
        console.log('');
        console.log('');
        console.log('');
    }
}
;
module.exports(RandomChordGenerator);
