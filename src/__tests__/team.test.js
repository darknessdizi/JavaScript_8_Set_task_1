import Team from '../js/team';
import Character from '../js/character';

const user1 = new Character('Ivan', 'Swordman');
const user2 = new Character('Liza', 'Swordman');
const user3 = new Character('Ariel', 'Swordman');

test('test1 - метод add', () => {
  const members = new Team();
  members.add(user1);
  expect(members).toBeInstanceOf(Team);
  expect(members.members).toBeInstanceOf(Set);
  expect(members.members.size).toBe(1);
});

test('test2 - ловим ошибку', () => {
  expect(() => {
    const members = new Team();
    members.add(user1);
    members.add(user1);
  }).toThrow();
});

test('test3 - метод addAll', () => {
  const members = new Team();
  members.addAll(user1, user1, user2);
  expect(members.members.size).toBe(2);
  expect(members.members).toBeInstanceOf(Set);
});

test('test4 - метод toArray', () => {
  const members = new Team();
  members.addAll(user1, user2, user3);
  const newArray = members.toArray();
  expect(newArray.length).toBe(3);
  expect(newArray).toBeInstanceOf(Array);
});
