import Character from './character';
import Team from './team';

const user1 = new Character('Ivan', 'Swordman');
const user2 = new Character('Liza', 'Swordman');
const user3 = new Character('Ariel', 'Swordman');

const members = new Team();
members.add(user1);
members.add(user2);
members.add(user3);
console.log('Добавлено 3 объекта', members);

// try {
//   console.log('Добавляем повторный объект:');
//   members.add(user3);
// } catch {
//   console.log('Произошла ошибка', members);
// }

console.log('Метод toArray', members.toArray());

const user4 = new Character('Nika', 'Swordman');
members.addAll(user1, user2, user4);
console.log('Метод addAll', members);
