// a) Function to launch the browser using if-else
function launchBrowser(browserName) {
    if (browserName.toLowerCase() === "chrome") {
      console.log("Launching Chrome browser...");
    } else {
      console.log("Launching another browser: " + browserName);
    }
  }
  
  // b) Function to run tests using switch
  function runTests(testType) {
    switch (testType.toLowerCase()) {
      case "smoke":
        console.log("Running Smoke Tests...");
        break;
      case "sanity":
        console.log("Running Sanity Tests...");
        break;
      case "regression":
        console.log("Running Regression Tests...");
        break;
      default:
        console.log("Running Default Tests (Smoke)...");
    }
  }
  
  // Call the functions
  launchBrowser("Chrome");
  runTests("Sanity");