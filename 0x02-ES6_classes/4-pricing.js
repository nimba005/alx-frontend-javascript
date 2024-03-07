import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  // Getter and setter for amount
  get amount() {
    return this._amount;
  }
  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('TypeError: Amount must be a number');
    }
    this._amount = value;
  }
  // Getting and setter for currency
  get currency() {
    return this._currency;
  }
  set currency(value) {
    this._currency = value;
  }
  // Method
  displayFullPrice() {
    return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;
  }
  // Static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}