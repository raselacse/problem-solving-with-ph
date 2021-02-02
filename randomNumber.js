var num = 2;
var num1 = Math.floor(num);
var num2 = Math.ceil(num);
var num3 = Math.round(num);

for(var i=0; i<10; i++){
    var randomNum = Math.random()*6;
    var result = Math.round(randomNum);
    console.log(result);
}