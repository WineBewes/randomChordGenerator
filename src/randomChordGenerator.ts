
//random chord generator
'use strict';

export class RandomChordGenerator  {

	public generate(aantalAkkoorden: number) {

		this.showHeader();
	
		this.randomizeAndShowChords(aantalAkkoorden);
			
		this.showFooter();
		
	}

	private showHeader(): void {
		
		console.clear();
		console.log('*****************************');
		console.log('**   RANDOM BANJO CHORDS   **');
		console.log('|----------|----------|------|')
		console.log('|  AKKOORD | POSITIE  | VORM |');
		console.log('|----------|----------|------|');
	}

	private randomizeAndShowChords(aantalAkkoorden): void {

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

	private showChord(root, position, form): void {
		console.log('|    ' + root + '    |     ' + position + '    |   ' + form + '  |')
	}

	private showFooter(): void {
		console.log('|----------|----------|------|');
		console.log('');
		console.log('');
		console.log('');
	}

};

module.exports(RandomChordGenerator);

