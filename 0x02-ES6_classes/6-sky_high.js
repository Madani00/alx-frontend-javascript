import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(nFloor) {
    if (typeof nFloor !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = nFloor;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
