'use strict'; 

// 1. isHometown

// Define your function here
function isHomeTown(town) {

return town === "San Francisco";
}
console.log(isHomeTown("San Franci"))

// 2. getFullName

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
    
    

}
console.log(getFullName("Alyssa", "Warnick"))


// Define your function here

// 3. calculateTotal

// Define your function here
function calculateTotal(base_price, state, tax=0.05) {
let fee = 0;
const subtotal = base_price * (1 +  tax);

if (state === 'CA') {
    fee = 0.03 * subtotal;
} else if (state === 'PA') {
fee = 2;
} else if (state === 'MA') {
    if (base_price <= 100) {
    fee = 1;
     } else { 
        fee = 3;
     }

}
console.log(subtotal + fee);
}
calculateTotal(5, 'MA')