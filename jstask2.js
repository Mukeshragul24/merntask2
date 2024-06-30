function sortStringAlphabetically(inputString) {
    return inputString.split("").sort().join("");
  }
  let unsortedString = "openai";
  let sortedString = sortStringAlphabetically(unsortedString);
  console.log(sortedString);