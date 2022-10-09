const bmi = require("@omarabdullah107/bmi");
// simple app tp calculate the BMI of a person and shows the condition of ur health

function cal(){
    
    resbmi = bmi(70,180);
    return resbmi;

}


function condition(){

    if(resbmi<18.5){
        return "You are under weight";
    }
    if(18.5<=resbmi<=24.9){
        return "Normal";
    }
    if(25<=resbmi<=29.9){
        return "over weight";
    }
    if(30<=resbmi<=34.9){
        return "obesity(class1)";
    }
    if(35<=resbmi<=39.9){
        return "obesity(class2)";
    }
    if(resbmi>40){
        return "extreme obesity";
    }

}

console.log("Your BMI = " + cal() + " " + "your condition is" + " " + condition());
module.exports = cal ;

