const convercmTom = require("@omarabdullah107/convert");
const bmi = (weight,height) => (weight/convercmTom(Math.pow(height,2)))*100
module.exports = bmi ;