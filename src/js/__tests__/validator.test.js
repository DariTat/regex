import Validator from '../validator';

test('Проверка класса Validator', () => {
  const received = new Validator('daria_95ta');
  const expected = true;
  expect(received.validateUsername()).toBe(expected);
});
test('Проверка на ошибку', () => {
  expect(() => {
    const received = new Validator('daria_95');
    received.validateUsername();
  }).toThrowError('Имя пользователя не соответсвует установленным правилам');
});
