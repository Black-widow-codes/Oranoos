// 'If a product is in stock and the user has enough money, allow the purchase, if it's out of stock, display 'Out of stock", otherwsie, display "Insuffience balance'
// Variables: inStock, balance, itemPrice
// Logical Operators: AND, NOT

// Initialize
let inStock = true;
let balance = 400;
let itemPrice = 100;
let enoughBalance = balance >= itemPrice;

if (inStock && balance >= itemPrice) {
    //True block
    console.log('Allow purchase');
} else if (!inStock) {
    //False block
  console.log('Out of stock');
} else {
  console.log('Insufficient balance');
}

// 'I will bake cookies if I have all the ingredients and if there's either chocolate chips or raisins.'
// Variable: ingredients, chocolate chips, raisins
// logical operators: AND

// Build condition: you will bake if: 
// You have ingredients (hasIngredients)
// AND (&&)
// You have either chocolate chips or raisins (hasChocolateChips || hasRaisins)

let haveIngredients = true; // let hasIngredients = true;
let haveChocolateChips = false; // let hasChocolateChips = false;
let haveRaisins = true; // let haasRaisins = true;

if ('haveIngredients') {   // if (hasIngredients && hasChocolateChips || hasRaisins) {
    //True block
    console.log('I will bake cookies!');
} else { if (!haveIngredients) //-> Optional
    //False block
    console.log('I cannot bake cookies!');
}

// 'I ll cook dinner tonight if I have the ingredients and if I finish work by 6pm.'

// Build Condition: 
// You will cook dinner tonight if:
// -You have ingredients (hasIngredients)
// -AND (&&)
// -You finishWorkBy6Pm

let hasIngredients = true;
let finishedWorkBy6Pm = false;

if ('hasIngredients && finishWorkBy6Pm') {
    console.log('I will cook dinner tonight');
} else {
    console.log('I will not cook dinner tonight');
}

// 'I'll make a sandwich for lunch if there's bread and either peanut butter or jelly in the pantry.'

// Build a condition: 
// -You will make a sandwich for lunch if:
// -there's bread (hasBread)
// -AND (&&)
// -there's either peanut or jelly (haspeanut || hasjelly)

let hasBread = true;
let hasPeanut = false;
let hasJelly = true;

if('hasBread && hasPeanut || hasJelly') {
    console.log('I will make sandwich')
} else {
    console.log('I will not make sandwich')
}

// “I will go for a picnic if it's a weekend and it's sunny.”

// Build a condition:
// -You  will go for a picnic if:
// -it's a weekend (it'sAWeekend)
// -AND (&&)
// -it's sunny (it'sSunny)

let itsAWeekend = true;
let itsSunny = false;

if ('itsAWeekend && itsSunny') {
    console.log('I will go for a picnic')
} else {
    console.log('I will not go for a picnic')

}


// “Three is not bigger than thirty-three”

let numberThree = true;
let numberThirtyThree = false;

if ('numberThree <= numberThirtyThree') {
  console.log('true')
} else {
  console.log('false')
}

// “Twenty-four divided by six is four”
// Build a condition

// variable: 24, 6
// Condition: Is number / divisor equal to 4?

//let number = 24;
//let divis0r = 6;

//if (number / divisor === 4) {
    //console.log('true')
//} else {
    //console.log('false')
//}


//“Eight is larger than seven and smaller than ten”

let numerEight = true;
let numberSeven = false;
let numberTen = true;

if ('numberEight >= numberSeven <= numberTen') {
    console.log('true')
} else {
    console.log('false')
}

// “Coding” comes before “Programming” (in the alphabet) and 2023 comes before 2024 (in numbers)”

// Build a condition: Logic thinking
// 1- 'coding comes before programming'(alphabet)
// 2-'2023 comes before 2024'(in numbers)

'coding' < 'programming' // coding is less than programming     
2023 < 2024  // 2023 is less than 2024

 // combine both with a logical operator(connector) AND (&&)

// Turn it into a full conditional statement: if (condition) is true -> do something(action) otherwise -> do something (else)

    if ('coding' < 'programming' && 2023 < 2024) {
        console.log('Both statements are true');
    } else {
        console.log('Atleast one statement is false');
    }


    // If Statement
//"If the user is logged in, show the homepage."



//If Statement
//"If the user is logged in, show the homepage."

let isLoggedIn = true;  //condition

if ('isLoggedIn') {       //Checks on condition
    console.log('WelcomeToTheHomePage');
}


//If-Else Statement:
//"If the temperature is above 30 degrees, display 'Hot'; otherwise, display 'Cold'."

let temperature = 29;
if ('temperature < 30') {
    console.log('Display Hot');
} else {
    console.log('Display Cold')
}


//Nested Conditionals
//"If the account balance is greater than $0, display 'Positive'; if it is $0, display 'Neutral'; otherwise, display 'Negative'.


let accountBalance = -9;  // you can change this number

if (accountBalance > 0) {
    console.log('Positive');
}
else if(accountBalance === 0) {
    console.log('Neutral');
}
else {
    console.log('Negative');
}


// Logical AND
//"If the user is over 18 and has a valid ID, allow entry."

let age = 10;
let hasValidID = true;

if (age > 18 && hasValidID) {    //&& → means both must be true. age > 18 → checks if the user is older than 18.
    console.log('Allow Entry')
}
else {
    console.log('Entry Denied')
}


//Logical OR
//"If it is a weekend or a public holiday, display 'Closed'."

let itsWeekend = true;
let itsPublicHoliday = true;

if ('itsWeekend || itsPublicHoliday') {
    console.log('Closed!');
}


//Complex Boolean Logic
//"If the user is an admin or has a premium account and is active, allow access to premium content."

let isAdmin = false;
let hasPremium = false;
let isActive = true;

if(isAdmin || (hasPremium && isActive)) {
    console.log('Allow Access To Premium');
}
else {
    console.log('Deny Access To Premium');

}


// Chained Conditions
// "If the grade is 90 or above, assign 'A'; if it is 80 or above, assign 'B'; if it is 70 or above, assign 'C'; otherwise, assign 'F'."

let theGrade = 70; //try different values            

if(theGrade >= 90) {             // grade >= 90 → if true → print "A" and stop
    console.log('Assign A');         
}
else if(theGrade >= 80) {       // if not, check grade >= 80 → if true → print "B" and stop
    console.log('Assign B');
}
else if(theGrade >= 70) {        // if not, check grade >= 70 → if true → print "C" and stop
    console.log('Assign C');
}
else {
    console.log('Assign F')      // if none are true → print "F"

}


// Equality Check
"If the input string is 'yes' (case-insensitive), display 'Confirmed'."
//Subject/variable: input string
//condition: yes
//action: Confirmed

let input = 'yes';
if(input.toLowerCase() === 'yes') {
    console.log('Confirm')
}


// Comparisons and Math
// "If the square of a number is greater than 100, display 'Large'; otherwise, display 'Small'."

let theSquareOfNumber = 108;

if(theSquareOfNumber > 100) {
    console.log('Large');
}
else {
    console.log('Small');
}


// Compound Condition with Nested Logic
// "If the user is a student and their age is between 13 and 19, display 'Teen Student'; otherwise, display 'Other'."

// conditions: isStudent === true, age >=13, age <= 19, logical operator: &&

let isStudent = true;
let itsAge = 32;  // try different values

if(isStudent && age >= 13 && age <= 19) {
    console.log('Teen Student');
}
else {
    console.log('Others');
}


/**Condition with Multiple Variables
"If a car's speed is greater than 100 km/h, and the driver is wearing a seatbelt, display 'Safe Fast'; 
if the speed is greater than 100 km/h but the driver is not wearing a seatbelt, display 'Unsafe Fast'; otherwise, display 'Normal'."
 */

let carSpeed = 80;  // try different values
let seatBelt = false;

if(carSpeed >= 100 && seatBelt) {
console.log('SafeFast');
}
else if(carSpeed >= 100 && !seatBelt) {
    console.log('UnsafeFast');
}
else {
    console.log('Normal');
}

/**Problem Statement:
You want to categorize individuals into age groups based on their age. The categories are:
"Child" for ages 0-12
"Teenager" for ages 13-17
"Adult" for ages 18-64
"Senior" for ages 65 and above
If the age is invalid (e.g., negative), the program should return "Invalid age." 
Write a program that tests various ages and outputs the appropriate age group for each case.
 */

let isAge = 130;     // try different values
 
if(isAge < 0 ) {
console.log('Invalid Age');
}
else if(isAge >= 0 && isAge <= 12) {
    console.log('Child');
}
else if(isAge >= 13 && isAge <= 17) {
    console.log('Teenager');
}
else if(isAge >= 18 && isAge <= 64) {
    console.log('Adult');
}
else {
    console.log('Senior'); 
}
    

/**Problem Statement:
You want to assign letter grades based on a student's percentage score. The grading scale is:
"A" for scores 90 and above
"B" for scores 80-89
"C" for scores 70-79
"D" for scores 60-69
"F" for scores below 60
Write a program to categorize several test scores into their respective letter grades.

 */


let isScore = 200;   // try different values

if (isScore >= 90) {    // score is 90 or higher
    console.log('A');
}
else if(isScore >= 80 && isScore <= 89) {   // score is 80 OR ABOVE, score is 89 OR BELOW
    console.log('B');
}
else if(isScore >= 70 && isScore <= 79) {    // score is 70 or higher, score is 79 or below
    console.log('C')
} 
else if(isScore >= 60 && isScore <= 69) {    // score is 69 or higher
    console.log('D');
}
else {
    console.log('F')
}

/**Problem Statement:
You want to determine what action a driver should take based on a traffic light's color. The rules are:
"Stop" for red
"Slow down" for yellow
"Go" for green
Write a program to simulate a driver's response to various traffic light colors.
 */

let trafficLight = 'red';   // change the value

if(trafficLight == 'red') {
    console.log('Stop');
}
else if(trafficLight == 'yellow') {
    console.log('Slow Down');
}
else {                                // if(trafficLight == 'green') {
    console.log('Go');
}



/**Problem Statement:
You want to determine the benefits of a user based on their membership tier. The tiers and benefits are:
"Gold" members receive "Free shipping and priority support."
"Silver" members receive "Free shipping."
"Bronze" members receive "Standard benefits."
Write a program that checks the membership tier and outputs the corresponding benefits.
 */

let membership = 'Bronze'

if(membership == 'Gold') {
    console.log('Free Shipping && Priority Support');
}
else if(membership == 'Silver') {
    console.log('Free Shipping');
}
else if(membership == 'Bronze') {
    console.log('Standard Benefits');
}

/**Problem Statement:
You want to suggest clothing based on the weather. The suggestions are:
"Wear a coat" if the temperature is below 15°C.
"Wear a jacket" if the temperature is between 15°C and 25°C.
"Wear light clothing" if the temperature is above 25°C.
Write a program that provides clothing suggestions for different temperatures.
 */

let temp = 18;

if(temp < 15) {      //temp is above or equal to 15
    console.log('Wear A Coat');
}
else if(temp >= 15 && temp <= 25 ) {     // temp is below 15 or equal to 15, temp is 25 or below 
    console.log('Wear A Jacket');
}
else if(temp > 25) {                    // temp is 25 or above
    console.log('Wear Light Clothing');

} 
