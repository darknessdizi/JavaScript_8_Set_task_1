import Character from '../js/character';

test('test character', () => {
  const user = new Character('Ivan', 'Swordman');
  expect(user).toBeInstanceOf(Character);
  expect(user.name).toBe('Ivan');
  expect(user.type).toBe('Swordman');
});
