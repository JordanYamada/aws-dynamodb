const CoffeeModel = require('./Coffee.js');





async function handler(event) {


    const id = event.params.path["coffeeId"];

    let statusCode, body, headers;

    try{
      const coffeeOrder = await CoffeeModel.get({"id": id});
      statusCode = 200;
      body = JSON.stringify(coffeeOrder)
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