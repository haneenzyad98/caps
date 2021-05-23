'use strict';

const events = require('./events');
const faker = require('faker');
require('dotenv').config();
const storeName=process.env.STORE;

function neworder() {
  const order = {
    storeName: storeName,
    orderId: faker.datatype.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.cityName(),
  };
  return order;
}



function thank(payload){
  payload.events='delivered'
  console.log('thank you');
}

module.exports={
  thank,neworder
}