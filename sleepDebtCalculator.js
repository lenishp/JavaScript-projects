const getSleepHours = day => {
    switch (day) {
      case 'Monday':
        return 8
        break; 
      case 'Tuesday':
        return 7
        break;
      case 'Wednesday':
        return 8
        break;
      case 'Thursday':
        return 7
        break; 
      case 'Friday':
        return 6
        break;
      case 'Saturday':
        return 7
        break;
      case 'Sunday':
        return 7
        break;
      default:
        return 'Error!';
    }
    C:\Users\Lenish\Desktop\Codecademy\JavaScript\sleepDebtCalculator.js
  };
  
  console.log(`The amount of sleep on the night(hours): ${getSleepHours('Wednesday')}`); 
  
  const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + 
    getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + 
    getSleepHours('Sunday'); 
  };
  
  console.log(`The total amount of sleep you got this week(hours): ${getActualSleepHours()}`);
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  console.log(`The ideal amount of sleep for a week(hours): ${getIdealSleepHours()}`);
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log("Outcome of the calculation:You've got the perfect amount of sleep!");
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log("Outcome of the calculation:You've got " + (idealSleepHours - actualSleepHours) + 
      "hours of more sleep this week.");
    }
    else if (actualSleepHours < idealSleepHours) {
      console.log("Outcome of the calculation : You should get some rest because you've slept " + 
      (idealSleepHours - actualSleepHours) + "hours less than you should have this week.");
    }
    else {
      console.log("Error! Something went wrong, please check your code");
    }
  };
  
  calculateSleepDebt();