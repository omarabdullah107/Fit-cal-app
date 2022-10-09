const convertm = require("@omarabdullah107/convert");
//the bmi function is basically the weight over the sqaure root of the height

function bmi(weight,height){
    sqheight = Math.pow(height,2) // the height sqaured in cm 
    bmi = weight / convertm(sqheight); // using the predefind function (convertm) to convert the cm height into meter
    return bmi*100  // multiplying the bmi to make it in kg/m**2
}


module.exports = bmi ;