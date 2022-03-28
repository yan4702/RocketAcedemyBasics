var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var myOutputValue = "";
  var rollDice = function () {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    return diceRoll;
  };

  if (input > 6 || input < 1) {
    myOutputValue = "Please input valid a number";
  }
  var diceOne = rollDice();
  var diceTwo = rollDice();
  if (input == diceOne || input == diceTwo || diceOne + diceTwo == 11) {
    myOutputValue = "Congratulations, you won";
  } else {
    myOutputValue = "Try again";
  }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  var myOutputValue = "";
  if (input == "laksa" || input == "hokkien mee") {
    myOutputValue = "noodle";
  } else if (input == "roti prata" || input == "bak kut teh") {
    myOutputValue = "other";
  } else if (input == "chicken rice" || input == "nasi lemak") {
    myOutputValue = "rice";
  } else {
    myOutputValue = "Please input valid dish name";
  }
  return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  //var myOutputValue = "hello world";
  var generateNumbers = function () {
    var val = Math.floor(Math.random() * 10);
    return val;
  };
  var numberOne = generateNumbers();
  var numberTwo = generateNumbers();
  var numberThree = generateNumbers();
  var numberFour = generateNumbers();
  console.log(numberOne + "" + numberTwo + "" + numberThree + "" + numberFour);
  var myOutputValue = "";
  if (
    input == numberOne ||
    input == numberTwo ||
    input == numberThree ||
    input == numberFour
  ) {
    myOutputValue = "You Won.";
  } else {
    myOutputValue = "Try again.";
  }
  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
