// Import events module
const events = require('events');

// Create an eventEmitter object
const eventEmitter = new events.EventEmitter();

// Bind the connection event with the handler (for connection event)
eventEmitter.on('connection', () => {
    console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
});
 
// Bind the data_received event
eventEmitter.on('data_received', () => {
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');
eventEmitter.emit('data_received');

console.log("Program Ended.");