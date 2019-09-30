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

// 3. 