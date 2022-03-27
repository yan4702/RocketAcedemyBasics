var fahrenheitToCelsiusMain = function (Fahrenheit) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var FahrenheitConvertToCelcius = (Fahrenheit - 32) * (5 / 9);
  var celcius = FahrenheitConvertToCelcius;
  var myOutputValue = celcius;
  //return myOutputValue;
  return "The output of celcius is " + myOutputValue.toFixed(2);
};

var roadTripCostBaseMain = function (length) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var fuelConsume = 9;
  var fuelCostPerLitre = 2.2;
  var roadTripCost = (length / fuelConsume) * fuelCostPerLitre;
  return "The road trip cost is $" + roadTripCost.toFixed(2);
};

var roadTripCostComfortableMain = function (length) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var fuelConsume = 9;
  var fuelCostPerLitreForFerrari = 2.2;
  var fuelCostPerLitreForTrain = 2.0;
  var roadTripCostFerrari = (length / fuelConsume) * fuelCostPerLitreForFerrari;
  var roadTripCostTrain = (length / fuelConsume) * fuelCostPerLitreForTrain;

  var costSaving = roadTripCostFerrari - roadTripCostTrain;
  return (
    "The fuel cost saved $" +
    costSaving.toFixed(2) +
    " if user were to travel via train."
  );
};

var iceMachineMain = function (numOfGuess) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  //(5 * 453.592)) * 60- to convert 5 pounds to grams.
  var durationOfIceMachineNeeded =
    ((numOfGuess * (2 * (4 * 1.5))) / (5 * 453.592)) * 60;
  return (
    "The estimates the duration the ice machine needs to run is " +
    durationOfIceMachineNeeded.toFixed(2) +
    " hours"
  );
};

var beerOrderMain = function (numOfCustomer) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  //124 pints in half-barrel keg, so 2 X of 124 is per keg.
  var numOfKegsOfBeerPerDay = (numOfCustomer * 2) / (124 * 2);
  //var myOutputValue = "hello world";
  return (
    "The kegs of beer needed per day is " + numOfKegsOfBeerPerDay.toFixed(2)
  );
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
