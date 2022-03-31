const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Error! Please type: rock, paper or scissors.');
    }
  }
  
  /*
  console.log(getUserChoice('paper'));
  console.log(getUserChoice('rock'));
  console.log(getUserChoice('scissors'));
  console.log(getUserChoice('pap')); */
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0: 
      return 'rock';
      case 1: 
      return 'paper';
      case 2:
      return 'scissors';
    }
  };
  
  /* console.log(getComputerChoice()); */
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie!'
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Sorry,computer won!';
      } else {
        return 'Congratulatons! You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Sorry,computer won!';
      } else {
        return 'Congratulatons! You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Sorry,computer won!';
      } else {
        return 'Congratulatons! You won!';
      }
    }
  }; 
  
  /* console.log(determineWinner('rock', 'scissors'));
  console.log(determineWinner('scissors', 'rock'));
  console.log(determineWinner('paper', 'paper'));*/
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice(); 
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame(); 
  