export default class Team {
  constructor() {
    this.team = [];
  }

  add(person) {
    this.team.push(person);
  }

  *[Symbol.iterator]() {
    
    for (let elem of this.team) {
      yield elem;
    }
  };
}
