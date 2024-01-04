class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = students;
  }

  validateString(value, propertyName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return value;
  }

  validateNumber(value, propertyName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${propertyName} must be a number`);
    }
    return value;
  }

  // Getter and Setter for 'name'
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateString(value, 'Name');
  }

  // Getter and Setter for 'length'
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this.validateNumber(value, 'Length');
  }

  // Getter and Setter for 'students'
  get students() {
    return this._students;
  }

  set students(value) {
    // Validate the type of 'value' if needed
    this._students = value;
  }
}

export default HolbertonCourse;
