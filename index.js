// This is  version one of this
//
//
// for (var i = 1; i<= 100; i++) {
//   if (i%3 == 0) {
//     console.log ("Fizz");
//   }
//
//   if (i%5 == 0) {
//     console.log ("Buzz");
//   }
//   if {
//     ((i%3 == 0) && (i%5 == 0)) {
//       console.log("FizzBuzz");
//     }
//   }
//
//   if ((i%3 != 0) && (i%5 != 0)) {
//     console.log (i);
//   }
//
// }

// Now for V.2
// for (var i = 1; i<= 100; i++) {
//
//   if ( (i%3 == 0) && (i%5 ==0) )
//   {
//       console.log("FizzBuzz");
//     }
//
//
// else if (i %3 == 0) {
//   console.log("Fizz");
// }
// else if (i %5 == 0) {
//   console.log("Buzz");
// }
// else {
//   console.log(i);
// }
// }
// Now for V.3

for (var i = 1; i<= 100; i++){
var output = "";
if (i % 3 == 0) {output = "Fizz";}
if (i % 5 == 0) {output = "Buzz";}

if (output == "") {output = i;}




console.log(output);  
}
