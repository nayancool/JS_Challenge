//Activity - 1
 let num1 = -3

 console.log((num1 > 0? "Positive" : (num1 === 0)? "Zero": "Negative"));

 const eligVote = 18
 var age = 17

 console.log(age >= eligVote? "Eligible": "Nabalik");

 //Activity-2
let num2 = 4
let num3 = 69

function findLargest(a, b, c)
  {
    let largest;

    if (a >= b) {
        if (a >= c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }
    return largest;
  }

console.log(findLargest(num1,num2, num3));

//Activity -3
 let day = -7;
  switch( day)
  {
    case 1: day === 1
    console.log("Monday");
    break;

    case 2: day === 2
    console.log("Tuesday");
    break;

    case 3: day === 3
    console.log("Wedneday");
    break;

    case 4: day === 4
    console.log("Guruwar");
    break;

    case 5: day === 5
    console.log("Budhwar");
    break;

    case 6: day === 6
    console.log("Saniwar");
    break;

    case 7: day === 7
    console.log("Holiday");
    break;

    default:
        console.log("number 1 -7 me de baba!!");
  }

  //activity -5
  function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // Divisible by 400, it's a leap year
      } else {
        return false; // Divisible by 100 but not by 400, not a leap year
      }
    } else {
      return true; // Divisible by 4 but not by 100, it's a leap year
    }
  } else {
    return false; // Not divisible by 4, not a leap year
  }
}

// Example usage:
let year = 2024;
if (isLeapYear(year)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}