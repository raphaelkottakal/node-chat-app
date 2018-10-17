const expect = require('expect');

const { generateMessage } = require('./message');

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