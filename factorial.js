//inpelement with for loop

let i=1, num = 5, fact =1;
// for(var i=1; i<=num; i++){
//     fact*=i;
// }
// console.log(fact);

//inpelement with while loop

// while(i<=num){
//     fact*=i;
//     i++
// }
// console.log(fact);

//inpelement with do while loop

function factorial(n){
    do{
        fact*=i;
        i++;
    }while(i<=n);
    return fact;
}

var result = factorial(5);
console.log(result);