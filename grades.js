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

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] < 60) {
      letterGrade.f++;
    }
    else if (scores[i] < 70) {
      letterGrade.d++;
    }
    else if (scores[i] < 80) {
      letterGrade.c++;
    }
    else if (scores[i] < 90) {
      letterGrade.b++;
    }
    else {
      letterGrade.a++
    }
}

/* spread operator used below is an ES6 thing. Used instead of push() in ES5*/
letterGrade.lowest = Math.min(...scores)
letterGrade.highest = Math.max(...scores)

console.log("a's: " + letterGrade.a)
console.log("b's: " + letterGrade.b)
console.log("c's: " + letterGrade.c)
console.log("d's: " + letterGrade.d)
console.log("f's: " + letterGrade.f)
console.log("lowest: " + letterGrade.lowest)
console.log("highest: " + letterGrade.highest)


