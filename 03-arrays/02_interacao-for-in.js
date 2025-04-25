const numbers = [1, 2, 4];
let result = "";

for (const index in numbers) {
  result += numbers[index] + " ";
}

console.log(result); //=> "1 2 4 "
