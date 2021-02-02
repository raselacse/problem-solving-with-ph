
// way 1

// var inch = 156;
// var feet = inch/12;
// console.log(feet);

// way 2

// function inchToFeet(inch){
//     var feet = inch/12;
//     return feet;
// }
// var result = inchToFeet(156);
// console.log(result);


// way 3

function inchToFeet(inch){
    var feet = inch/12;
     return feet;
}
var values = ([156,288,300]);
for(var i = 0; i<values.length; i++){
    var result = inchToFeet(values[i]);
    console.log(result);
}


//way 4

// var values = ([156,288,300]);
// for(var i = 0; i<values.length; i++){
//     var result = values[i]/12;
//     console.log(result);
// }
