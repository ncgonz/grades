// Instructions

// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

var letterGrade = {
  lowest:[],
  f:[],
  d:[],
  c:[],
  b:[],
  a:[]
}


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// console.log(scores)

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] < 56) {
      letterGrade.lowest.push(scores[i] + " is the lowest grade");
    }
    if (scores[i] > 50 || scores[i] <60) {
      letterGrade.f.push(scores[i])
    }
}
console.log(letterGrade)
console.log(letterGrade.lowest)

// Use console.log to output the following criteria:



// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

