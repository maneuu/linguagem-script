const numbers = [1, 2, 4];
let result = "";

for (let flag = 0; flag < numbers.length; flag++) {
  result += numbers[flag] + " ";
}

console.log(result); //=> "1 2 4 "
