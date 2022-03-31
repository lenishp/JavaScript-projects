const team = {
    _players : [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
       },
       {
        firstName: 'Gabriel',
        lastName: 'Jesus',
        age: 13
       },
       {
        firstName: 'John',
        lastName: 'Smith',
        age: 14
       },
    ],
    _games : [
      {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
      },
      {
      opponent: 'Alexis',
      teamPoints: 42,
      opponentPoints: 27
      },
      {
      opponent: 'Ryan',
      teamPoints: 42,
      opponentPoints: 27
      }
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
  
    addGame (opponent, teamPoints, opponentPoints) {  const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game)
    }
  };
  
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
  
console.log(team.players);
  
team.addGame ('Jonathan', 52, 27); 
team.addGame ('Wolves', 38, 40); 
team.addGame ('Tigers', 56, 56);
  
console.log(team.games);