class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter and Setter for 'name'
  get name() {
    return this.name;
  }

  set name(value) {
    // Validate the type of 'value' if needed
    this.name = value;
  }

  // Getter and Setter for 'length'
  get length() {
    return this.length;
  }

  set length(value) {
    // Validate the type of 'value' if needed
    this.length = value;
  }

  // Getter and Setter for 'students'
  get students() {
    return this.students;
  }

  set students(value) {
    // Validate the type of 'value' if needed
    this.students = value;
  }
}

export default HolbertonCourse;
