const bmi = require("@omarabdullah107/bmi");

const BMI = bmi(100,120)

const condition = () => {  
  if(BMI<=0) return "put right numbers"
  if(BMI<18.5) return "You are under weight";
  if(18.5<=BMI && BMI<=24.9) return "Normal";
  if(25<=BMI && BMI<=29.9) return "over weight";
  if(30<=BMI && BMI<=34.9) return "obesity(class1)";
  if(35<=BMI && BMI<=39.9) return "obesity(class2)";
  else return "extreme obesity";
}

console.log (`Your BMI = ${BMI} your condition is ${condition()}`);

