
/**Problem Statement:
You want to suggest clothing based on the weather. The suggestions are:
"Wear a coat" if the temperature is below 15°C.
"Wear a jacket" if the temperature is between 15°C and 25°C.
"Wear light clothing" if the temperature is above 25°C.
Write a program that provides clothing suggestions for different temperatures.
 */


let temp = 30;

if(temp < 15) {      //temp is less than 15 or below
    console.log('Wear A Coat');
}
else if(temp >= 15 && temp <= 25 ) {     // temp is below 15 or equal to 15, temp is 25 or below 
    console.log('Wear A Jacket');
}
else if(temp > 25) {                    // temp is greater or above 25
    console.log('Wear Light Clothing');

} 