const CoffeeModel = require('./Coffee.js');


async function handler(event) {
    let statusCode, body, headers;
    console.log(event)
    const id = event.params.path["coffeeId"];
    try{
      const paramBrew = event['body-json'].brew;
      const paramSize = event['body-json'].ssize;
      const coffeeOrder = {}
      if(paramBrew) coffeeOrder.brew = paramBrew;
      if(paramSize) coffeeOrder.size = paramSize
      const result = await CoffeeModel.update(id, coffeeOrder)

      statusCode = 200;
      body = JSON.stringify(result);
    } catch(e){
      statusCode = 500;
      body = e;
    }

    headers = {'Content-Type': 'application/json'};
    body = event;
    
    return {
        statusCode,
        body,
        headers
      };

}


module.exports = {handler}