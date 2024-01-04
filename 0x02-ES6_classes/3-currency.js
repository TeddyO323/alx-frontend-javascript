// 3-currency.js

class Currency {
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    // Getter and Setter for 'code'
    get code() {
      return this._code;
    }
  
    set code(value) {
      // Validate the type of 'value' if needed
      this._code = value;
    }
  
    // Getter and Setter for 'name'
    get name() {
      return this._name;
    }
  
    set name(value) {
      // Validate the type of 'value' if needed
      this._name = value;
    }
  
    // Method to display full currency
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
  
  export default Currency;
  