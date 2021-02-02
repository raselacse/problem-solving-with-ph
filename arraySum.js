function arraySum(num){
    var sum = 0;
    for(var i=0; i<num.length; i++){
        sum += num[i];
    }
    return sum;
}
// var num = [50,30,40,80,90,10,20,10,70]
var result = arraySum(num = [50,30,40,80,90,10,20,10,70]);
console.log(result);