
export class RandomBanjoChordGenerator  {

    private notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    private accidentals = ['b', '#'];
    private positions = ['R', '1', '2'];

    public generate(userSettings: UserSettings): Array<Chord> {

        const chords = new Array<Chord>();

        for (let i = 0; i < userSettings.numberOfChords; i++) {

            let chord = this.getChord(userSettings.withAccidentals, userSettings.withMinor,
                    userSettings.withDominant7, userSettings.withDiminished);

            // geen dubbele chords
            while (chords.some((c: Chord) => c.note === chord.note && c.position === chord.position && c.character === chord.character)) {
                chord = this.getChord(userSettings.withAccidentals, userSettings.withMinor,
                    userSettings.withDominant7, userSettings.withDiminished);
            }

            chords.push(chord);

        }

        return chords;
    }

    private getChord(withAccidentals: boolean, withMinor: boolean,
        withDominant7: boolean, withDiminished: boolean): Chord {

        const note = this.getNoteWithEventualAccidental(withAccidentals);

        const position = this.getPosition();

        const character = this.getEventualCharacter(withMinor, withDominant7, withDiminished);

        return new Chord(note, position, character);
    }

    private getNoteWithEventualAccidental(withAccidentals: boolean): string {

        let randomIndex = Math.floor(Math.random() * this.notes.length);

        const note = this.notes[randomIndex];

        if (!withAccidentals) {
            return note;
        }

        // we geven natuurlijke noten een voordeel van 2 op 3.
        const chance = Math.floor(Math.random() * 3);

        if (chance <= 1) {
            return note;
        }

        randomIndex = Math.floor(Math.random() * this.accidentals.length);

        const accidental = this.accidentals[randomIndex];

        if ((note === 'C' || note === 'F') && accidental === 'b') {
            return note + '#';
        }

        if ((note === 'B' || note === 'E') && accidental === '#') {
            return note + 'b';
        }

        return note + accidental;
    }

    private getPosition(): string {

        const randomIndex = Math.floor(Math.random() * this.positions.length);

        return this.positions[randomIndex];
    }

    private getEventualCharacter(withMinor: boolean, withDominant7: boolean, withDimished: boolean): string {

        if (!(withMinor || withDominant7 || withDimished)) {
            return '';
        }

        // we geven majeur een voordeel van 2 op 3.
        const chance = Math.floor(Math.random() * 3);

        if (chance <= 1) {
            return '';
        }

        const characters = [];

        if (withMinor) {
            characters.push('m');
        }

        if (withDominant7) {
            characters.push('7');
        }

        if (withDimished) {
            characters.push('Ø');
        }

        const randomIndex = Math.floor(Math.random() * characters.length);

        return characters[randomIndex];

    }
}

export class Chord {
    constructor(note: string, position: string, character: string) {
        this.note = note;
        this.position = position;
        this.character = character;
    }
    public note: string;
    public position: string;
    public character: string;
}


export class UserSettings {
    withAccidentals = false;
    withMinor = false;
    withDominant7 = false;
    withDiminished = false;
    numberOfChords = 5;
}
