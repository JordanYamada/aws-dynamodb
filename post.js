const { v4: uuidv4 } = require('uuid');
const CoffeeModel = require('./Coffee.js');


async function handler(event) {
    let statusCode, body, headers;
    const id = uuidv4();
    const coffeeOrder = {"id": id, brew: event.brew, size: event.size};
    const coffee = new CoffeeModel(coffeeOrder)

    
    body="body"
    const resp = await coffee.save();
    statusCode = 200;
    body = JSON.stringify(resp);

    headers = {'Content-Type': 'application/json'};
    
    return {
        statusCode,
        body,
        headers
      };

}


module.exports = {handler}