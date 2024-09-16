// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.

// I IS THE VARIABLE NAME


// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 ===0){
//         console.log(`Fizz Buzz`);
//     } else if (i % 3 === 0){
//         console.log(`Fizz`);
//     } else if (i % 5 ===0){
//         console.log(`Buzz`)
//     } else {console.log(i)}
// }   










// Part 2: Prime Time
// Now we will move onto something slightly more complex.
// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.


// for (let n = 0; n < >; n++){
//     if (n % 2 !== 0 && n % 3 !== 0){
//         console.log(`${n} is Prime`);
//     } 
// }






// let n = 6

// while (n % 2 !== 0 && n % 3 !== 0){
//     console.log(`${n} is prime`);
// } 










// Part 3: Feeling Loopy
// As a final task, solve the following practical problem regarding string processing.
// Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.
// CSV data looks like this:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26
// As you may have guessed, these values being “comma-separated” means that each comma is also a delimiter. This is why this type of data is traditionally viewed in tables. Here is how the data looks once fully parsed:
// ID	Name	Occupation	Age
// 42	Bruce	Knight	41
// 57	Bob	Fry Cook	19
// 63	Blaine	Quiz Master	58
// 98	Bill	Doctor’s Assistant	26

// Your task is to write a script that accomplishes the following:

// Loop through the characters of a given CSV string.

// Store each “cell” of data in a variable.

// When you encounter a comma, move to the next cell.

// When you encounter the “\r\n” sequence, move to the next “row.”

// Log each row of data.

// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.
// Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232

// Variables
let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

//Memory allocation for future values
let cell = ``;
let row = ``;

//For Of loop
// for (let char of string){
//     console.log(char)
// }

// For In loop
for (let i in string){
    switch(string[i]) { // (string[i] - how we look at the values in a string
        case ",":
            row = row + cell + ` `; // add cell to row
            cell = ``; //emtying cell to reuse
            // console.log(`Found Comma`);
            break;
        case "\n":
            row += cell; // add final row to cell
            cell = ``; // celar cell
            console.log(row) // print row
            row = ``; // clear row
            break;
            // console.log(`New Line`);
        default:
            cell += string[i];
            break;
    }
// if we reach final character in string, print final row
    if(i == string.length - 1){ // string.length gives total number of character in string string[string.length - 1] will give you the last character in a string
        row += cell //add final cell
        console.log(row) //print row
    }
}


//My first try:

// const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// let splitChars = ",";
// let nextRow = "\n";



// for (let i in str) {
//     if(i >= splitChars){

//     }
// 	console.log(str[i]);
// }

// for (let i = 0; i < str.length; i++){
//     if (str > nextRow && str == splitChars)
//     console.log (cell1, cell2, cell3, cell4)
// }


// let cell1 = char1
// let cell2 = char2
// let cell3 = char3
// let cell4 = char4

// let cell1 = str < 4
// let cell2 = str > 4 && str < 9
// let cell3 = str > 9 && str < 13
// let cell4 = str > 13 && str < 17

// let row1 = ID,Name,Occupation,Age
// let row2 = 42,Bruce,Knight,41
// let row3 = 57,Bob,Fry Cook,19
// let row4 = 63,Blaine,Quiz Master,58
// let row5 = 98,Bill,Doctor’s Assistant,26


// Dylans Examples

const str = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let cell1 = ``;
let cell2 = ``;
let cell3 = ``;
let cell4 = ``;
let placeholder = ``;
let counter = 0;


for (let char of str) {
  switch (char) {
    // If comma do this
    case ',':
      counter++;
      if (!cell1) {
        cell1 = placeholder;
        placeholder = ``;
      } else if (!cell2) {
        cell2 = placeholder;
        placeholder = ``;
      } else {
        cell3 = placeholder;
        placeholder = ``;
      }
      break;
    //If new line do this
    case '\n':
      counter++;
      cell4 = placeholder;
      placeholder = ``;
      console.log(cell1, cell2, cell3, cell4);
      cell1 = ``;
      cell2 = ``;
      cell3 = ``;
      cell4 = ``;
      break;
    //If char do this
    default:
      counter++;
      placeholder += char;

      if (counter === str.length) { //If it's our last character we populate cell4 and print
        cell4 = placeholder;
        placeholder = ``;
        console.log(cell1, cell2, cell3, cell4);
        cell1 = ``;
        cell2 = ``;
        cell3 = ``;
        cell4 = ``;
        counter = 0;
      }
      break;
  }
}


// Feeling Loopy

// input - ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

//What do we know?
// There is ONLY 4 cells per row
// Only "\n" escape character
//  Commas separate cells
// "\n" indicates a new line
// Has to be done in a loop *
// out input is a string, strings are iterable *
// the last row has no '\n
// console.log(cell1, cell2, cell3, cell4);
// 3 things: commas, "\n", characters

//Variables
let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Memory allocation for future values
let cell = ``;
let row = ``;

// for (let i in string) {
//   //For index in string
//   switch (string[i]) {
//     case ',':
//       row = row + cell + ' '; // Add cell to row
//       cell = ``; // Emtying cell to reuse
//       break;
//     case '\n':
//       row += cell; // Add final cell to row
//       cell = ``; // Clear cell
//       console.log(row); // Print row
//       row = ``; // Clear row
//       break;
//     default:
//       cell += string[i]; //If char, add to current cell
//       break;
//   }

//   //If we reach final character in string, print final row
//   if(i == string.length - 1){ 
//     //string.length is length of string - 114 - index is 114
//     row += cell // Add final cell
//     console.log(row) // Print row
//   }
// }

for (let i in string) {
    //For index in string
    if (string[i] == ",") {
        row = row + cell + ' '; // Add cell to row
        cell = ``; // Emtying cell to reuse
    } else if (string[i] == '\n'){
         row += cell; // Add final cell to row
        cell = ``; // Clear cell
        console.log(row); // Print row
        row = ``; // Clear row
    } else {
                cell += string[i]; //If char, add to current cell
    }
  
    //If we reach final character in string, print final row
    if(i == string.length - 1){ 
      //string.length is length of string - 114 - index is 114
      row += cell // Add final cell
      console.log(row) // Print row
    }
  }