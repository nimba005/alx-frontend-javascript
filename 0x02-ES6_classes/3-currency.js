export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
  // Getter and setter for code
  get code() {
    return this._code;
  }
  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = value;
  }
  // Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}