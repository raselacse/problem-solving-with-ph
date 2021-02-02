var speech = "I am a good person. I don't snore at night";
var count = 0;
for(var i=0; i<speech.length; i++){
    var letter = speech[i];
    if(letter==" " && speech[i-1]!=" "){   //speech[i-1]!=" ") ai condition na dilew code kaj korbe
        count++;
    }
}
console.log(count);