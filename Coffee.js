const dynamoose = require('dynamoose');

const coffeSchema = new dynamoose.Schema({
  brew: String,
  size: String,
});


const configObj = { create: false, update: false, waitForActive: false }

const CoffeeModel = dynamoose.model("coffee",
  coffeeSchema,
  configObj
);

module.exports = CoffeeModel;