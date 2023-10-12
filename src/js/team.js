export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj)) {
      throw Error('Дублирование объекта');
    }
    this.members.add(obj);
  }

  addAll(...args) {
    args.forEach((obj) => {
      this.members.add(obj);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
