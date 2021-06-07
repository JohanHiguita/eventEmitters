const events = require('events');
const eventEmitter = new events.EventEmitter();

// listener #1
const listner1 = () => {
   console.log('listner1 executed.');
}

// listener #2
const listner2 = () => {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function (way 1)
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function (way 2)
eventEmitter.on('connection', listner2);



// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');


console.log("Program Ended.");