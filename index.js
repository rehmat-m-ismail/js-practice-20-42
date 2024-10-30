// chapter 21-40 JS assigments

// Question no 1

// var firstname = prompt ("Enter you first name")
// var secondname = prompt ("Enter you second name")
// var merg = firstname+secondname +" "+ "Assalamalikum"
// alert(merg)

// Question no 2

// var fav = prompt("Which mobile phone is your favrouit")
// var user = fav
//  document.write("My favrouit mobile phone is: "+ user+"</br>")
// let length=fav.length
// document.write("Length of string is: "+ length)


// Question no 3

// let nationality = "pakistani"
// let ind = nationality.indexOf("n")
// console.log(ind)

// Question no 4

// let value = "hello world"
// let  ind = value.lastIndexOf("l")
// console.log(ind) 

// Question no 5

// var cont = "pakistani"
// var ind = cont.charAt(3)
// console.log(ind)

// Question no 6

// var city = "Hydrabad"
// var newcity = city.replace("Hydrabad","islamabad")
// console.log(newcity)

// Question no 7

// var message = `Ali and Sami are best friends. They play cricket and
// football together`
// var update = message.replace(/and/g,"&")
// document.write(update)

// Question no 8

// var num = "472"
// var typ = (typeof num)
// console.log(typ)
// var num = Number("472")
// console.log(typeof num)

// Question no 9

// var user = prompt("what is your favrout fruit")
// alert("My favirout  fruit is: "+ user.toUpperCase())

// Question no 10

// var userinput = prompt("koi bhi string dalo is k return ma ap ko us string ka first letter capital milay ga")
// var retur = userinput.toLowerCase() .replace(/\b\w/g, char => char.toUpperCase())
// alert(retur)

// Question no 11

// var num = 35.56
// var num1 = String(num).replace(".","")
// console.log(num1)

// Question no 12

// ya nahi kia ha ya karna baki ha 




// Question no 13


// Question no 14

// var username = prompt("Enter user name ")
// while (/[@.,!]/.test(username)) {
// useralert=prompt("invalid user name ")

// }
// alert("valid user name",username)

// Question no 15

// var user = prompt("what do ypu want to order for our bakery")
// var A = ["cake","apple pie","cookie","chips","patties"]
// var input = user.toLowerCase()
// if (input===A[0]) {
//     alert("found")

// }
// else if (input===A[1]) {
//     alert("found")

// }
// else if (input===A[2]) {
//     alert("found")

// }
// else if (input===A[3]) {
//     alert("found")

// }
// else if (input===A[4]) {
//     alert("found")

// }
// else{
//     alert("not found")
// }


// Question no 16

// var isvalid = false 

// while (!isvalid) {
//     let password = prompt("Enter your password:\n\n- Must contain alphabets (a-z or A-Z)\n- Must contain numbers (0-9)\n- Must contain special characters (@, ., , , or !)\n- Must be at least 6 characters long");

//     let alphabt = /^[a-zA-Z]/.test(password);
//     let num = /[0-9]/.test(password);
//     let sp = /[@.,!]/.test(password);
//     let length = password.length >= 6;
//     if (alphabt && num && sp && length) {
//         isvalid=true
//         alert("valid password")


// }else{
//     alert("invalid password");
// };
// }


// Question no 17


// Question no 18

// var country ="pakistan"
// var con =country.charAt(7);
// console.log(con)

// Question no 19

// var str = "The quick brown fox jumps over the lazy dog";
// var find = (str.match(/the/gi)).length;
// console.log(find); // Output: 2


// Question no 20

// var input = prompt("Enter a positive integer:");

// var num = parseFloat(input);

// if (num > 0) {
//     var rounded = Math.round(num);
//     var floored = Math.floor(num);
//     var ceiled = Math.ceil(num);
    
//     console.log("Number: " + num);
//     console.log("Round Off Value: " + rounded);
//     console.log("Floor Value: " + floored);
//     console.log("Ceil Value: " + ceiled);
// } else {
//     console.log("Please enter a positive integer.");
// }


// Question no 21

// var input = +prompt("Enter a negative floating-point number:");

// var num = parseFloat(input);

// if (num < 0) {
//     var rounded = Math.round(num);
//     var floored = Math.floor(num);
//     var ceiled = Math.ceil(num);

//     console.log("Number: " + num);
//     console.log("Round Off Value: " + rounded);
//     console.log("Floor Value: " + floored);
//     console.log("Ceil Value: " + ceiled);
// } else {
//     console.log("Please enter a negative floating-point number.");
// }


// Question no 22



// var input = +prompt("Enter a number:");

// var absoluteValue = Math.abs(input);

// console.log("Absolute value of " + input + " is " + absoluteValue);


// Question no 23

// var diceValue = Math.floor(Math.random() * 6) + 1;

// console.log("Dice rolled: " + diceValue);

// Question no 24

// var coinValue = Math.random() < 0.5 ? "Heads" : "Tails";
// console.log("Coin tossed: " + coinValue);

// Question no 25

// var randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log("Random number between 1 and 100: " + randomNumber);

// Question no 26

// var input = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// var weight = parseFloat(input.match(/[\d.]+/));
// if (!isNaN(weight)) {
//     console.log("Your weight is: " + weight + " kg");
// } else {
//     console.log("Invalid weight input.");}

// Question no 27

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userGuess = +prompt("Guess the secret number between 1 and 10:");

// if (userGuess === secretNumber) {
//     console.log("Congratulations! You guessed the secret number: " + secretNumber);
// } else {
//     console.log("Sorry, the secret number was: " + secretNumber);
// }


// Question no 28

// var date = new Date();
// console.log(date)


// Question no 29



// Question no 30






// 1. Display the current date and time in the browser.
// document.write("<h2>1. Current Date and Time</h2>");
// var currentDate = new Date();
// document.write("Current Date and Time: " + currentDate + "<br>");

// 2. Alert the current month in words.
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", 
//                   "August", "September", "October", "November", "December"];
// var currentMonth = monthNames[currentDate.getMonth()];
// alert("Current Month: " + currentMonth);

// 3. Alert the first 3 letters of the current day.
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = dayNames[currentDate.getDay()];
// alert("Today is: " + currentDay);

// 4. Display “It’s Fun day” if it’s Saturday or Sunday.
// document.write("<h2>4. Fun Day Check</h2>");
// if (currentDay === "Sat" || currentDay === "Sun") {
//     document.write("It’s Fun day!<br>");
// } else {
//     document.write("It’s not a Fun day!<br>");
// }

// 5. Show “First fifteen days of the month” or “Last days of the month”.
// document.write("<h2>5. Days of the Month</h2>");
// var currentDateNum = currentDate.getDate();
// if (currentDateNum < 16) {
//     document.write("First fifteen days of the month<br>");
// } else {
//     document.write("Last days of the month<br>");
// }

// 6. Determine minutes since midnight, Jan. 1, 1970.
// document.write("<h2>6. Minutes since Jan. 1, 1970</h2>");
// var minutesSince1970 = Math.floor(Date.now() / (1000 * 60));
// document.write("Minutes since Jan. 1, 1970: " + minutesSince1970 + "<br>");

// 7. Check whether it's AM or PM.
// document.write("<h2>7. AM or PM Check</h2>");
// var hours = currentDate.getHours();
// var amOrPm = hours >= 12 ? "PM" : "AM";
// alert("It's " + amOrPm);

// 8. Create a Date object for the last day of the last month of 2020.
// document.write("<h2>8. Last Day of Last Month of 2020</h2>");
// var lastDay2020 = new Date(2020, 11, 31);
// document.write("Last Day of 2020: " + lastDay2020 + "<br>");

// 9. Alert the number of days since 1st Ramadan (June 18, 2015).
// document.write("<h2>9. Days since 1st Ramadan</h2>");
// var ramadanDate = new Date(2015, 5, 18);
// var diffInTime = currentDate.getTime() - ramadanDate.getTime();
// var daysSinceRamadan = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
// document.write("Days since 1st Ramadan: " + daysSinceRamadan + " days<br>");

// 10. Display the seconds elapsed since the beginning of 2015.
// document.write("<h2>10. Seconds since 2015</h2>");
// var startOf2015 = new Date(2015, 0, 1);
// var secondsSince2015 = Math.floor((currentDate - startOf2015) / 1000);
// document.write("Seconds since the beginning of 2015: " + secondsSince2015 + "<br>");

// // 11. Extract hours, reset the date object an hour ahead, and display it.
// document.write("<h2>11. Reset Date an Hour Ahead</h2>");
// var newDate = new Date();
// newDate.setHours(newDate.getHours() + 1);
// document.write("New Date (1 hour ahead): " + newDate + "<br>");

// // 12. Show the date 100 years back in an alert box.
// var pastDate = new Date();
// pastDate.setFullYear(pastDate.getFullYear() - 100);
// alert("Date 100 years back: " + pastDate);

// // 13. Ask the user about their age and show their birth year.
// document.write("<h2>13. Calculate Birth Year</h2>");
// var userAge = parseInt(prompt("Enter your age:"));
// var birthYear = currentDate.getFullYear() - userAge;
// document.write("Your birth year is: " + birthYear + "<br>");

// // 14. Generate K-Electric bill.
// document.write("<h2>14. K-Electric Bill</h2>");
// var customerName = "rehmat";
// var units = 350;
// var chargePerUnit = 16;
// var latePaymentSurcharge = 500;
// var netAmount = (units * chargePerUnit).toFixed(2);
// var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

// document.write("Customer Name: " + customerName + "<br>");
// document.write("Current Month: " + currentMonth + "<br>");
// document.write("Number of Units: " + units + "<br>");
// document.write("Charges per Unit: " + chargePerUnit + "<br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");




// 1. Function to display current date & time
// document.write('<h2>1. Current Date & Time</h2>');
// function displayDateTime() {
//     document.write(new Date());
// }
// displayDateTime();

// 2. Function to greet user with first and last name

// function greetuser() {
//     var firstname = prompt("Enter Your First Name")
//     var lastname = prompt("Enter Your lastFirst Name")
//     var fullname = firstname+" "+lastname
//     alert("hello! " + fullname)
    
// }
// greetuser();

// // 3. Function to add two numbers
// document.write('<br><br><h2>3. Sum of Two Numbers</h2>');
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
// document.write("Sum: " + addNumbers(3, 5));

// // 4. Calculator function with operator
// document.write('<br><br><h2>4. Calculator</h2>');
// function calculator(num1, num2, operator) {
//     if (operator === "+") return num1 + num2;
//     else if (operator === "-") return num1 - num2;
//     else if (operator === "*") return num1 * num2;
//     else if (operator === "/") return num1 / num2;
//     else return "Invalid operator";
// }
// document.write("Result: " + calculator(10, 5, "*"));

// // 5. Function to square a number
// document.write('<br><br><h2>5. Square of a Number</h2>');
// function square(number) {
//     return number * number;
// }
// document.write("Square: " + square(4));

// // 6. Function to compute factorial
// document.write('<br><br><h2>6. Factorial of a Number</h2>');
// function factorial(num) {
//     var result = 1;
//     for (var i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }
// document.write("Factorial: " + factorial(5));

// // 7. Function to display counting from start to end number
// document.write('<br><br><h2>7. Display Counting</h2>');
// function displayCounting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + " ");
//     }
// }
// displayCounting(1, 10);

// // 8. Nested function to compute hypotenuse
// document.write('<br><br><h2>8. Hypotenuse of Right Angle Triangle</h2>');
// function calculateHypotenuse(base, perpendicular) {
//     function square(x) {
//         return x * x;
//     }
//     return Math.sqrt(square(base) + square(perpendicular));
// }
// document.write("Hypotenuse: " + calculateHypotenuse(3, 4));

// // 9. Function to calculate area of a rectangle
// document.write('<br><br><h2>9. Area of Rectangle</h2>');
// function rectangleArea(width, height) {
//     return width * height;
// }
// document.write("Area (values): " + rectangleArea(5, 10));
// var w = 6, h = 7;
// document.write("<br>Area (variables): " + rectangleArea(w, h));

// // 10. Function to check if a string is palindrome
// document.write('<br><br><h2>10. Palindrome Checker</h2>');
// function isPalindrome(str) {
//     var reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// document.write("Is 'madam' a palindrome? " + isPalindrome("madam"));

// // 11. Function to capitalize first letter of each word
// document.write('<br><br><h2>11. Title Case</h2>');
// function toTitleCase(str) {
//     var words = str.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }
// document.write(toTitleCase("the quick brown fox"));

// // 12. Function to find the longest word in a string
// document.write('<br><br><h2>12. Longest Word in String</h2>');
// function longestWord(str) {
//     var words = str.split(" ");
//     var longest = words[0];
//     for (var i = 1; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
//     return longest;
// }
// document.write("Longest word: " + longestWord("Web Development Tutorial"));

// // 13. Function to count occurrences of a specified letter
// document.write('<br><br><h2>13. Count Letter Occurrences</h2>');
// function countLetter(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// document.write("Occurrences of 'o': " + countLetter("JSResourceS.com", "o"));

// // 14. Geometrizer: Calculate circle properties
// document.write('<br><br><h2>14. Circle Properties</h2>');
// function calcCircumference(radius) {
//     return 2 * Math.PI * radius;
// }
// function calcArea(radius) {
//     return Math.PI * radius * radius;
// }
// document.write("Circumference: " + calcCircumference(5));
// document.write("<br>Area: " + calcArea(5));





// // 1. Custom function to calculate power
// document.write('<h2>1. Power Calculation</h2>');
// function power(a, b) {
//     var result = 1;
//     for (var i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }
// document.write("3^4 = " + power(3, 4));

// // 2. Function to check for leap year
// document.write('<br><br><h2>2. Leap Year Checker</h2>');
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }
// document.write("2024 is a leap year: " + isLeapYear(2024));

// // 3. Calculate area of a triangle
// document.write('<br><br><h2>3. Area of Triangle</h2>');
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }
// function calculateTriangleArea(a, b, c) {
//     var s = calculateS(a, b, c);
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }
// document.write("Area: " + calculateTriangleArea(5, 6, 7));

// // 4. Average and percentage calculation
// document.write('<br><br><h2>4. Average and Percentage</h2>');
// function average(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }
// function percentage(totalMarks, marksObtained) {
//     return (marksObtained / totalMarks) * 100;
// }
// function mainFunction(marks1, marks2, marks3) {
//     var avg = average(marks1, marks2, marks3);
//     var percent = percentage(300, marks1 + marks2 + marks3);
//     document.write("Average: " + avg + "<br>Percentage: " + percent + "%");
// }
// mainFunction(75, 85, 90);

// // 5. Custom indexOf function
// document.write('<br><br><h2>5. Custom indexOf</h2>');
// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }
// document.write("Index of 'e' in 'JavaScript': " + customIndexOf("JavaScript", "e"));

// // 6. Remove vowels from a sentence
// document.write('<br><br><h2>6. Remove Vowels</h2>');
// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, '');
// }
// document.write("Without vowels: " + removeVowels("This is a test sentence"));

// // 7. Count successive vowels
// document.write('<br><br><h2>7. Successive Vowel Count</h2>');
// function countSuccessiveVowels(text) {
//     var count = 0;
//     for (var i = 0; i < text.length - 1; i++) {
//         var pair = text[i] + text[i + 1];
//         if (/[aeiouAEIOU]{2}/.test(pair)) {
//             count++;
//         }
//     }
//     return count;
// }
// document.write("Successive vowels count: " + countSuccessiveVowels("Please read this application and give me gratuity"));

// // 8. Distance conversion functions
// document.write('<br><br><h2>8. Distance Conversions</h2>');
// function toMeters(km) { return km * 1000; }
// function toFeet(km) { return km * 3280.84; }
// function toInches(km) { return km * 39370.1; }
// function toCentimeters(km) { return km * 100000; }
// var distance = 5;
// document.write("Distance in meters: " + toMeters(distance) + "<br>");
// document.write("Distance in feet: " + toFeet(distance) + "<br>");
// document.write("Distance in inches: " + toInches(distance) + "<br>");
// document.write("Distance in centimeters: " + toCentimeters(distance));

// // 9. Calculate overtime pay
// document.write('<br><br><h2>9. Overtime Pay Calculation</h2>');
// function calculateOvertimePay(hoursWorked) {
//     var overtime = hoursWorked > 40 ? hoursWorked - 40 : 0;
//     return overtime * 12;
// }
// document.write("Overtime pay for 45 hours: Rs. " + calculateOvertimePay(45));

// // 10. Calculate currency notes required
// document.write('<br><br><h2>10. Currency Notes Calculation</h2>');
// function currencyNotes(amount) {
//     var hundreds = Math.floor(amount / 100);
//     var remaining = amount % 100;
//     var fifties = Math.floor(remaining / 50);
//     remaining %= 50;
//     var tens = Math.floor(remaining / 10);
//     document.write("Hundreds: " + hundreds + "<br>Fifties: " + fifties + "<br>Tens: " + tens);
// }
// currencyNotes(470);

// // 11. Function to count digits, words, and characters
// document.write('<br><br><h2>11. Count Digits, Words, Characters</h2>');
// function countDetails(text) {
//     var digits = text.replace(/[^0-9]/g, "").length;
//     var words = text.split(" ").length;
//     var characters = text.length;
//     return { digits: digits, words: words, characters: characters };
// }
// document.write("Digits, Words, and Characters in 'This is 3rd attempt': " + JSON.stringify(countDetails("This is 3rd attempt")));

// // 12. Calculate speed using distance and time
// document.write('<br><br><h2>12. Calculate Speed</h2>');
// function calculateSpeed(distance, time) {
//     return distance / time;
// }
// document.write("Speed: " + calculateSpeed(100, 2) + " km/h");

// // 13. Count occurrences of a specified word in a text
// document.write('<br><br><h2>13. Word Occurrences</h2>');
// function countWordOccurrence(text, word) {
//     return text.split(" ").filter(w => w.toLowerCase() === word.toLowerCase()).length;
// }
// document.write("Occurrences of 'is': " + countWordOccurrence("This is a test. Is it working?", "is"));

// // 14. Print a right-angled triangle pattern
// document.write('<br><br><h2>14. Right-Angled Triangle Pattern</h2>');
// function printTriangle(rows) {
//     for (var i = 1; i <= rows; i++) {
//         document.write("* ".repeat(i) + "<br>");
//     }
// }
// printTriangle(5);
