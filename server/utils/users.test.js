const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let users;
  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Raphael',
        room: 'Test room'
      },
      {
        id: '2',
        name: 'George',
        room: 'Another room'
      },
      {
        id: '3',
        name: 'Jason',
        room: 'Test room'
      },
    ]
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '12345',
      name: 'Rapahel',
      room: 'Test room'
    }
    users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should return names for Test room', () => {
    const userList = users.getUserList('Test room');
    expect(userList).toEqual(['Raphael', 'Jason']);
  });
  it('should return names for Another room', () => {
    const userList = users.getUserList('Another room');
    expect(userList).toEqual(['George']);
  });

  it('should remove a user', () => {
    const user = users.removeUser('1');
    expect(user).toMatchObject({
      id: '1',
      name: 'Raphael',
      room: 'Test room'
    });
    expect(users.users.length).toBe(2);
  });
  it('should not remove an invalid user', () => {
    const user = users.removeUser('10');
    expect(user).toBe(undefined);
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const user = users.getUser('1');
    expect(user).toMatchObject(users.users[0]);
  });
  it('should not find an invalid user', () => {
    const user = users.getUser('10');
    expect(user).toBe(undefined);
  });
})