var names = [10,20,30,10,20,30,40];
var uniqeNames = [];
for(var i=0; i<names.length; i++){
    var element = names[i];
    var index = uniqeNames.indexOf(element);
    console.log(index);
    if(index == -1){
        uniqeNames.push(element);
    }
}
console.log(uniqeNames);