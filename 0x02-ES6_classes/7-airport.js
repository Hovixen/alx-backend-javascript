export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // return this._code;
  toString() {
    return `[object ${this._code}]`;
  }
}
