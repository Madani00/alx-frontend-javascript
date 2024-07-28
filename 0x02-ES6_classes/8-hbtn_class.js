export #idefault class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(nsize) {
    if (typeof nsize !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = nsize;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = newLocation;
  }

  valueOf() {
    return this.size;
  }

  toString() {
    return this.location;
  }
}
