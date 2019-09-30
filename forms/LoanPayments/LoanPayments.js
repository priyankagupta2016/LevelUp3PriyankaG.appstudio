// 1.  A function named carLoanPayment that takes 3 arguments and returns the monthly payment to the main program
// Car Loan Payment

let firstArgument = prompt("Enter your first payment.")
let secondtArgument = prompt("Enter your first payment.")
let thirdArgument = prompt("Enter your first payment.")

function carLoanPayment(carTotalLoan, carTimeFrame, carInterestRate) {
  let carLoanFormula = (carTotalLoan / carTimeFrame) * ((carInterestRate / 100) + 1)
  return carLoanFormula
    let totalArgument = function carLoanPayment(firstArgument, secondArgument, thirdArgument)
    }
    
// 2. A function named homeLoanPayment that takes 3 arguments and returns the monthly payment to the main program.  Term can only be 15 or 30 years
// Home Loan Payment

function homeLoanPayment(homeTotalLoan, homeTimeFrame, homeInterestRate) {
  let answer = 0
  if (homeTimeFrame == 15) {
      answer = (homeTotalLoan / (homeTimeFrame * 12)) * ((homeInterestRate / 100) + 1)
    }else if (carTimeFrame == 30) {
      answer = (homeTotalLoan / (homeTimeFrame * 12)) * ((homeInterestRate / 100) + 1)
    } else{
    answer = "No Results"
    }
    return answer
    }

// 3. Main program that asks the user which calculator they want to use, gets their data and calls the function
// 4. Main program that gets the answer back from the function and outputs it to an alert
// 5. Program must keep running until the user says they want to stop running it

let introduction = prompt("Enter 'car' to calculate your car loan or 'home' to calculate your home loan")
console.log(introduction)
if (introduction == 'car') {
  do {
    let carTotalLoan = prompt("Enter the total amount of the loan for your car.")
    console.log(carTotalLoan)
    let carTimeFrame = prompt("Enter the amount of months on the loan.")
    console.log(carTimeFrame)
    let carInterestRate = prompt("Enter the rate of the car loan.")
    console.log(carInterestRate)
  let carLoanPaymentResponse = carLoanPayment(carTotalLoan, carTimeFrame, carInterestRate)
  alert(`The payment of a car loan for ${carTotalLoan} over ${carTimeFrame} at a ${carInterestRate} would have a monthly payment of ${carLoanPaymentResponse}.`)
  response = prompt("If you would like to enter information about another car, type 'Next'. If you do not want to continue, type 'Exit'.")
  
} else if (introduction == 'home') {
  do {
    let homeTotalLoan = prompt("Enter the total amount of the loan for your home.")
    console.log(homeTotalLoan)
    let homeTimeFrame = prompt("Enter the amount of months on the home.")
    console.log(homeTimeFrame)
    let homeInterestRate = prompt("Enter the rate of the home loan.")
    console.log(homeInterestRate)
  let homeLoanPaymentResponse = homeLoanPayment(homeTotalLoan, homeTimeFrame, homeInterestRate)
  alert(`The payment of a home loan for ${homeTotalLoan} over ${homeTimeFrame} at a ${homeInterestRate} would have a monthly payment of ${homeLoanPaymentResponse}.`)
  response = prompt("If you would like to enter information about another home, type 'Next'. If you do not want to continue, type 'Exit'.")
  
  } while (response == 'Next');
} else if (response == 'Exit') {
    alert("Have a nice rest of your day. Thank you!")
    }
    
