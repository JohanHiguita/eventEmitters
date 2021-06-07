const fs = require("fs");

//How many bytes we will take
const dataLimits = {start:0, end:10};
//const dataLimits = {};

const readStream = fs.createReadStream(
  "./streamAndBuffers/data.txt",
  dataLimits
);

readStream.on('data', chunk => {
  console.log('---------------------------------');
  console.log(chunk);
  console.log("String:", chunk.toString());
  console.log('---------------------------------');

});

readStream.on('open', () => {
  console.log('Stream opened...');
});

readStream.on('end', () => {
  console.log('Stream Closed...');
});