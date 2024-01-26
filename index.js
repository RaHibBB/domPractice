/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BM I >=25and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
 const weight = 60;
 const height = 5.6 * 0.3048;
 const bmi = weight / height **2;

 if (bmi < 18.5) {
    console.log("You are underweight");
 }
 else if (bmi >= 18.5 && bmi <= 24.9){
    console.log("You are normal");
 }
 else if (bmi >=25 && bmi <= 29.9){
    console.log("you are overweight");
 }
 
 else {
    console.log("you are obese.");
 }




/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const ChildrenAge = 5;
const isStudent = true;
const citizensAge = 70;
const ticketFare = 800;

if (ChildrenAge < 10 || isStudent === true || citizensAge >= 60 ) {
    if (ChildrenAge < 10){
        console.log("You are free to go");
    }
   if (isStudent === true) {
        console.log(`${ticketFare * 50 / 100}`);
    }
    if (citizensAge >= 60) {
        console.log(`Your Ticket Fee ${ticketFare * 15 / 100}`);
    }

} 

else {
    console.log(`You Should Pay ${ticketFare}`);
}


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

const myScore = 81;
const friendScore = 30;

if (myScore > 80 ) {
    if (friendScore > 80) {
        console.log( "Go for lunch");
    }
    else if (friendScore < 80 && friendScore >= 60){
        console.log("Good Luck Next Time");
    }
    else if (friendScore < 60 && friendScore >= 40){
        console.log("keep your friend's message unseen");
    }
    else if (friendScore < 40){
        console.log("block your friend");
    }

} 

else {
    console.log("go to home and sleep and act sad");
}
