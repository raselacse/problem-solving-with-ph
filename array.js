//way 1
// function array(num){
//     for(var i=0; i<num.length; i++){
//         console.log(num[i]);
//     }
// }
// array([5,10,15,20]);


//way 2

function array(num){
    var larger = num[0];
    for(var i=0; i<num.length; i++){
        var result = num[i];
        if(result > larger){
            larger =  result;
        }
    }
    return larger;
}
// array([10,20]);
var largest = array([110,10,20,30,100]);
console.log(largest);
