// prompt user for a list of froyo flavours
const userInputString = prompt(
  "please enter froyo flavours seperated by commas: ",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee" // default string in prompt
);

// split the string of froyo flavours into and array of strings
const flavourArray = userInputString.split(",");

// use a object to count each instance of an froyo flavour from the array
const getFroyoObj = (flavourArray) => {
  const flavourObj = {}; // initialize an empty obj for flavours

  for (let flavour of flavourArray) {
    // loop to traverse through the array of strings
    if (flavour in flavourObj) {
      // check if flavour already exist in the object, if true increment by 1
      flavourObj[flavour]++;
    } else {
      // if flavour dont exist in the object, add flavour variable and set the value to 1
      flavourObj[flavour] = 1;
    }
  }

  return flavourObj; //returns an object
};

// returns content of the obj to console
console.log(getFroyoObj(flavourArray));
