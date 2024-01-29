/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BM I >=25and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
//  const weight = 60;
//  const height = 5.6 * 0.3048;
//  const bmi = weight / height **2;

//  if (bmi < 18.5) {
//     console.log("You are underweight");
//  }
//  else if (bmi >= 18.5 && bmi <= 24.9){
//     console.log("You are normal");
//  }
//  else if (bmi >=25 && bmi <= 29.9){
//     console.log("you are overweight");
//  }
 
//  else {
//     console.log("you are obese.");
//  }




/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// const ChildrenAge = 5;
// const isStudent = true;
// const citizensAge = 70;
// const ticketFare = 800;

// if (ChildrenAge < 10 || isStudent === true || citizensAge >= 60 ) {
//     if (ChildrenAge < 10){
//         console.log("You are free to go");
//     }
//    if (isStudent === true) {
//         console.log(`${ticketFare * 50 / 100}`);
//     }
//     if (citizensAge >= 60) {
//         console.log(`Your Ticket Fee ${ticketFare * 15 / 100}`);
//     }

// } 

// else {
//     console.log(`You Should Pay ${ticketFare}`);
// }


/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// const myScore = 81;
// const friendScore = 30;

// if (myScore > 80 ) {
//     if (friendScore > 80) {
//         console.log( "Go for lunch");
//     }
//     else if (friendScore < 80 && friendScore >= 60){
//         console.log("Good Luck Next Time");
//     }
//     else if (friendScore < 60 && friendScore >= 40){
//         console.log("keep your friend's message unseen");
//     }
//     else if (friendScore < 40){
//         console.log("block your friend");
//     }

// } 

// else {
//     console.log("go to home and sleep and act sad");
// }

/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
*/

// const studentScore = -90;

// if (studentScore >= 90 && studentScore <= 100) {
//     console.log( "You Got A");
// } 
// else if(studentScore >= 80 && studentScore <= 89){
//     console.log( "You Got B");
// }
// else if(studentScore >= 70 && studentScore <= 79){
//     console.log( "You Got C");
// }
// else if(studentScore >= 60 && studentScore <= 69){
//     console.log( "You Got D");
// }
// else if(studentScore >= 0 && studentScore <= 59){
//     console.log( "You Got F");
// }
// else {
//     console.log("Invalid Number");
// }


// switch
// Instructions:

// write a function called "getSeason" that takes a month as a number (1 for january ,2 for february .3 for March and so on ) and returns the coresponding season.

// The seasons are defined as a follows.

// spring march(3) to may(5).

// summer june(6) to August (8).

// automn Sep(9) to nov(11).

// winter dec(12) to jan(1) and feb(2).

// use a switch statement to impliment the logic.

// function getSeason(season) {
//     let seasonName;
//     switch (true) {
//         case season >= 3 && season <= 5:
//             seasonName = "Spring";
//             break;
//         case season >= 6 && season <= 8:
//             seasonName = "Summer";
//             break;

//         case season >= 9 && season <= 11:
//             seasonName = "Automn";
//             break;

//         case (season = 12) || season >= 1 && season <= 2:
//             seasonName = "Winter";
//             break;

//         default:
//             return "Invalid Input Number"
//             break;
//     }
//     return `Current season Name ${seasonName}`

// }
// const currentSeason = getSeason(13);
// console.log(currentSeason);

// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

// var myNumber =0
// var yourNumber =1
// var result =  yourNumber / myNumber ;
// console.log(result);