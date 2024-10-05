export default class Building {
	constructor(sqft) {
		if (new.target !== Building && this.evacuatioWarningMessage === undefined) {
			throw Error('Class extending Building must override evacuationWarningMessage');
		}
		
		this._sqft = sqft;
	}

	get sqft() {
		return this.sqft;
	}
}
