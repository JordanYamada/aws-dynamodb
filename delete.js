const { v4: uuidv4 } = require('uuid');
const CoffeeModel = require('./Coffee');


async function handler(event) {

    const id = event.params.path["coffeeId"];

    let statusCode, body, headers;

    try{
      await CoffeeModel.delete(id);
      statusCode = 204;
      body = {id}
    } catch (e) {
      body={"MyError": e}
    }

    headers = {'Content-Type': 'application/json'};
    
    return {
        headers,
        statusCode,
        body
      };

}

module.exports = {handler};