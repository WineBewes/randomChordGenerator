import RandomChordGenerator from './randomChordGenerator';

function AppViewModel() {
	const randomChordGenerator = new RandomChordGenerator();
	randomChordGenerator.generate(10);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());