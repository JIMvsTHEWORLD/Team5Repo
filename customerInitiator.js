//initiator.js files are a way for us to use these functions without using the browser on the front end.

const customerStub = require("./stubs/customerStub.js");

console.log('process.env vars', process.env.function);

//temporarily hardcoding a test customer until we can update customer info dynamically.
const customer = {
  
};

const id = 1;

const callback = (error, data) => {
  console.log('call to callback')
  if (error) console.log('sorry, there was an error', error)
  else console.log('data', data)
}
const getData = (functionName) => {
  if (functionName === 'CreateCustomer') return customer
  else if (functionName === 'GetCustomers') return {}
  else if (functionName === 'DeleteCustomer') return id;
}

function main (functionName) { 
  customerStub[functionName](getData(functionName), callback);
}

main(process.env.function);