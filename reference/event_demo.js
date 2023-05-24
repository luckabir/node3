const EventEmitter = require('events');
class MyEmitter extends EventEmitter { }
const em = new MyEmitter();

em.on('event', () => console.log('Event Fired!'));
em.emit('event');
em.emit('event');