const numbers = [
  [5,2,3],
  [1,0,9],
  [7,1,9],
];

for (let i = 0; i < numbers.length; i++) {
  for (let NumArr = 0; NumArr < numbers[i].length; NumArr++) {



    console.log((i + 1) + " " + (NumArr + 1) + " = " + numbers[i][NumArr]);


  }
}
