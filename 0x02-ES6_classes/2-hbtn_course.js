class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and Setter for 'name'
  get name() {
    return this._name;
  }

  set name(value) {
    // Validate the type of 'value' if needed
    this._name = value;
  }

  // Getter and Setter for 'length'
  get length() {
    return this._length;
  }

  set length(value) {
    // Validate the type of 'value' if needed
    this._length = value;
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
