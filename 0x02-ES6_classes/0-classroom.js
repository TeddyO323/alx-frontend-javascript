export default class ClassRoom {
  /**
     * @param {number} maxStudentsSize - The maximum number of students allowed in the classroom.
     */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  /**
     * Get the maximum number of students allowed in the classroom.
     * @returns {number} - The maximum number of students.
     */
  get maxStudentsSize() {
    return this._maxStudentsSize;
  }
}
