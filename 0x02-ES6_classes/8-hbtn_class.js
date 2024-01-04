// Define the HolbertonClass class
export default class HolbertonClass {
  // Constructor with size and location attributes
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for the size attribute
  get size() {
    return this._size;
  }

  // Getter for the location attribute
  get location() {
    return this._location;
  }

  // Convert to a Number returns the size
  valueOf() {
    return this._size;
  }

  // Convert to a String returns the location
  toString() {
    return this._location;
  }
}
