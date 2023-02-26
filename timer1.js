//create a timer that takes in parameter time and outputs a sound after this specified amount of time
// unlimited amount of alarms

// timeArray which will hold all process.argv answers
const timeArray = [];

// loop through all elements passed in terminal and push to timeArray - change elements to number if number
process.argv.forEach(function (time) {
  let timeElement = time;
  timeArray.push(Number(timeElement));
});

// sort timeArray in ascending order
timeArray.sort((a,b) => a-b);
// variable which will hold time + previous in order to delay beep by the right amount of time
let previousTime = 0;

// we start looping from 2 as the first two indexes contain Nan
for (let i = 2; i < timeArray.length; i++) { 
  // for the next indexes , if the index is a number and is evaluated as NaN isn't true - pass setTimeout and output sound after the right amount of time has passed
  if (typeof timeArray[i] === "number" && !isNaN(timeArray[i])) {
  setTimeout(() => {
  process.stdout.write('\x07');
  process.stdout.write(".");
  }, previousTime += timeArray[i]);
} else {
  // if the above two conditions are not true (which would mean the index is not a number), the loop will just continue without outputing anything
  continue;
}
}

// new line - this will be used for the process stdout "." - to push a new line in the terminal at the end of the sequence
setTimeout(() => {
  console.log("\n");
}, previousTime);
