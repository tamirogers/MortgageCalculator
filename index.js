 
// A function that will fire when the calculate button is hit.  This function name is 
// also in html in an onclick.

function buttonFinal() {
	

// //user enters loan balance, interest rate, year terms, and selects month terms. 
// Variables are created that hold the value from the user input.

var balanceLoan = document.getElementById('basic-addon1').value;
console.log(balanceLoan)

console.log(typeof balanceLoan)

//this is an alert that fires if the user enters something other than a number
if (isNaN(balanceLoan)) {
	alert("Your loan balance is not a number.");
}


var interestRate = document.getElementById('basic-addon2').value;
console.log(interestRate)

var loanTerm = document.getElementById('basic-addon3').value;
console.log(loanTerm)

//An extra variable is needed to make the pull down menu.  The .options creates the 
// pull down, the [] gets the value that was stored in the menu, ".selectedIndex" gets this.

var monthTerms = document.getElementById("monthSelect");
var choseMonth = monthTerms.options[monthTerms.selectedIndex].text;
console.log(choseMonth);

// // Calculates the monthly interest rate, stores it in the variable.       
//     monthlyInterestRate = (interestRate / 100) / period  
var monthlyIntRate = (interestRate / 100) / loanTerm;    
console.log(monthlyIntRate)  

//  Calculates number of payments, stores in variable
//     numberOfPayments = loanTerm * period
var numOfPayments = (loanTerm * choseMonth);
console.log(numOfPayments)

//  Calculates compounded interest rate, stores in variable.
//     compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)  
var compInterestRate = Math.pow((1 + monthlyIntRate), numOfPayments);
console.log(compInterestRate)

//  Calculate interest quotient stores in variable.
//     interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedIntestRate - 1)
var intQuotient = (monthlyIntRate * compInterestRate) / (compInterestRate - 1); 
console.log(intQuotient)

//   Calculates final calculation, stores in variable.
//     monthlyPayment = loanBalance * interestQuotient;
var monthlyPayment = (balanceLoan * intQuotient);
console.log(monthlyPayment)

// The lastMessage variable references the <p> tag in html, with id "resultMath".  
//THe theAnswer var has a string that returns to the <p>.  The .innerHTML adds to the 
//lastMessage variable, using its id connection.


 var lastMessage = document.getElementById("resultMath");
    var theAnswer = "Your calculated mortgage is... " + Math.round(monthlyPayment) + ".";
    lastMessage.innerHTML = theAnswer;


}
// Code Reviewed by AP and SS.
