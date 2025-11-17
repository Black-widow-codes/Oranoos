// Example: 'I will study at the library if it's open and if I don't have any chores at home.'
// AND (logical operator to use)
// Two variables: libraryOpen, noChores

// Initialize
let libraryOpen = true; // If false -> library is closed
let chores = false;     // If false -> we have chores

if (libraryOpen && !chores) {
  console.log("I will study at the library");
} else {
  console.log("The library is closed or I have chores to do");
}


// I'll make a sandwich for lunch if there's bread and either peanut butter or jelly in the pantry.
// AND, OR (logical operators to use)
// Three variables: haveBread, havePeanutButter, haveJelly

// Initialize
let haveBread = true;
let havePeanutButter = false;
let haveJelly = false;
if (haveBread && (havePeanutButter || haveJelly)) { // Or you can write it like... if (haveBread && havePeanutButter)
  //True block
  console.log('I will have a sandwich')
} else {
  //False block
  console.log('I will not have a sandwich')
}

// 'If the item's price is less than or equal to our available budget and the item is in stock, we can buy it'
// AND, <= (logical operators to use)
// Variables: itemPrice(Number), budget(Number), inStock(boolean)

//Inititalize
let itemPrice = 240;
let budget = 300;
let inStock = true;
let withinBudget = (itemPrice == budget) || (itemPrice < budget); // Or you can use: let withinBudget = itemPrice <= budget;
// itemPrice is eqaual or itemPrice is less than budget(in line with 40)
if (inStock && withinBudget) {
  //True block
  console.log('buy it')
} else {
    //False block
  console.log("don't buy it!")
}







