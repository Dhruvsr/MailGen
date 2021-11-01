

var Browser = require("zombie");
// You will need to use zombie.js
//USE THIS IF NEEDED: browser.proxy = 'http://me:secret@myproxy:8080'
function createGmailAccount(username, password) {
  var email = username + "@gmail.com";
  var password = password;
  var firstName = "FirstName";
  var lastName = "LastName";
  var displayName = firstName + " " + lastName;
  
  // visit gmail

  // opens browser
  var browser = new Browser();
  // Visit the URL.
  browser.visit("https://accounts.google.com/signup");
  // I haven't tested this on other services
  // Again waits for 10000 for latency
  browser.wait(10000);
  // Fill in the form.
  browser.fill("Email", email);
  browser.fill("Passwd", password);
  browser.fill("PasswdAgain", password);
  browser.fill("FirstName", firstName);
  browser.fill("LastName", lastName);
  browser.fill("DisplayName", displayName);
  // fill details and click signup
  browser.click("//input[@type='submit']");
  // Waits 10000 for page to load just in case for latency purpose
  browser.wait(10000);
  browser.close();
 // and close it.
}

// Name is Dhruv and Password is @Dhruv1234
createGmailAccount("Dhruv", "@Dhruv1234");
