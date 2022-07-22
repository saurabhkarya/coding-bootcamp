//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvshows = [
  "The Office",
  "Travellers",
  "Parks and Recreation",
  "How I Met Your Mother",
];

tvshows.forEach((element) => {
  console.log(element);
});

//Create and array of numbers
let nums = [1, 3, 4, 5, 6, 7, 3, 3, 45, 6, 7, 8];

//Return a new array of numbers that includes every even number from the previous Arrays

let onlyEvens = (arr) => arr.filter((n) => n % 2 === 0);

console.log(onlyEvens(nums));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
