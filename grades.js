// Instructions

// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

var letterGrade = {
  lowest:[],
  f:[],
  d:[],
  c:[],
  b:[],
  a:[],
  highest:[]
}


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// console.log(scores)

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] < 56) {
      letterGrade.lowest.push(scores[i] + " is the lowest grade");
    }
    // else if (scores.length >= 50 || scores.length <= 60) {
    //   letterGrade.f.push(scores.length)
    // }
    else if (scores[i] > 97 ) {
      letterGrade.highest.push(scores[i] + " is the highest")
    }
}

console.log(letterGrade.lowest)
console.log(letterGrade.highest)

// Use console.log to output the following criteria:



// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

