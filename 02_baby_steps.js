var output = 0
for (i = 2; i < process.argv.length; i++ ){
  output += Number(process.argv[i]);
  }
console.log(output)


  // You'll need to think about how to loop through the number arguments so  you can output just their sum. 
  // The first element of the process.argv array is always 'node', and the second element is always the path to 
  // your program.js file, so you need to start at the 3rd element (index 2), adding each item to the total until you 
  // reach the end of the array.

  // Also be aware that all elements of process.argv are strings and you may need to coerce them into numbers. You can do 
  // this by prefixing the property with + or passing it to Number(). e.g. +process.argv[2] or Number(process.argv[2]).

  // learnyounode will be supplying arguments to your program when you run learnyounode verify program.js 
  // so you don't need to supply them yourself. To test your program without verifying it, you can 
  // invoke it with learnyounode run program.js. When you use run, you are invoking the test environment that 
  // learnyounode sets up for each exercise.

