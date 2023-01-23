export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const result = /^[a-z]+((-|_)?\d{0,3}|\d{0,3}(-|_)?)?[a-z]+$/.test(this.name);
    if (!result) {
      throw new Error('Имя пользователя не соответсвует установленным правилам');
    }
    return true;
  }
}
