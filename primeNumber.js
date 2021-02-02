function primeNumber(num){
    for(var i=2; i<num; i++){
        if(num%i==0){
            return "it's not a prime number";
        }
        else{
            return "it's a prime number";
        }
    }
    return num;
}
var result = primeNumber(13);
console.log(result);