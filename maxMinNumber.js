var business = 450;
var minister = 650;
var sochib = 750;
/** 
if(business>minister){
    if(business>sochib){
        console.log('bussiness is largest');
    }
    else{
        console.log('sochib is largest')

    }
}
else{
    if(minister>sochib){
        console.log('minister is largest')
    }
    else{
        console.log('sochib is largest')
    }
}
*/
var max = Math.max(business,minister,sochib);
console.log(max);