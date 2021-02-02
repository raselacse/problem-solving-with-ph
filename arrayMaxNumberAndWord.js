
// find max word in array

/*var num = ['rasel hossain','shawon ahmed','raju ahmed','mahamodur rahman','mansurol islam'];
var max = '';
for(var i=0; i<num.length; i++){
    var element = num[i];
    if(element.length>max.length){
        max = element;
    }
}
console.log(max);*/

// find max Number in array

var num = [50,30,40,80,98,10,25,14,79];
var max = [0];
for(var i=0; i<num.length; i++){
    var element = num[i];
    if(element>max){
        max = element;
    }
}
console.log(max);