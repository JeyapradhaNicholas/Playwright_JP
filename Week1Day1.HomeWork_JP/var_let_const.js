// 1 & 2. Declare a global const variable
const browserVersion = "Chrome";

// 3. Create the function named getBrowserVersion
function getBrowserVersion() {
  // 4. Check if browser is Chrome
  if (browserVersion === "Chrome") {
    // 5. Declare a local variable (browserVersion) and print that variable inside function (outside block) 
    let browserVersion = "edge";
    console.log("The Browserversion is:", browserVersion);
  }

  // 5. Print the variable outside the if block
  console.log("The Browserversion is:", browserVersion);
}

// 6. Call the function
getBrowserVersion();
