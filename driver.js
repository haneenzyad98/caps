  
'use strict';

const events = require('./events');



function pickup(payload) {
  console.log(`DRIVER:picked up ${payload.orderId}`);
  setTimeout(()=> {
    events.emit('inTransit',payload);
}, 1000);
}

function delivered(payload){
  payload.events='inTransit';
  console.log(`DRIVER:delivered up ${payload.orderId}`);
  events.emit('delivered', payload);
}
module.exports={pickup,delivered}