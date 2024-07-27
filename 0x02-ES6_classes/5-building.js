export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(n) {
    if (typeof n !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = n;
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
