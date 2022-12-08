const CoffeeModel = require("./Coffee.js");

const handler = async (event) => {
  const coffee = new CoffeeModel({
    brew: "Pumpkin Spice Latte",
    name: "Venti",
  })

  const result = await coffee.save();
  console.log(resp)
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Your ${result.size} ${result.brew} is ready.`),
  };
  return response;
};

module.exports = { handler };