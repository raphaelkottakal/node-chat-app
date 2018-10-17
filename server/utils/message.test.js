const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMesage',() => {
  it('should return the corrent message object', () => {
    const from = 'Tester';
    const text = 'Testing generate message util';
    const theMessage = generateMessage(from, text);
    expect(theMessage).toMatchObject({
      from,
      text
    });
    expect(typeof theMessage.createdAt).toBe('number');
  })
});

describe('generateLocationMesage',() => {
  it('should return the corrent location message object', () => {
    const from = 'Tester';
    const latitude = 20;
    const longitude = 80;
    const url = 'https://www.google.com/maps?q=20,80'
    const theLocationMessage = generateLocationMessage(from, latitude, longitude);
    expect(theLocationMessage).toMatchObject({
      from,
      url
    });
    expect(typeof theLocationMessage.createdAt).toBe('number');
  })
});