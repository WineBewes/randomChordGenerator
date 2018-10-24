
//random chord generator
'use strict';

const randomChordGenerator = function(aantalAkkoorden) {
	
	showHeader();
	
	randomizeAndShowChords(aantalAkkoorden);
	
	showFooter();
};

const showHeader = function() {
	
	console.clear();
	console.log('*****************************');
	console.log('**   RANDOM BANJO CHORDS   **');
	console.log('|----------|----------|------|')
	console.log('|  AKKOORD | POSITIE  | VORM |');
	console.log('|----------|----------|------|');
}

const randomizeAndShowChords = function(aantalAkkoorden) {

	const notes = ['A', 'Ab', 'A#', 'B', 'Bb', 'C', 'C#', 'D', 'Db', 'D#', 'E', 'Eb', 'F', 'F#', 'G', 'Gb', 'G#'];
	const positions = ['R', '1', '2'];
	const forms = ['', 'm', '', 'd', '']; //we gaan iets meer kans geven op majeur

	for (let i = 0; i < aantalAkkoorden; i++) {

		let randomIndex = Math.floor(Math.random() * notes.length);
		const root = notes[randomIndex].padEnd(2);

		randomIndex = Math.floor(Math.random() * positions.length);

		const position = positions[randomIndex];

		randomIndex = Math.floor(Math.random() * forms.length);

		const form = forms[randomIndex].padEnd(1);

		showChord(root, position, form);
	}
}

const showChord = function(root, position, form) {
	console.log('|    ' + root + '    |     ' + position + '    |   ' + form + '  |')
}

const showFooter = function() {
	console.log('|----------|----------|------|');
	console.log('');
	console.log('');
	console.log('');
}

randomChordGenerator(10);

