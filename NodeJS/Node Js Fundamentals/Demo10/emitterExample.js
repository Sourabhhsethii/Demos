var sayHello = function() { console.log('Hello to you') };
var sayGoodbye = function() { console.log('Good Bye !!! ')}
var EventEmitter = require('events').EventEmitter;
emitter = new  EventEmitter(0;
emitter = new  EventEmitter();
emitter = new  EventEmitter();
emitter.on('hello',sayHello)
emitter.on('goodbye',sayGoodbye)
emitter.emit('hello')
emitter.emit('goodbye');
global.emitter._events
