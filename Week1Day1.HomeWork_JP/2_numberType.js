// 1. Create a function that takes a number as a parameter
function verifyNumberType(number) {
    // 3. Use a conditional statement to check the number type
    if (number > 0) {
      return "Positive";
    } else if (number < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
  // 2. Declare and initialize a variable
  let number = -10;
  number=10;
  number=2;
  number=0;
  number=-5;
  number=-7;
  
  // 5. Call the function and print the result
  console.log("The number", number, "is", verifyNumberType(number));